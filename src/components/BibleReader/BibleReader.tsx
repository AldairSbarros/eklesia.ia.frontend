
import { useState, useEffect } from "react";
import YouTubePlayer from "../YouTubePlayer/YouTubePlayer.tsx";
import {
  mateusPlayList,
  marcosPlayList,
  lucasPlayList,
  joaoPlayList,
  aliancaPlayList,
  aliancaPlayList1,
} from "./youtubePlayList";

import {
  BibleReaderContainer,
  BibleForm,
  BibleSelect,
  BibleInput,
  BibleButton,
  BibleVersesBox,
  BibleVerse,
  BibleVerseNumber,
  BibleVerseText,
  BibleVideoBox
} from './BibleReader.styles';

const API_URL = "https://4.dbt.io/api";
const API_KEY = import.meta.env.VITE_BIBLE_API_KEY;


const idiomas = [
  { code: "por", label: "Português" },
  { code: "tik", label: "Tikuna" },
  { code: "ell", label: "Grego" },
  { code: "heb", label: "Hebraico" },
  { code: "eng", label: "Inglês" },
  { code: "spa", label: "Espanhol" },
];

// Tipos auxiliares (ajuste conforme necessário)
type Biblia = { abbr: string; name: string };
type Livro = { book_id: string; name: string };
type Verse = { verse_text: string; verse_sequence?: number; verse_start?: number };
type Fileset = { id: string; type?: string; set_type_code?: string };

function getBookKey(livro: string): string {
  return livro;
}

const BibleReader = () => {
  const [idioma, setIdioma] = useState("");
  const [biblias, setBiblias] = useState<Biblia[]>([]);
  const [biblia, setBiblia] = useState("");
  const [livros, setLivros] = useState<Livro[]>([]);
  const [livro, setLivro] = useState("");
  const [capitulo, setCapitulo] = useState(1);
  const [versiculos, setVersiculos] = useState<Verse[]>([]);
  const [audioUrl, setAudioUrl] = useState("");
  const [, setVideoUrl] = useState("");
  const [filesets, setFilesets] = useState<Fileset[]>([]);
  const [loading, setLoading] = useState(false);
  const [fatalError, setFatalError] = useState<string | null>(null);

  useEffect(() => {
    setBiblia("");
    setLivros([]);
    setLivro("");
    setVersiculos([]);
    setFilesets([]);
    if (idioma) {
      fetch(`${API_URL}/bibles?language_code=${idioma}&v=4&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => setBiblias(data.data || []));
    }
  }, [idioma]);

  useEffect(() => {
    setLivros([]);
    setLivro("");
    setVersiculos([]);
    setFilesets([]);
    if (biblia) {
      fetch(`${API_URL}/bibles/${biblia}/book?v=4&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => setLivros(data.data || []));
      fetch(`${API_URL}/bibles/${biblia}?v=4&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          const fsObj = data.data?.filesets || {};
          const fs = Object.values(fsObj).flat() as Fileset[];
          setFilesets(fs);
        });
    }
  }, [biblia]);

  const buscarConteudo = async () => {
    setLoading(true);
    setVersiculos([]);
    setAudioUrl("");
    setVideoUrl("");
    setFatalError(null);
    try {
      const textoFileset = filesets.find(
        (f) => f.type?.startsWith("text") || f.set_type_code?.startsWith("text")
      );
      if (textoFileset) {
        const textoRes = await fetch(
          `${API_URL}/bibles/filesets/${textoFileset.id}/${livro}/${capitulo}?v=4&key=${API_KEY}`
        );
        if (!textoRes.ok) throw new Error('Erro ao buscar texto bíblico');
        const textoData = await textoRes.json();
        if (Array.isArray(textoData.data) && textoData.data.length > 0) {
          setVersiculos(textoData.data);
        } else {
          setVersiculos([{ verse_text: "Texto não disponível para esta versão/capítulo." }]);
        }
      } else {
        setVersiculos([{ verse_text: "Texto não disponível para esta versão." }]);
      }

      const audioFileset = filesets.find(
        (f) =>
          f.type === "audio" ||
          f.type === "audio_drama" ||
          f.set_type_code === "audio" ||
          f.set_type_code === "audio_drama"
      );
      if (audioFileset) {
        const audioRes = await fetch(
          `${API_URL}/bibles/filesets/${audioFileset.id}/${livro}/${capitulo}?v=4&key=${API_KEY}`
        );
        if (audioRes.ok) {
          const audioData = await audioRes.json();
          setAudioUrl(audioData.data?.[0]?.path || "");
        } else {
          setAudioUrl("");
        }
      } else {
        setAudioUrl("");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setFatalError(err.message);
      } else {
        setFatalError('Erro inesperado.');
      }
      setVersiculos([]);
      setAudioUrl("");
    } finally {
      setLoading(false);
    }
  };

  const bookKey = getBookKey(livro);
  let videoId: string | undefined = undefined;
  if (bookKey === "MAT" && capitulo >= 1 && capitulo <= mateusPlayList.length) {
    videoId = mateusPlayList[capitulo - 1];
  } else if (bookKey === "MRK" && capitulo >= 1 && capitulo <= marcosPlayList.length) {
    videoId = marcosPlayList[capitulo - 1];
  } else if (bookKey === "LUK" && capitulo >= 1 && capitulo <= lucasPlayList.length) {
    videoId = lucasPlayList[capitulo - 1];
  } else if (bookKey === "JHN" && capitulo >= 1 && capitulo <= joaoPlayList.length) {
    videoId = joaoPlayList[capitulo - 1];
  } else if (bookKey === "ALI" && capitulo >= 1 && capitulo <= aliancaPlayList1.length) {
    videoId = aliancaPlayList1[capitulo - 1];
  } else if (bookKey === "ALF" && capitulo >= 1 && capitulo <= aliancaPlayList.length) {
    videoId = aliancaPlayList[capitulo - 1];
  }

  return (
    <BibleReaderContainer>
      {!idioma ? (
        <div>
          <h2 style={{ color: '#6c47ff', fontWeight: 700, marginBottom: 12 }}>Eklesia Bíblia Digital</h2>
          <p style={{ fontSize: '1.15rem', marginBottom: 18 }}>Selecione um idioma para começar a leitura da Palavra.</p>
          <BibleForm>
            <BibleSelect value={idioma} onChange={e => setIdioma(e.target.value)}>
              <option value="">Selecione o idioma</option>
              {idiomas.map((i) => (
                <option key={i.code} value={i.code}>{i.label}</option>
              ))}
            </BibleSelect>
          </BibleForm>
        </div>
      ) : (
        <div>
          <BibleForm onSubmit={e => e.preventDefault()}>
            <BibleSelect value={idioma} onChange={e => setIdioma(e.target.value)}>
              <option value="">Selecione o idioma</option>
              {idiomas.map((i) => (
                <option key={i.code} value={i.code}>{i.label}</option>
              ))}
            </BibleSelect>
            {biblias.length > 0 && (
              <BibleSelect value={biblia} onChange={e => setBiblia(e.target.value)}>
                <option value="">Selecione a Bíblia</option>
                {biblias.map((b: Biblia) => (
                  <option key={b.abbr} value={b.abbr}>{b.name}</option>
                ))}
              </BibleSelect>
            )}
            {livros.length > 0 && (
              <>
                <BibleSelect value={livro} onChange={e => setLivro(e.target.value)}>
                  <option value="">Selecione o livro</option>
                  {livros.map((l: Livro) => (
                    <option key={l.book_id} value={l.book_id}>{l.name}</option>
                  ))}
                </BibleSelect>
                <BibleInput type="number" min={1} value={capitulo} onChange={e => setCapitulo(Number(e.target.value))} placeholder="Capítulo" />
                <BibleButton type="button" onClick={buscarConteudo} disabled={!livro || !capitulo || loading}>
                  {loading ? 'Carregando...' : 'Ler'}
                </BibleButton>
              </>
            )}
          </BibleForm>
          <div>
            {/* Exibição do capítulo e fallback visual para erros */}
            {!loading && fatalError && (
              <div style={{ color: '#d32f2f', fontWeight: 700, margin: '16px 0' }}>{fatalError}</div>
            )}
            {!loading && !fatalError && (
              <BibleVersesBox>
                {Array.isArray(versiculos) && versiculos.filter(v => v && typeof v.verse_text === 'string').length > 0 ? (
                  versiculos.filter(v => v && typeof v.verse_text === 'string').map((v, idx) => {
                    const texto = v.verse_text;
                    const isErro = texto.toLowerCase().includes('erro') || texto.toLowerCase().includes('não disponível');
                    return (
                      <BibleVerse key={idx}>
                        <BibleVerseNumber>{v.verse_sequence || v.verse_start || idx + 1}</BibleVerseNumber>
                        <BibleVerseText style={isErro ? { color: '#d32f2f', fontWeight: 700 } : {}}>{texto}</BibleVerseText>
                      </BibleVerse>
                    );
                  })
                ) : (
                  <span style={{ color: '#d32f2f', fontWeight: 700 }}>
                    Nenhum texto encontrado para este capítulo.
                  </span>
                )}
              </BibleVersesBox>
            )}
            {!loading && audioUrl && (
              <div style={{ marginTop: 24 }}>
                <span style={{ color: '#6c47ff', fontWeight: 700 }}>Áudio</span>
                <audio controls src={audioUrl} style={{ width: '100%', marginTop: 8 }}></audio>
              </div>
            )}
            {videoId && (
              <BibleVideoBox>
                <span style={{ color: '#6c47ff', fontWeight: 700, marginBottom: 8 }}>Vídeo</span>
                <YouTubePlayer videoId={videoId} />
              </BibleVideoBox>
            )}
          </div>
        </div>
      )}
    </BibleReaderContainer>
  );
};

export default BibleReader;
