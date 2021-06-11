import React, {useEffect, useState} from 'react';
import Button from "./Button";
import TypeCard from "./TypeCard";

const axios = require('axios').default

const Types = () => {

  const [keyword, setKeyword] = useState("")

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

  // Retrieve Types
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
    const urlParams = new URLSearchParams(window.location.search);
    fetchTypes(keyword, urlParams.get('brandId')).then()
  }, [keyword])

  const onSearchButtonClick = () => {
    setKeyword(document.getElementById('typeSearchInput').value)
  }

  return (
    <div>
      <div className='searchBox'>
        <input id="typeSearchInput" className='searchInput'/>
        <Button text='Search' onClick={onSearchButtonClick}/>
      </div>
      <div className='typesContainer'>
        {types.map((type) => (
          <TypeCard type={type}/>
        ))
        }
      </div>
    </div>
  );
};

export default Types;
