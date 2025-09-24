
import { useState } from 'react';
import { api } from '../services/api';
import {
  SermoesPageContainer,
  SermoesCard,
  SermoesLogo,
  SermoesTitle,
  SermoesForm,
  SermoesSelect,
  SermoesInput,
  SermoesButton,
  SermoesResult
} from './SermoesPage.styles';
import eklesiaLogo from '../assets/EklesiaKonecta.png';
import { Helmet } from 'react-helmet';

export default function SermoesPage() {
  const [tipo, setTipo] = useState('textual');
  const [tema, setTema] = useState('');
  const [resultado, setResultado] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGerar() {
    setLoading(true);
    try {
      const resp = await api.post('/gerar-sermao', { tipo, tema });
      setResultado(resp.data.resultado || resp.data.sermao || JSON.stringify(resp.data));
    } catch (err: unknown) {
      if (typeof err === 'object' && err !== null && 'response' in err) {
        const response = (err as { response?: { data?: { detail?: string } } }).response;
        setResultado('Erro ao gerar sermão: ' + (response?.data?.detail || ((err as unknown) as Error).message));
      } else {
        setResultado('Erro ao gerar sermão: ' + (err as Error).message);
      }
    }
    setLoading(false);
  }

  return (
    <SermoesPageContainer>
      <Helmet>
        <title>Gerar Sermão - Eklesia</title>
        <link rel="icon" type="image/png" href={eklesiaLogo} />
      </Helmet>
      <SermoesCard>
        <SermoesLogo src={eklesiaLogo} alt="Logo Eklesia" />
        <SermoesTitle>Gerar Sermão</SermoesTitle>
        <SermoesForm onSubmit={e => { e.preventDefault(); handleGerar(); }}>
          <SermoesSelect value={tipo} onChange={e => setTipo(e.target.value)}>
            <option value="textual">Textual</option>
            <option value="expositivo">Expositivo</option>
            <option value="tematico">Temático</option>
          </SermoesSelect>
          <SermoesInput placeholder="Tema do sermão" value={tema} onChange={e => setTema(e.target.value)} />
          <SermoesButton type="submit" disabled={!tema || loading}>
            {loading ? 'Gerando...' : 'Gerar Sermão'}
          </SermoesButton>
        </SermoesForm>
        {resultado && <SermoesResult value={resultado} readOnly />}
      </SermoesCard>
    </SermoesPageContainer>
  );
}
