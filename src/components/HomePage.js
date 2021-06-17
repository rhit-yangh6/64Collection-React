import React from 'react';
import Logo1024 from "../images/logo1024.png"
import '../styles/homePage.css'

const HomePage = () => {
  return (
    <div>
      <div>
        <img className='homePageLogo' src={Logo1024} alt='64Collection Logo' />
        <h1>Welcome to 64Collection!</h1>
      </div>
      <div className='generalInfoContainer'>

      </div>
    </div>
  );
};

export default HomePage;
