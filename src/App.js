import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer';

//Feature 1

function App() {
  return (
    <div className="grid-container">
      <div className="content-wrap">
      <Navbar />
      </div>
        <Footer />
    </div>
  );
}

export default App;
