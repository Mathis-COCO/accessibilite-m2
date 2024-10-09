import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'; 
import Biographie from './pages/biographie';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          {/* Déclare toutes les routes ici */}
          <Route path="/biographie" element={<Biographie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
