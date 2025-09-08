import YouTube from 'react-youtube';

interface YouTubePlayerProps {
  videoId: string;
}

function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  return (
    <YouTube
      videoId={videoId}
        opts={{
          // width removido
          // height removido
          // playerVars removido
        }}
    />
  );
}

export default YouTubePlayer;
