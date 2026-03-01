import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';
import ReportScreen from './components/ReportScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/report" element={<ReportScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
