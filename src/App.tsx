import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Music from './pages/Music';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<Music />} />
    </Routes>
  );
}
