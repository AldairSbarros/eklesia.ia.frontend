
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import IngestPage from './pages/IngestPage';
import BiblePage from './pages/BiblePage';
import SermoesPage from './pages/SermoesPage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage setToken={() => {}} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/ingest" element={<IngestPage />} />
        <Route path="/bible" element={<BiblePage />} />
        <Route path="/sermoes" element={<SermoesPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
