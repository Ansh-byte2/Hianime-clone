import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAnimeDetails } from '../api/anime';

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchAnimeDetails(id).then(res => setAnime(res.data));
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, [id]);

  const toggleFavorite = () => {
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter(fav => fav !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return anime ? (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{anime.title}</h1>
        <button onClick={toggleFavorite} className="px-3 py-1 border rounded">
          {favorites.includes(id) ? '❤️' : '🤍'} Favorite
        </button>
      </div>
      <p className="my-2">{anime.description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        {anime.episodes.map(ep => (
          <Link key={ep.id} to={\`/watch/\${ep.id}\`} className="text-blue-500 underline">
            Episode {ep.number}
          </Link>
        ))}
      </div>
    </div>
  ) : <p className="p-4">Loading...</p>;
};

export default AnimeDetails;
