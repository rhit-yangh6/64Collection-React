import React, {useEffect, useState} from 'react';
import BrandCard from './components/BrandCard';
import Button from "../../components/Button";

const axios = require('axios').default

const Brands = () => {

  const [keyword, setKeyword] = useState("")

  const [brands, setBrands] = useState([
    {
      id: 'id',
      name: 'Name',
      country: 'Country',
      iconUrl: 'iconUrl'
    }
  ])

  // Retrieve Brands
  const fetchBrands = async (searchString) => {
    try {
      const rsp = await axios.get(`http://139.196.98.81:8080/64collection/brand/list?keyword=${searchString}`)
      setBrands(rsp.data.data)
    } catch (err) {
      console.error(err)
      setBrands([])
    }
  }

  useEffect(() => {
    fetchBrands(keyword).then()
  }, [keyword])

  const onSearchButtonClick = () => {
    setKeyword(document.getElementById('brandSearchInput').value)
  }

  return (
    <div>
      <div className='searchBox'>
        <input id='brandSearchInput' className='searchInput'/>
        <Button text='Search' onClick={onSearchButtonClick}/>
      </div>
      <div className='brandsContainer'>
        {brands.map((brand) => (
          <BrandCard
            key={brand.id}
            brand={brand}
          />
        ))
        }
      </div>
    </div>
  );
};

export default Brands;
