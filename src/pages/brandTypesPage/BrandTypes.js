import React, {useEffect, useState} from 'react';
import BrandTypeCard from "./components/BrandTypeCard";
import { useParams } from 'react-router-dom';
import Search from "antd/es/input/Search";

const axios = require('axios').default

const BrandTypes = () => {

  const [keyword, setKeyword] = useState("")
  const { brandId } = useParams();

  const [types, setTypes] = useState([
    {
      id: 'id',
      name: 'Name',
      make: 1970,
      category: 'Category',
      imgUrls: [],
      viewTimes: 0,
      diecastBrand: 'ddd'
    }
  ])

  // Retrieve BrandTypes
  const fetchTypes = async (searchString, brandId) => {
    try {
      const rsp = await axios.get(`http://139.196.98.81:8080/64collection/type/brand_list?keyword=${searchString}&brandId=${brandId}`)
      setTypes(rsp.data.data)
    } catch (err) {
      console.error(err)
      setTypes([])
    }
  }

  useEffect(() => {
    fetchTypes(keyword, brandId).then()
  }, [keyword, brandId])

  const onSearch = (value) => {
    setKeyword(value);
  }

  return (
    <div>
      <div className='searchBox'>
        <Search placeholder="search for brands" onSearch={onSearch} enterButton />
      </div>
      <div className='typesContainer'> {
        types.map((type) => (
          <BrandTypeCard type={type}/>
        ))}
      </div>
    </div>
  );
};

export default BrandTypes;
