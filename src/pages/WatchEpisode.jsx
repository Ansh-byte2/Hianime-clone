import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchEpisodeStream } from '../api/anime';

const WatchEpisode = () => {
  const { episodeId } = useParams();
  const [streamLink, setStreamLink] = useState('');

  useEffect(() => {
    fetchEpisodeStream(episodeId).then(res => {
      const source = res.data.sources.find(s => s.quality === 'default') || res.data.sources[0];
      setStreamLink(source?.url || '');
    });
  }, [episodeId]);

  return streamLink ? (
    <div className="aspect-video w-full p-4">
      <video src={streamLink} controls className="w-full h-full" />
    </div>
  ) : <p className="p-4">Loading video...</p>;
};

export default WatchEpisode;
