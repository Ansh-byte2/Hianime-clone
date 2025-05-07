import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import AnimeDetails from './pages/AnimeDetails';
import WatchEpisode from './pages/WatchEpisode';
import Navbar from './components/Navbar';

function App() {
  const [query, setQuery] = useState('');

  return (
    <Router>
      <Navbar setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
        <Route path="/watch/:episodeId" element={<WatchEpisode />} />
      </Routes>
    </Router>
  );
}

export default App;
