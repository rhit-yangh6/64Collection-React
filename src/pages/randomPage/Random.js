import React from 'react';
import {createFromIconfontCN} from '@ant-design/icons';
import {API_URL, ICONFONT_URL} from '../../config'
import {useHistory} from "react-router-dom";

import './styles/random.css'

const axios = require('axios').default

const IconFont = createFromIconfontCN({
  scriptUrl: [
    ICONFONT_URL
  ],
  extraCommonProps: {
    style: {
      fontSize: '165px',
    }
  }
});

const Random = () => {
  const history = useHistory();
  const fetchRandomType = async () => {
    try {
      const rsp = await axios.get(API_URL + `/type/random`)
      // setTypes(rsp.data.data)
      console.log(rsp.data.data)
      history.push(`/type/${rsp.data.data.id}`)
    } catch (err) {
      console.error(err)
      // setTypes([])
    }
  }


  return (
    <div>
      <IconFont className='randomIcon' type='icon-random' onClick={fetchRandomType}/>
      <h1 style={{marginLeft: '41%', marginTop: 20}}>Press the Button to View a Random Car!</h1>
    </div>
  );
};

export default Random;
