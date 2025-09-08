import styled from 'styled-components';

export const ChatPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #181a20 60%, #00e6fb 100%);
`;

export const ChatCard = styled.div`
  background: rgba(24,26,32,0.95);
  backdrop-filter: blur(2px);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(0, 230, 251, 0.18);
  padding: 48px 32px 40px 32px;
  min-width: 400px;
  max-width: 90vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatLogo = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
`;

export const ChatTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #00e6fb;
  margin-bottom: 18px;
  letter-spacing: 2px;
  text-align: center;
`;

export const ChatForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

export const ChatInput = styled.input`
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
  background: #23263a;
  color: #fff;
  outline: none;
`;

export const ChatButton = styled.button`
  background: linear-gradient(90deg, #00e6fb 0%, #181a20 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  padding: 12px 32px;
  cursor: pointer;
  box-shadow: 0 2px 12px #00e6fb44;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #181a20 0%, #00e6fb 100%);
    transform: scale(1.05);
  }
`;

export const ChatResponse = styled.textarea`
  background: #181a20;
  color: #00e6fb;
  border: none;
  border-radius: 10px;
  padding: 16px;
  font-size: 1.1rem;
  margin-top: 12px;
  min-height: 80px;
  width: 100%;
  resize: none;
`;
