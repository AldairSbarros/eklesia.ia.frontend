

import { DashboardContainer, AsymmetricCard, CardTitle, CardText, CardButton } from './DashboardPage.styles';
import BibleReader from '../components/BibleReader/BibleReader';
import eklesiaLogo from '../assets/EklesiaKonecta.png';



function DashboardPage() {
  return (
    <DashboardContainer>
      <img src={eklesiaLogo} alt="Logo Eklesia" style={{ width: 180, height: 120, marginBottom: 8 }} />
      <h1 style={{ fontWeight: 900, fontSize: '2.2rem', color: '#6c47ff', marginBottom: 18, textAlign: 'center' }}>EklesiaIA - Painel</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', width: '100%', maxWidth: 1200, margin: '0 auto 32px auto', gap: 32 }}>
        <div style={{ flex: '1 1 320px', minWidth: 320, maxWidth: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(120deg, #e0eafc 60%, #cfdef3 100%)', borderRadius: 24, boxShadow: '0 4px 24px 0 rgba(108, 71, 255, 0.10)', padding: 32, marginBottom: 16, alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <img src={eklesiaLogo} alt="Logo Eklesia" style={{ width: 90, height: 60, marginBottom: 10, filter: 'drop-shadow(0 2px 8px #6c47ff44)' }} />
          <h2 style={{ color: '#6c47ff', fontWeight: 800, fontSize: '1.5rem', marginBottom: 12, textAlign: 'center', letterSpacing: 1 }}>O que é o Eklesia IA?</h2>
          <p style={{ color: '#444', fontSize: '1.08rem', fontWeight: 500, marginBottom: 10, textAlign: 'justify', textJustify: 'inter-word', lineHeight: 1.6 }}>
            O Eklesia IA é uma plataforma teológica inovadora que integra inteligência artificial para potencializar o estudo, pesquisa e produção de conteúdo bíblico. Nosso objetivo é ser o maior ecossistema digital para líderes, estudiosos e apaixonados pela Palavra, oferecendo recursos como pesquisa bíblica avançada, geração de sermões, ingestão de materiais e um chat IA para dúvidas e inspiração.
          </p>
          <p style={{ color: '#444', fontSize: '1.08rem', fontWeight: 500, textAlign: 'justify', textJustify: 'inter-word', lineHeight: 1.6 }}>
            Nossa missão é democratizar o acesso ao conhecimento bíblico, tornando o aprendizado mais dinâmico, personalizado e acessível a todos, em qualquer lugar.
          </p>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="IA, Bíblia e Manuscritos" style={{ width: '100%', borderRadius: 18, marginTop: 18, boxShadow: '0 2px 12px #6c47ff22', objectFit: 'cover', maxHeight: 120 }} />
        </div>
        <div style={{ flex: '2 1 480px', minWidth: 340, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <AsymmetricCard>
              <CardTitle>Gestão de Arquivos</CardTitle>
              <CardText>Organize e envie seus materiais de estudo, livros e anotações para consulta rápida.</CardText>
              <CardButton onClick={() => window.location.href = '/ingest'}>Acessar</CardButton>
            </AsymmetricCard>
            <AsymmetricCard>
              <CardTitle>Pesquisar na Bíblia</CardTitle>
              <CardText>Busque passagens, temas e referências em diversas versões e idiomas.</CardText>
              <CardButton onClick={() => window.location.href = '/bible'}>Acessar</CardButton>
            </AsymmetricCard>
            <AsymmetricCard>
              <CardTitle>Gerar Sermão</CardTitle>
              <CardText>Crie sermões personalizados e inspiradores com auxílio da IA.</CardText>
              <CardButton onClick={() => window.location.href = '/sermoes'}>Acessar</CardButton>
            </AsymmetricCard>
            <AsymmetricCard>
              <CardTitle>Bate-papo com IA</CardTitle>
              <CardText>Tire dúvidas teológicas, peça sugestões e converse com a IA treinada.</CardText>
              <CardButton onClick={() => window.location.href = '/chat'}>Acessar</CardButton>
            </AsymmetricCard>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 32, width: '100%', maxWidth: 1200 }}>
        <h2 style={{ color: '#6c47ff', fontWeight: 700, marginBottom: 16 }}>Eklesia Bíblia Digital, Faça Aqui sua Leitura Bíblica</h2>
        <BibleReader />
      </div>
    </DashboardContainer>
  );
}

export default DashboardPage;
