import React, {useEffect, useState} from 'react';
import Gallery from 'react-photo-gallery';
import {useParams} from "react-router-dom";
import './styles/typeView.css'

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
    viewTimes: 9
  })

  const { typeId } = useParams();

  const [photoArray, setPhotoArray] = useState([
    // {
    //   src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    //   width: 4,
    //   height: 3
    // },
    // {
    //   src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    //   width: 1,
    //   height: 1
    // }
  ])

  const fetchType = async (typeId) => {
    try {
      const rsp = await axios.get(`http://139.196.98.81:8080/64collection/type/info?typeId=${typeId}`)
      setBrandType(rsp.data.data)
      let out = []
      console.log(rsp.data.data.imgUrls)
      rsp.data.data.imgUrls.forEach((url) => {
        out.push({
          src: url,
          width: 3,
          height: 2
        })
      })
      console.log(out)
      setPhotoArray(out)
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

      <div className='carImgGallery'>
        <Gallery photos={photoArray}/>
      </div>

      <div className='typeExtInfoContainer'>
        <h2>Category: {brandType.category}</h2>
        <h2>Diecast Brand: {brandType.diecastBrand}</h2>
        <h2>View Times: {brandType.viewTimes}</h2>
      </div>
    </div>
  );
};

export default TypeView;
