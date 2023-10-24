import React, { useState } from 'react';
import './App.css';
import Products from './Components/Products';
import Home from './Home';

export default function App() {
  const [isContent1Open, setIsContent1Open] = useState(false);

  const toggleContent1 = () => {
    setIsContent1Open(!isContent1Open);
  };

  return (
    <>
      <div className="Content1" style={{ display: isContent1Open ? 'block' : 'none' }}>
       <div className="container">
          <img id="Logo" src={require('./logo.png')} alt="img" />
          <Products />
        </div>
      </div>

      <div className="App">

      <div className="HomePage">
        <Home toggleContent1={toggleContent1} isContent1Open={isContent1Open} />
      </div>
      </div>

    </>
  );
}
