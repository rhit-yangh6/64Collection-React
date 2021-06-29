import React, {useEffect, useState} from 'react';
import TypeCard from "../../components/TypeCard";

const axios = require('axios').default

const CategoryTypes = () => {

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
  const fetchTypes = async (category) => {
    try {
      const rsp = await axios.get(`http://139.196.98.81:8080/64collection/type/category_list?category=${category}`)
      setTypes(rsp.data.data)
    } catch (err) {
      console.error(err)
      setTypes([])
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    fetchTypes(urlParams.get('category')).then()
  }, [])

  return (
    <div>
      <div className='typesContainer'> {
        types.map((type) => (
          <TypeCard type={type}/>
        ))}
      </div>
    </div>
  );
};

export default CategoryTypes;
