// App.js
import React from 'react';
import '../src/App.css';
import Products from '../src/Components/Products';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img id="Logo" src={require('./logo.png')} alt="img" />
        
        <Products />
      </div>
    </div>
  );
}
