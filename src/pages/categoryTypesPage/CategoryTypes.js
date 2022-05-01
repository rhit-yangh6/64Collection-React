import React, {useEffect, useState} from 'react';
import CategoryTypeCard from "./components/CategoryTypeCard";
import Images from "../../images/CategoryIcons";
import {Avatar, Typography} from 'antd';
import {useParams} from "react-router-dom";

const axios = require('axios').default

const { Title } = Typography;

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
      diecastBrand: 'ddd',
      coverImgUrl: 'aaa'
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
      <div className='pageHeader'>
        <Title style={{marginBottom: 0}}>Viewing Category: {category}</Title>
        <Avatar src={Images[category]} size={50} style={{marginLeft: 20}}/>
      </div>
      <div className='brandsContainer'> {
        types.map((type) => (
          <CategoryTypeCard type={type}/>
        ))}
      </div>
    </div>
  );
};

export default CategoryTypes;
