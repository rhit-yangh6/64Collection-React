import React, {useEffect, useState} from 'react';
import "./styles/featuredPage.css"
import {List, Avatar, Button} from "antd";
import {Link} from 'react-router-dom';
import {createFromIconfontCN, FireTwoTone} from "@ant-design/icons";
import HonorCard from "./components/HonorCard";
import { ICONFONT_URL } from '../../config'

const IconFont = createFromIconfontCN({
  scriptUrl: [
    ICONFONT_URL
  ]
});

const axios = require('axios').default

const rankingIcon = (ranking) => {
  switch (ranking) {
    case 4:
      return 'icon-Leaderboard-icon-fourth'
    case 5:
      return 'icon-Leaderboard-icon-fifth'
    case 6:
      return 'icon-Leaderboard-icon-sixth'
    case 7:
      return 'icon-Leaderboard-icon-seventh'
    case 8:
      return 'icon-Leaderboard-icon-eighth'
    case 9:
      return 'icon-Leaderboard-icon-ninth'
    case 10:
      return 'icon-Leaderboard-icon-tenth'
    default:
      return 'icon-'
  }
}

const Featured = () => {

  const [featured, setFeatured] = useState([]);

  const fetchFeaturedList = async (limit) => {
    try {
      const rsp = await axios.get(`http://139.196.98.81:8080/64collection/type/featured_list?count=${limit}`)
      setFeatured(rsp.data.data)
    } catch (err) {
      console.error(err)
      setFeatured([])
    }
  }

  useEffect(() => {
    fetchFeaturedList(10).then()
  }, [])

  return (
    <div className='leaderboardContainer'>
      {
        featured.length > 3
          ?
          <div className='honorContainer'>
            <HonorCard type={featured[1]} ranking={2}/>
            <HonorCard type={featured[0]} ranking={1}/>
            <HonorCard type={featured[2]} ranking={3}/>
          </div>
          :
          null
      }
      <>
        <List
          itemLayout='horizontal'
          dataSource={featured}
          renderItem={(type, index) => {
            if (index > 2) {
              return (
                <List.Item
                  actions={[
                    <Button>
                      <Link to={`/type/${type.typeId}`}>
                        View
                      </Link>
                    </Button>]}
                >
                  <IconFont type={rankingIcon(index + 1)} style={{marginRight: 18, fontSize: 35}}/>
                  <List.Item.Meta
                    style={{alignItems: 'center'}}
                    avatar={<Avatar src={type.iconUrl} shape='square' size={45}/>}
                    title={<h2><b>{type.brandName}</b>&nbsp;&nbsp;{type.typeName}&nbsp;&nbsp;{type.make}</h2>}
                    description={<h3><FireTwoTone twoToneColor="red"/>{type.viewTimes}</h3>}
                  />
                </List.Item>
              )
            }
          }}
        />
      </>
    </div>
  );
}

export default Featured;
