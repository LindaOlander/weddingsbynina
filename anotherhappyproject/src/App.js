import React from 'react';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
