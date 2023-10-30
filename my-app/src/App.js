import React from 'react';
import Home from './Home';
import Main from './Main';
import { Route, Routes } from 'react-router-dom';

import "../src/Components/Products.css";


import WhiteFront from './T-shirt/White-Front';
import WhiteBack from './T-shirt/White-Back';
import WhiteRight from "./T-shirt/White-Right";
import WhiteLeft from "./T-shirt/White-Left";

import BlackFront from './T-shirt/Black-Front';
import BlackBack from './T-shirt/Black-Back';
import BlackRight from './T-shirt/Black-Right';
import BlackLeft from './T-shirt/Black-Left';



export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />

        {/*เสื้อขาว*/}
        <Route 
          path="/T-shirt/White-Front" 
          element={<WhiteFront />} />
             
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
                
        {/*เสื้อดำ*/}
        <Route
        path="/T-shirt/Black-Front"
        element={<BlackFront/>}
        />

        <Route
        path="/T-shirt/Black-Back"
        element={<BlackBack/>}
        />

        <Route
        path="/T-shirt/Black-Right"
        element={<BlackRight/>}
        />

        <Route
        path="/T-shirt/Black-Left"
        element={<BlackLeft/>}
        />

      
        
      </Routes>
    </div>
  );
}
