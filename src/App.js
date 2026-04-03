import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomepageScreen from './components/HomepageScreen';
import GuideScreen from './components/GuideScreen';
import ContactScreen from './components/ContactScreen';
import ProfileScreen from './components/ProfileScreen';
import ReportScreen from './components/ReportScreen';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageScreen />} />
          <Route path="/guide" element={<GuideScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/app" element={<ProfileScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/report" element={<ReportScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
