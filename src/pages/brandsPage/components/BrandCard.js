import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from "antd";


const BrandCard = ({brand}) => {
  return (
    <Link className='linkedCard' to={`/brand/${brand.id}`}>
      <Card hoverable className='brand'>
        <div className='brandCardWrapper'>
          <img className='brandIcon' src={brand.iconUrl} alt={`${brand.name}-icon`}/>
          <div>
            <h2>{brand.name}</h2>
            <h1>{brand.country}</h1>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BrandCard;
