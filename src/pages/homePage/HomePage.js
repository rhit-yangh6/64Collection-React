import React, {useEffect, useState} from 'react';
import Logo1024 from "../../images/logo1024.png"
import './styles/homePage.css'

const axios = require('axios').default

const HomePage = () => {

  const [generalData, setGeneralData] = useState({
    brandsCount: 0,
    carsCount: 0,
    photosCount: 0
  })

  const fetchGeneralInfo = async () => {
    try {
      const rsp = await axios.get(`http://139.196.98.81:8080/64collection/general/info`)
      setGeneralData(rsp.data.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchGeneralInfo().then()
  }, [])

  return (
    <div>
      <div>
        <img className='homePageLogo' src={Logo1024} alt='64Collection Logo' />
        <h1>Welcome to 64Collection!</h1>
      </div>
      <div className='generalInfoContainer'>
        <p>Brands Count:{generalData.brandsCount}</p>
        <p>Cars Count:{generalData.carsCount}</p>
        <p>Photos Count:{generalData.photosCount}</p>
      </div>
    </div>
  );
};

export default HomePage;
