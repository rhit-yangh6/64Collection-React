import React from 'react';
import {Card} from "antd";
import {Link} from "react-router-dom";
import defaultImage from "../../../images/default_cover.png";

const CategoryTypeCard = ({ type }) => {
  return (
    <Link className='linkedCard' to={`/type/${type.typeId}`}>
      <Card hoverable className='type'>
        <div className='typeCardWrapper'>
          <img className='brandIcon' src={type.iconUrl} alt='brand_icon'/>
          <div className='typeCardContent'>
            <h3><b>{type.brandName}</b></h3>
            <h3>{type.typeName}</h3>
            <h4>{type.make}</h4>
          </div>
          <img className='typeCoverImg' src={type.coverImgUrl ? type.coverImgUrl : defaultImage} alt='cover_img' />
        </div>
      </Card>
    </Link>
  );
};

export default CategoryTypeCard;
