import React from "react";
import Home from "./Home";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";


import "../src/Components/Products.css";

import WhiteFront from "./T-shirt/White-Front";
import WhiteBack from "./T-shirt/White-Back";
import WhiteRight from "./T-shirt/White-Right";
import WhiteLeft from "./T-shirt/White-Left";

import BlackFront from "./T-shirt/Black-Front";
import BlackBack from "./T-shirt/Black-Back";
import BlackRight from "./T-shirt/Black-Right";
import BlackLeft from "./T-shirt/Black-Left";

import NavyFront from "./T-shirt/Navy-Front";
import NavyBack from "./T-shirt/Navy-Back";
import NavyRight from "./T-shirt/Navy-Right";
import NavyLeft from "./T-shirt/Navy-Left";

import GreenFront from "./T-shirt/Green-Front";
import GreenBack from "./T-shirt/Green-Back";
import GreenLeft from "./T-shirt/Green-Left";
import GreenRight from "./T-shirt/Green-Right";

import LaserPatch from "./LaserPatch/LaserPatch";

import PreviewWhite from "./Custom-Design/WhitePreview";
import PreviewBlack from "./Custom-Design/BlackPreview";
import PreviewNavy from "./Custom-Design/NavyPreview";
import PreviewGreen from "./Custom-Design/GreenPreview";

import UserInfo from "./Custom-Design/UserInfo";
import Payment from "./Payment/Payment";

export default function App() {
  return (
    <div>

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Main" element={<Main />} />

        {/*เสื้อขาว*/}
        <Route path="/T-shirt/White-Front" element={<WhiteFront />} />
        <Route path="/T-shirt/White-Back" element={<WhiteBack />} />
        <Route path="/T-shirt/White-Right" element={<WhiteRight />} />
        <Route path="/T-shirt/White-Left" element={<WhiteLeft />} />

        {/*เสื้อดำ*/}
        <Route path="/T-shirt/Black-Front" element={<BlackFront />} />
        <Route path="/T-shirt/Black-Back" element={<BlackBack />} />
        <Route path="/T-shirt/Black-Right" element={<BlackRight />} />
        <Route path="/T-shirt/Black-Left" element={<BlackLeft />} />

        {/*เสื้อน้ำเงิน*/}
        <Route path="/T-shirt/Navy-Front" element={<NavyFront />} />
        <Route path="/T-shirt/Navy-Back" element={<NavyBack />} />
        <Route path="/T-shirt/Navy-Right" element={<NavyRight />} />
        <Route path="/T-shirt/Navy-Left" element={<NavyLeft />} />

        {/*เสื้อน้ำเขียว*/}
        <Route path="/T-shirt/Green-Front" element={<GreenFront />} />
        <Route path="/T-shirt/Green-Back" element={<GreenBack />} />
        <Route path="/T-shirt/Green-Right" element={<GreenLeft />} />
        <Route path="/T-shirt/Green-Left" element={<GreenRight />} />

        {/*Laser Patch*/}
        <Route path="/LaserPatch" element={<LaserPatch />} />


        <Route path="/Custom-Design/Preview-White" element={<PreviewWhite/>} />
        <Route path="/Custom-Design/Preview-Black" element={<PreviewBlack/>} />
        <Route path="/Custom-Design/Preview-Navy" element={<PreviewNavy/>} />
        <Route path="/Custom-Design/Preview-Green" element={<PreviewGreen/>} />

        <Route path="/Custom-Design/UserInfo" element={<UserInfo />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>

    </div>
  );
}
