import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Card from './Card';
import Submitted from './Submitted';
// import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="meta-wrapper">
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/submitted" element={<Submitted />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
