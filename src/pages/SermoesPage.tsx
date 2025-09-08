
import { useState } from 'react';
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
    // Aqui você pode integrar com a API de geração de sermão
    setTimeout(() => {
      setResultado('Sermão gerado para o tema: ' + tema + ' (' + tipo + ')');
      setLoading(false);
    }, 1800);
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
