import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './styles/typeView.css'
import {Carousel, Image} from "antd";

const axios = require('axios').default

const TypeView = () => {

  const [brandType, setBrandType] = useState({
    brandName: 'Brand',
    brandId: 'aaaaa',
    typeId: 'a',
    typeName: 'adada',
    make: 2021,
    category: 'cate',
    diecastBrand: 'j',
    viewTimes: 9,
    imgUrls: []
  })

  const {typeId} = useParams();

  const fetchType = async (typeId) => {
    try {
      const rsp = await axios.get(`http://139.196.98.81:8080/64collection/type/info?typeId=${typeId}`)
      setBrandType(rsp.data.data)
    } catch (err) {
      console.error(err)
      setBrandType({})
    }
  }

  useEffect(() => {
    fetchType(typeId).then()
  }, [typeId])

  return (
    <div className='typeViewContainer'>
      <div className='typeDetailDisplayGeneral'>
        <img src={brandType.iconUrl} alt='Brand Icon' className='typeBrandImg'/>
        <div className='typeGeneralInfoContainer'>
          <h1><b>{brandType.brandName}</b></h1>
          <h2><b>{brandType.typeName}</b></h2>
          <h2>{brandType.make}</h2>
        </div>
      </div>

      <Carousel autoplay className='carCarousel'>
        {
          brandType.imgUrls.map((p) => (
            <Image src={p}/>
          ))
        }
      </Carousel>

      <div className='typeExtInfoContainer'>
        <h2>Category: {brandType.category}</h2>
        <h2>Diecast Brand: {brandType.diecastBrand}</h2>
        <h2>View Times: {brandType.viewTimes}</h2>
      </div>
    </div>
  );
}

export default TypeView;
