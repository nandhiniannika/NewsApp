import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />

      <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
      />

      <Routes>
        <Route path="/" element={<News setProgress={setProgress} pageSize={pageSize} category="general" />} />
        <Route path="/Business" element={<News setProgress={setProgress} pageSize={pageSize} category="business" />} />
        <Route path="/Entertainment" element={<News setProgress={setProgress} pageSize={pageSize} category="entertainment" />} />
        <Route path="/Health" element={<News setProgress={setProgress} pageSize={pageSize} category="health" />} />
        <Route path="/Science" element={<News setProgress={setProgress} pageSize={pageSize} category="science" />} />
        <Route path="/Sports" element={<News setProgress={setProgress} pageSize={pageSize} category="sports" />} />
        <Route path="/Technology" element={<News setProgress={setProgress} pageSize={pageSize} category="technology" />} />
      </Routes>
    </Router>
  );
};

export default App;
