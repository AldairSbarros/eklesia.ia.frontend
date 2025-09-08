import styled from 'styled-components';

export const DashboardContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%);
  padding: 40px 0;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto 0 auto;
`;

export const AsymmetricCard = styled.div`
  background: linear-gradient(135deg, #f8fafc 60%, #e0c3fc 100%);
  border-radius: 32px 8px 40px 16px;
  box-shadow: 0 8px 32px 0 rgba(60, 60, 120, 0.18);
  padding: 36px 28px 32px 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-8px) scale(1.04) rotate(-1deg);
    box-shadow: 0 16px 48px 0 rgba(120, 60, 255, 0.18);
    background: linear-gradient(120deg, #e0c3fc 60%, #f8fafc 100%);
  }
`;

export const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: #6c47ff;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
`;

export const CardText = styled.p`
  color: #444;
  font-size: 1.1rem;
  margin-bottom: 18px;
`;

export const CardButton = styled.button`
  background: linear-gradient(90deg, #6c47ff 0%, #b8c6ff 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 12px;
  padding: 12px 32px;
  cursor: pointer;
  box-shadow: 0 2px 12px #b8c6ff44;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #b8c6ff 0%, #6c47ff 100%);
    transform: scale(1.05);
  }
`;
