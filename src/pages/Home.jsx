import { useEffect, useState } from 'react';
import { searchAnime } from '../api/anime';
import AnimeCard from '../components/AnimeCard';

const Home = ({ query }) => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    searchAnime(query).then(res => setAnimeList(res.data.results));
  }, [query]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {animeList.map(anime => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default Home;
