import { useRef, useState } from 'react';
import {
  IngestPageContainer,
  IngestCard,
  IngestLogo,
  IngestTitle,
  IngestForm,
  IngestInput,
  IngestButton,
  IngestFileName
} from './IngestPage.styles';
import eklesiaLogo from '../assets/EklesiaKonecta.png';
import { Helmet } from 'react-helmet';

export default function IngestPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  }

  async function handleUpload() {
    if (!selectedFile) return;
    setUploading(true);
    // Aqui você pode integrar com a API de ingestão
    setTimeout(() => {
      alert('Arquivo enviado com sucesso!');
      setUploading(false);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }, 1500);
  }

  return (
    <IngestPageContainer>
      <Helmet>
        <title>Ingestão de Arquivos - Eklesia</title>
        <link rel="icon" type="image/png" href={eklesiaLogo} />
      </Helmet>
      <IngestCard>
        <IngestLogo src={eklesiaLogo} alt="Logo Eklesia" />
        <IngestTitle>Ingestão de Arquivos</IngestTitle>
        <IngestForm onSubmit={e => { e.preventDefault(); handleUpload(); }}>
          <IngestInput type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.html" />
          {selectedFile && <IngestFileName>Selecionado: {selectedFile.name}</IngestFileName>}
          <IngestButton type="submit" disabled={!selectedFile || uploading}>
            {uploading ? 'Enviando...' : 'Enviar'}
          </IngestButton>
        </IngestForm>
      </IngestCard>
    </IngestPageContainer>
  );
}
