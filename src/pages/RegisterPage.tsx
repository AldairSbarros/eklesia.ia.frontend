import { useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import {
  RegisterPageContainer,
  RegisterCard,
  RegisterLogo,
  RegisterTitle,
  RegisterForm,
  RegisterInput,
  RegisterButton,
  RegisterLink
} from './RegisterPage.styles';
import eklesiaLogo from '../assets/EklesiaKonecta.png';
import { Helmet } from 'react-helmet';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/register', {
        username: email,
        email,
        full_name: fullName,
        password,
      });
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (err) {
      let description = 'Verifique os dados';
      if (err && typeof err === 'object' && 'response' in err && err.response && typeof err.response === 'object' && 'data' in err.response && err.response.data && typeof err.response.data === 'object' && 'detail' in err.response.data) {
        // @ts-expect-error: dynamic error shape from axios
        description = err.response.data.detail || description;
      }
      alert(`Erro ao cadastrar: ${description}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <RegisterPageContainer>
      <Helmet>
        <title>Cadastro - Eklesia</title>
        <link rel="icon" type="image/png" href={eklesiaLogo} />
      </Helmet>
      <RegisterCard>
        <RegisterLogo src={eklesiaLogo} alt="Logo Eklesia" />
        <RegisterTitle>Criar Conta</RegisterTitle>
        <RegisterForm onSubmit={handleRegister}>
          <RegisterInput
            placeholder="Nome completo"
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            disabled={loading}
          />
          <RegisterInput
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <RegisterInput
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
          />
          <RegisterButton type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </RegisterButton>
        </RegisterForm>
        <RegisterLink onClick={() => navigate('/login')}>
          Já tem conta? Entrar
        </RegisterLink>
      </RegisterCard>
    </RegisterPageContainer>
  );
}
