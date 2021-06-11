import React, {useEffect, useState} from 'react';

const axios = require('axios').default

const TypeView = () => {

  const [brandType, setBrandType] = useState({
    brandName: 'Brand',
    brandId: 'aaaaa',
    typeName: 'adada',
    make: 2021,
    category: 'cate',
    diecastBrand: 'j',
    viewTimes: 9
  })

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
    const urlParams = new URLSearchParams(window.location.search);
    fetchType(urlParams.get('typeId')).then()
  }, [])

  return (
    <div>
      <div className='typeDetailDisplayGeneral' >
        <img src={brandType.iconUrl} alt='Brand Icon' />
        <div>
          <h1><b>{brandType.brandName}</b></h1>
          <h2><b>{brandType.typeName}</b></h2>
          <h2>{brandType.make}</h2>
        </div>
      </div>
      <img src='' alt='display' />
      <div>
        <p>Category: {brandType.category}</p>
        <p>Diecast Brand: {brandType.diecastBrand}</p>
        <p>View Times: {brandType.viewTimes}</p>
      </div>
    </div>
  );
};

export default TypeView;
