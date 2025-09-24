import { useState } from 'react';
import { api } from '../services/api';
import {
  ChatPageContainer,
  ChatCard,
  ChatLogo,
  ChatTitle,
  ChatForm,
  ChatInput,
  ChatButton,
  ChatResponse
} from './ChatPage.styles';
import eklesiaLogo from '../assets/EklesiaKonecta.png';
import { Helmet } from 'react-helmet';

export default function ChatPage() {
  const [mensagem, setMensagem] = useState('');
  const [resposta, setResposta] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleEnviar() {
    setLoading(true);
    try {
      const resp = await api.post('/perguntar', { pergunta: mensagem });
      // Ajuste conforme o campo retornado pelo backend
      setResposta(resp.data.resposta || JSON.stringify(resp.data));
    } catch (err: unknown) {
      if (typeof err === 'object' && err !== null && 'response' in err) {
        const errorObj = err as { response?: { data?: { detail?: string } }, message?: string };
        setResposta('Erro ao consultar IA: ' + (errorObj.response?.data?.detail || errorObj.message));
      } else if (err instanceof Error) {
        setResposta('Erro ao consultar IA: ' + err.message);
      } else {
        setResposta('Erro ao consultar IA: erro desconhecido');
      }
    }
    setLoading(false);
  }

  return (
    <ChatPageContainer>
      <Helmet>
        <title>Chat IA - Eklesia</title>
        <link rel="icon" type="image/png" href={eklesiaLogo} />
      </Helmet>
      <ChatCard>
        <ChatLogo src={eklesiaLogo} alt="Logo Eklesia" />
        <ChatTitle>Chat com IA</ChatTitle>
        <ChatForm onSubmit={e => { e.preventDefault(); handleEnviar(); }}>
          <ChatInput
            placeholder="Digite sua pergunta"
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
            disabled={loading}
          />
          <ChatButton type="submit" disabled={!mensagem || loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </ChatButton>
        </ChatForm>
        {resposta && (
          <ChatResponse value={resposta} readOnly />
        )}
      </ChatCard>
    </ChatPageContainer>
  );
}
