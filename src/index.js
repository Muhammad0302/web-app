import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import LEDs from './pages/LEDs';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/web-app" element={<App />} />
      <Route path="/web-app/leds" element={<LEDs />} />
    </Routes>
  </BrowserRouter>
);
