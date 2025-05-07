import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => (
  <Link to={`/anime/${anime.id}`}>
    <div className="rounded-xl overflow-hidden shadow hover:scale-105 transition">
      <img src={anime.image} alt={anime.title} className="w-full h-60 object-cover"/>
      <div className="p-2 text-sm font-semibold">{anime.title}</div>
    </div>
  </Link>
);

export default AnimeCard;
