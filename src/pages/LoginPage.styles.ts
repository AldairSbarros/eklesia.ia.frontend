import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #e0eafc 60%, #6c47ff 100%);
`;

export const LoginCard = styled.div`
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(2px);
  border-radius: 28px;
  box-shadow: 0 8px 32px 0 rgba(108, 71, 255, 0.12);
  padding: 48px 32px 40px 32px;
  min-width: 400px;
  max-width: 90vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginLogo = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #6c47ff;
  margin-bottom: 18px;
  letter-spacing: 2px;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

export const LoginInput = styled.input`
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #e0eafc;
  font-size: 1.1rem;
  background: #f8fafc;
  color: #6c47ff;
  outline: none;
`;

export const LoginButton = styled.button`
  background: linear-gradient(90deg, #6c47ff 0%, #e0eafc 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  padding: 12px 32px;
  cursor: pointer;
  box-shadow: 0 2px 12px #e0eafc44;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #e0eafc 0%, #6c47ff 100%);
    transform: scale(1.05);
  }
`;

export const LoginLink = styled.a`
  color: #6c47ff;
  font-size: 1rem;
  margin-top: 12px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;
