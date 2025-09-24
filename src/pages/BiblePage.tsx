import { useState } from 'react';
import { api } from '../services/api';
import { BiblePageContainer, BibleCard, BibleTitle, BibleForm, BibleInput, BibleButton, BibleResult } from './BiblePage.styles';

export default function BiblePage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    try {
      const resp = await api.post('/buscar-biblia', { query });
      setResult(resp.data.resultado || resp.data.texto || JSON.stringify(resp.data));
    } catch (err: unknown) {
      let errorMessage = 'Erro ao buscar na Bíblia: ';
      if (typeof err === 'object' && err !== null) {
        const errorObj = err as { response?: { data?: { detail?: string } }, message?: string };
        errorMessage += errorObj.response?.data?.detail || errorObj.message || JSON.stringify(errorObj);
      } else {
        errorMessage += String(err);
      }
      setResult(errorMessage);
    }
    setLoading(false);
  }

  return (
    <BiblePageContainer>
      <BibleCard>
        <BibleTitle>Pesquisar na Bíblia</BibleTitle>
        <BibleForm onSubmit={e => { e.preventDefault(); handleSearch(); }}>
          <BibleInput placeholder="Digite uma palavra, referência ou tema" value={query} onChange={e => setQuery(e.target.value)} />
          <BibleButton type="submit" disabled={!query || loading}>
            {loading ? 'Buscando...' : 'Pesquisar'}
          </BibleButton>
        </BibleForm>
        {result && <BibleResult>{result}</BibleResult>}
      </BibleCard>
    </BiblePageContainer>
  );
}
