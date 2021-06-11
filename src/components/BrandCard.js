import React from 'react';
import {Link} from 'react-router-dom';

const BrandCard = ({brand}) => {
  return (
    <Link className='linkedCard' to={`/brand?brandId=${brand.id}`}>
      <div className='brand'>
        <img className='brandIcon' src={brand.iconUrl} alt={`${brand.name}-icon`}/>
        <div>
          <h1>{brand.name}</h1>
          <h2>{brand.country}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
