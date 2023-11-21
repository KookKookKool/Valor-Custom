import React from 'react';
import Footimg from './Asset/Mockup/Footer.png';
import Logo1 from './Asset/icon/LOGO-defense.png';
import Logo2 from './Asset/icon/LOGO-PX.png';
import Logo3 from './Asset/icon/LOGO-Strategic.png';
import Logo4 from './Asset/icon/LOGO-Studio.png';
import Logo5 from './Asset/icon/LOGO-Valor.png';

import "./Home.css";

function Footer() {
  return (
    <div>

      <div className='Footergroup'>
      <h1 className='TextFooter'>Tactical gear</h1>
      <div className='Logo'>
      <img id='bgfooter' src={Footimg} alt="Footer" />
      <div className='LogoGroup'>
      <img src={Logo5} alt="Logo" />
      <img src={Logo3} alt="Logo" />
      <img src={Logo4} alt="Logo" />
      <img src={Logo1} alt="Logo" />
      <img src={Logo2} alt="Logo" />
      </div>
      </div>
      </div>

    </div>
  );
}

export default Footer;