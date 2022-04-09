import React from 'react';
import {Link} from "react-router-dom";
import Images from "../../../images/CategoryIcons"
import { Card } from "antd";
import defaultImage from "../../../images/Default_Cover.png";

const BrandTypeCard = ({type}) => {
  return (
    <Link className='linkedCard' to={`/type/${type.id}`}>
      <Card hoverable className='type'>
        <div className='typeCardWrapper'>
          <img className='typeCategoryIcon' src={Images[type.category]} alt='category-icon'/>
          <div className='typeCardContent'>
            <h1>{type.name}</h1>
            <h2>{type.make}</h2>
          </div>
          <img className='typeCoverImg' src={type.coverImgUrl ? type.coverImgUrl : defaultImage} alt='cover_img' />
        </div>
      </Card>
    </Link>
  );
};

export default BrandTypeCard;
