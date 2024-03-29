import React, {useEffect, useState} from 'react';
import BrandTypeCard from "./components/BrandTypeCard";
import { useParams } from 'react-router-dom';
import Search from "antd/es/input/Search";
import {API_URL} from "../../config";

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
      diecastBrand: 'ddd',
      coverImgUrl: 'aaa'
    }
  ])

  // Retrieve BrandTypes
  const fetchTypes = async (searchString, brandId) => {
    try {
      const rsp = await axios.get(API_URL + `/type/brand_list?keyword=${searchString}&brandId=${brandId}`)
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
