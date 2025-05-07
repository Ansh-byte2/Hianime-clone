import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = ({ setQuery }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(input);
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow">
      <Link to="/" className="text-xl font-bold">HiAnime</Link>
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-2 py-1 rounded"
          placeholder="Search anime..."
        />
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Search</button>
      </form>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
