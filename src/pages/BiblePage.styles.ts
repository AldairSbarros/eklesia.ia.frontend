import styled from 'styled-components';

export const BiblePageContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #f8fafc 0%, #e0c3fc 100%);
`;

export const BibleCard = styled.div`
  background: #fff;
  border-radius: 24px 8px 32px 16px;
  box-shadow: 0 8px 32px 0 rgba(60, 60, 120, 0.12);
  padding: 40px 32px 32px 32px;
  min-width: 340px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BibleTitle = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: #6c47ff;
  margin-bottom: 18px;
`;

export const BibleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

export const BibleInput = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #b8c6ff;
  font-size: 1.1rem;
  outline: none;
`;

export const BibleButton = styled.button`
  background: linear-gradient(90deg, #6c47ff 0%, #b8c6ff 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  padding: 12px 0;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #b8c6ff 0%, #6c47ff 100%);
    transform: scale(1.04);
  }
`;

export const BibleResult = styled.div`
  margin-top: 18px;
  color: #6c47ff;
  font-size: 1.1rem;
  font-weight: 600;
`;
