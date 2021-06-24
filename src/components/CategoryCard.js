import React from 'react';
import {Link} from "react-router-dom";
import { Card } from "antd";


const CategoryCard = ({category}) => {
  return (
    <Link className='linkedCard' to={`/category?category=${category.category}`}>
      <Card hoverable className='category'>
        <img className='categoryIcon' src={category.imgPath} alt={category.category}/>
        <h2>{category.category}</h2>
      </Card>
    </Link>
  )
};

export default CategoryCard;
