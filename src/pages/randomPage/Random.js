import React from 'react';
import {createFromIconfontCN} from '@ant-design/icons';
import { ICONFONT_URL } from '../../config'
import './styles/random.css'

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
  return (
    <div>
      <IconFont  className='randomIcon' type='icon-random'/>
    </div>
  );
};

export default Random;
