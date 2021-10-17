import React, {useEffect, useState} from 'react';
import BrandCard from './components/BrandCard';
import Search from "antd/es/input/Search";

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

  const onSearch = (value) => {
    setKeyword(value);
  }

  return (
    <div>
      <div className='searchBox'>
        <Search placeholder="search for brands" onSearch={onSearch} enterButton />
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
