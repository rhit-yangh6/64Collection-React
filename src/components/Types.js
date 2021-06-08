import React from 'react';
import {useState, useEffect} from 'react'

const Types = () => {

  const [types, setTypes] = useState([
    {
      id: 'id',
      name: 'Name',
      make: 1970,
      category: 'Category',
      imgUrls: [],
      viewTimes: 0,
      diecastBrand: 'ddd'
    }
  ])

  return (
    <div>
      <div className='typesContainer'>
        {types.map((type) => (
          <div>

          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Types;
