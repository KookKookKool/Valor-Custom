import React, { useState } from 'react';
import './Slider.css';

import Prd1 from '../Slider/Product/prd1';

function Slider() {
  // State to control the animation play state
  const [isMouseOverSlider, setIsMouseOverSlider] = useState(false);
  const [isSliderPaused, setSliderPaused] = useState(false);

  // Function to handle mouse enter event
  const handleMouseOverSlider = () => {
    setSliderPaused(true);
    setIsMouseOverSlider(true);
  };

  const handleMouseLeaveSlider = () => {
    setSliderPaused(false);
    setIsMouseOverSlider(false);
  };

  return (
    <div>
      <h1 className="head">ตัวอย่างสินค้าที่เคยผลิต</h1>
      <div
        className="logo-slider"
        onMouseEnter={handleMouseOverSlider}
        onMouseLeave={handleMouseLeaveSlider}
        style={{
          animationPlayState: isSliderPaused || isMouseOverSlider ? 'paused' : 'running'
        }}
      >
	<div className="logo-slide-track">

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>

		<div className="slide">
			<Prd1/>
		</div>
		
	</div>
</div>

    </div>
  )
}

export default Slider