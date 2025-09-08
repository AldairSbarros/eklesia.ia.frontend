import { useState } from 'react';
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
    // Aqui você pode integrar com a API de chat IA
    setTimeout(() => {
      setResposta('Resposta da IA para: ' + mensagem);
      setLoading(false);
    }, 1500);
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
