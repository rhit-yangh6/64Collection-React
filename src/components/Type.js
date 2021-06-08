import React from 'react';
import {Link} from "react-router-dom";
import Images from "../images/CategoryIcons"

const Type = ({type}) => {
  return (
    <Link className='linkedCard'>
      <div className='type'>
        <img className='typeCategoryIcon' src={Images[type.category]} alt='category-icon'/>
        <div>
          <h1>{type.name}</h1>
          <h2>{type.make}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Type;
