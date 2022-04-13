import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Continent from './components/Continent';
import Details from './components/Details';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/continent/:continent" element={<Continent />} />
      <Route path="/country/:name" element={<Details />} />
    </Routes>
  </Router>
);

export default App;
