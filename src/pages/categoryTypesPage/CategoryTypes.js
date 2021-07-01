import React, {useEffect, useState} from 'react';
import CategoryTypeCard from "./components/CategoryTypeCard";
import Images from "../../images/CategoryIcons";
import Title from "antd/es/typography/Title";
import {Avatar} from 'antd';
import {useParams} from "react-router-dom";

const axios = require('axios').default

const CategoryTypes = () => {

  const [types, setTypes] = useState([
    {
      typeId: 'id',
      brandId: 'aa',
      typeName: 'Name',
      brandName: 'bn',
      make: 1970,
      category: 'Category',
      imgUrls: [],
      viewTimes: 0,
      diecastBrand: 'ddd'
    }
  ])

  const { category } = useParams();

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
    fetchTypes(category).then()
  }, [category])

  return (
    <div>
      <Title>
        <Avatar src={Images[category]} />
      </Title>
      <div className='typesContainer'> {
        types.map((type) => (
          <CategoryTypeCard type={type}/>
        ))}
      </div>
    </div>
  );
};

export default CategoryTypes;
