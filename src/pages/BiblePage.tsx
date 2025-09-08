import { useState } from 'react';
import { BiblePageContainer, BibleCard, BibleTitle, BibleForm, BibleInput, BibleButton, BibleResult } from './BiblePage.styles';

export default function BiblePage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    // Aqui você pode integrar com a API de busca bíblica
    setTimeout(() => {
      setResult('Exemplo de resultado para: ' + query);
      setLoading(false);
    }, 1200);
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
