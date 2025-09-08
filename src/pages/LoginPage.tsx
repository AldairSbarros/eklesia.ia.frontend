import { useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import {
  LoginPageContainer,
  LoginCard,
  LoginLogo,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginLink
} from './LoginPage.styles';
import eklesiaLogo from '../assets/EklesiaKonecta.png';
import { Helmet } from 'react-helmet';

interface LoginPageProps {
  setToken: (token: string) => void;
}

export default function LoginPage({ setToken }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/login', new URLSearchParams({
        username: email,
        password: password,
      }));
      setToken(res.data.access_token);
      alert('Login realizado!');
      navigate('/dashboard');
    } catch (err: unknown) {
      let errorMessage = 'Verifique seus dados';
      if (err && typeof err === 'object' && 'response' in err) {
        const response = (err as { response?: { data?: { detail?: string } } }).response;
        errorMessage = response?.data?.detail || errorMessage;
      }
      alert('Erro ao logar: ' + errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginPageContainer>
      <Helmet>
        <title>Login - Eklesia</title>
        <link rel="icon" type="image/png" href={eklesiaLogo} />
      </Helmet>
      <LoginCard>
        <LoginLogo src={eklesiaLogo} alt="Logo Eklesia" />
        <LoginTitle>Eklesia IA</LoginTitle>
        <LoginForm onSubmit={handleLogin}>
          <LoginInput
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <LoginInput
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
          />
          <LoginButton type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </LoginButton>
        </LoginForm>
        <LoginLink onClick={() => navigate('/register')}>
          Não tem conta? Cadastre-se
        </LoginLink>
      </LoginCard>
    </LoginPageContainer>
  );
}
