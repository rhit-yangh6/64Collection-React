import React from 'react';
import {Card} from "antd";
import Images from "../../../images/CategoryIcons";
import {Link} from "react-router-dom";

const CategoryTypeCard = ({ type }) => {
  return (
    <Link className='linkedCard' to={`/type/${type.typeId}`}>
      <Card hoverable className='type'>
        <div className='typeCardWrapper'>
          <img className='typeCategoryIcon' src={Images[type.category]} alt='category-icon'/>
          <div>
            <h1>{type.typeName}</h1>
            <h2>{type.make}</h2>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryTypeCard;
