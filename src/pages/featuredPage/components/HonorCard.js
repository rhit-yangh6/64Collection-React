import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Card} from 'antd';
import {createFromIconfontCN, FireTwoTone} from '@ant-design/icons';
import { ICONFONT_URL } from '../../../config'

const IconFont = createFromIconfontCN({
  scriptUrl: [
    ICONFONT_URL
  ],
  extraCommonProps: {
    style: {
      width: '100%',
      aspectRatio: 1,
      fontSize: '25px'
    }
  }
});

const rewardIcon = (ranking) => {
  switch (ranking) {
    case 1:
      return 'icon-diyi'
    case 2:
      return 'icon-dier'
    case 3:
      return 'icon-disan'
    default:
      return 'icon-?'
  }
}

const HonorCard = ({type, ranking}) => {
  return (
    <Link style={{width: '30%'}} to={`/type/${type.typeId}`}>
      <Card hoverable className='honorCard'>
        <IconFont type={rewardIcon(ranking)}/>
        <Avatar size={80 + (3-ranking)*15} src={type.iconUrl} shape='square'/>
        <h3><b>{type.brandName}</b></h3>
        <h3>{type.typeName}</h3>
        <h4>{type.make}</h4>
        <h3>
          <FireTwoTone twoToneColor="red"/>
          {type.viewTimes}
        </h3>
      </Card>
    </Link>
  );
};

export default HonorCard;
