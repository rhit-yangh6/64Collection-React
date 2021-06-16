import React from 'react';
import {Link} from "react-router-dom";

const CategoryCard = ({category}) => {
  return (
    <Link className='linkedCard' to={`/category?category=${category.category}`}>
      <div className='category'>
        <img className='categoryIcon' src={category.imgPath} alt={category.category}/>
        <h2>{category.category}</h2>
      </div>
    </Link>
  )
};

export default CategoryCard;
