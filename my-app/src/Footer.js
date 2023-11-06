import React from 'react';
import Footimg from './Asset/Mockup/Footer.png';
import "./Home.css";

function Footer() {
  return (
    <div>

      <div className='Footergroup'>
      <h1 className='TextFooter'>Tactical gear</h1>
      <img id='bgfooter' src={Footimg} alt="Footer" />
      
      </div>

    </div>
  );
}

export default Footer;