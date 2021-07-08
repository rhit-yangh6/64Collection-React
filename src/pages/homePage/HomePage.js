import React, {useEffect, useState} from 'react';
import Logo1024 from "../../images/logo1024.png"
import './styles/homePage.css'
import {Typography, Col, Row, Statistic} from "antd";

const axios = require('axios').default

const { Title } = Typography;

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
    <div className='homePageWrapper'>
      <div>
        <img className='homePageLogo' src={Logo1024} alt='64Collection Logo'/>
        <Title>Welcome to 64Collection!</Title>
      </div>
      <div className='generalInfoContainer'>
        <Row gutter={16}>
          <Col>
            <Statistic title="Brands Collected" value={generalData.brandsCount}/>
          </Col>
          <Col>
            <Statistic title="Cars Collected" value={generalData.carsCount}/>
          </Col>
          <Col>
            <Statistic title="Car Photos" value={generalData.photosCount}/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
