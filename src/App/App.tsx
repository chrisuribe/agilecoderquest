import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import LoginPage from '../pages/LoginPage/LoginPage';
import UserPage from '../pages/UserPage/UserPage';
import AdminPage from '../pages/AdminPage/AdminPage';
import HomePage from '../pages/HomePage/HomePage';
import WordShuffleWorldPage from '../pages/WordShuffleWorldPage/WordShuffleWorldPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import DbFinder from '../pages/DbFinder/DbFinder';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/games/word-shuffle-world"
          element={<WordShuffleWorldPage />}
        />
        <Route path="/dbfinder" element={<DbFinder />}/>
      </Routes>
    </Router>
  );
}

export default App;
