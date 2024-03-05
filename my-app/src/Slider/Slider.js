import React, { useState } from 'react';
import './Slider.css';

import Prd1 from '../Slider/Product/prd1';
import Prd2 from '../Slider/Product/prd2';
import Prd3 from '../Slider/Product/prd3';
import Prd4 from '../Slider/Product/prd4';
import Prd5 from '../Slider/Product/prd5';
import Prd6 from '../Slider/Product/prd6';
import Prd7 from '../Slider/Product/prd7';
import Prd8 from '../Slider/Product/prd8';
import Prd9 from '../Slider/Product/prd9';
import Prd10 from '../Slider/Product/prd10';
import Prd11 from '../Slider/Product/prd11';
import Prd12 from '../Slider/Product/prd12';
import Prd13 from '../Slider/Product/prd13';
import Prd14 from '../Slider/Product/prd14';
import Prd15 from '../Slider/Product/prd15';
import Prd16 from '../Slider/Product/prd16';
import Prd17 from '../Slider/Product/prd17';

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
			<Prd2/>
		</div>

		<div className="slide">
			<Prd3/>
		</div>

		<div className="slide">
			<Prd4/>
		</div>

		<div className="slide">
			<Prd5/>
		</div>

		<div className="slide">
			<Prd6/>
		</div>

		<div className="slide">
			<Prd7/>
		</div>

		<div className="slide">
			<Prd8/>
		</div>

		<div className="slide">
			<Prd9/>
		</div>

		<div className="slide">
			<Prd10/>
		</div>

		<div className="slide">
			<Prd11/>
		</div>

		<div className="slide">
			<Prd12/>
		</div>

		<div className="slide">
			<Prd13/>
		</div>
		
		<div className="slide">
			<Prd14/>
		</div>

		<div className="slide">
			<Prd15/>
		</div>

		<div className="slide">
			<Prd16/>
		</div>

		<div className="slide">
			<Prd17/>
		</div>
	</div>
</div>

    </div>
  )
}

export default Slider