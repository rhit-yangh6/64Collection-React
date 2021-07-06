import React from 'react';
import {createFromIconfontCN} from '@ant-design/icons';
import { ICONFONT_URL } from '../../config'
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
      const rsp = await axios.get(`http://139.196.98.81:8080/64collection/type/random`)
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
      <IconFont  className='randomIcon' type='icon-random' onClick={fetchRandomType}/>
    </div>
  );
};

export default Random;
