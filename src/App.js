import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import DriftPage from './components/DriftPage/DriftPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';


export default function App() {
  return (

    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>

      </div>
    </div>

  );
}