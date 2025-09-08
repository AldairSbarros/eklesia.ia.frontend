export const BibleVideoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
  
  & iframe {
    width: 90vw;
    max-width: 900px;
    min-width: 320px;
    height: 50vw;
    max-height: 480px;
    border-radius: 18px;
    box-shadow: 0 4px 24px 0 rgba(108, 71, 255, 0.12);
    background: #000;
  }
`;
import styled from 'styled-components';

export const BibleReaderContainer = styled.div`
  width: 100%;
  background: linear-gradient(120deg, #f8fafc 60%, #e0c3fc 100%);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(108, 71, 255, 0.10);
  padding: 40px 32px 32px 32px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    padding: 18px 4vw;
  }
`;

export const BibleForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: flex-end;
  margin-bottom: 24px;
  width: 100%;
  justify-content: center;
`;

export const BibleSelect = styled.select`
  padding: 12px 16px;
  border-radius: 14px;
  border: none;
  font-size: 1.1rem;
  background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
  color: #6c47ff;
  outline: none;
  min-width: 160px;
  box-shadow: 0 2px 12px #e0eafc44;
  font-weight: 600;
`;

export const BibleInput = styled.input`
  padding: 12px 16px;
  border-radius: 14px;
  border: none;
  font-size: 1.1rem;
  background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
  color: #6c47ff;
  outline: none;
  min-width: 100px;
  box-shadow: 0 2px 12px #e0eafc44;
  font-weight: 600;
`;

export const BibleButton = styled.button`
  background: linear-gradient(90deg, #6c47ff 0%, #e0eafc 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 14px;
  padding: 12px 32px;
  cursor: pointer;
  box-shadow: 0 2px 12px #e0eafc44;
  transition: background 0.2s, transform 0.2s;
  letter-spacing: 1px;
  &:hover {
    background: linear-gradient(90deg, #e0eafc 0%, #6c47ff 100%);
    transform: scale(1.05);
  }
`;

export const BibleVersesBox = styled.div`
  margin-top: 32px;
  width: 100%;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px #e0eafc33;
  padding: 24px 18px 18px 18px;
`;

export const BibleVerse = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const BibleVerseNumber = styled.span`
  font-size: 1.05rem;
  color: #a347ff;
  font-weight: 900;
  min-width: 28px;
`;

export const BibleVerseText = styled.span`
  font-size: 1.13rem;
  color: #222;
  font-weight: 500;
`;
