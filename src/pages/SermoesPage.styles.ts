import styled from 'styled-components';

export const SermoesPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #e0c3fc 60%, #f8fafc 100%);
`;

export const SermoesCard = styled.div`
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

export const SermoesLogo = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
`;

export const SermoesTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #a347ff;
  margin-bottom: 18px;
  letter-spacing: 2px;
  text-align: center;
`;

export const SermoesForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

export const SermoesSelect = styled.select`
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #e0c3fc;
  font-size: 1.1rem;
  background: #f8fafc;
  color: #a347ff;
  outline: none;
`;

export const SermoesInput = styled.input`
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #e0c3fc;
  font-size: 1.1rem;
  background: #f8fafc;
  color: #a347ff;
  outline: none;
`;

export const SermoesButton = styled.button`
  background: linear-gradient(90deg, #a347ff 0%, #e0c3fc 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  padding: 12px 32px;
  cursor: pointer;
  box-shadow: 0 2px 12px #e0c3fc44;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #e0c3fc 0%, #a347ff 100%);
    transform: scale(1.05);
  }
`;

export const SermoesResult = styled.textarea`
  background: #f8fafc;
  color: #a347ff;
  border: none;
  border-radius: 10px;
  padding: 16px;
  font-size: 1.1rem;
  margin-top: 12px;
  min-height: 80px;
  width: 100%;
  resize: none;
`;
