import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import mensOuterwearData from './data/mensOuterWeardata.json'
import CategoryPage from './Pages/CategoryPage';

function App() {
  return (
    <Router>
      <Header />
      <CategoryPage productData = {mensOuterwearData}/>
      {/* <Home /> */}
    </Router>
  );
}

export default App;
