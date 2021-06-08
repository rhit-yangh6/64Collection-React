import React from 'react';

const Brand = ({ brand }) => {
  return (
    <div className='brand'>
      <img className='brandIcon' src={brand.iconUrl} alt={`${brand.name}-icon`}/>
      <div>
        <h1>{brand.name}</h1>
        <h2>{brand.country}</h2>
      </div>
    </div>
  );
};

export default Brand;
