import React from 'react';
import Brand from './Brand';


const Brands = ({brands}) => {
  return (
    <div className='brandsContainer'>
      {brands.map((brand) => (
          <Brand
            key={brand.id}
            brand={brand}
          />
        ))
      }
    </div>
  );
};

export default Brands;
