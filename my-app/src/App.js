import React from 'react';
import Home from './Home';
import Main from './Main';
import { Route, Routes } from 'react-router-dom';

import "../src/Components/Products.css";



import WhiteFront from './T-shirt/White-Front';
import WhiteBack from './T-shirt/White-Back';
import WhiteRight from "./T-shirt/White-Right";
import WhiteLeft from "./T-shirt/White-Left";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />

        {/*เสื้อขาว*/}
        <Route path="/T-shirt/White-Front" element={<WhiteFront />} />
             
        <Route
          path="/T-shirt/White-Back"
          element={<WhiteBack />}
        />
        <Route
          path="/T-shirt/White-Right"
          element={<WhiteRight />}
        />
        <Route
          path="/T-shirt/White-Left"
          element={<WhiteLeft />}
          />
        
      </Routes>
    </div>
  );
}
