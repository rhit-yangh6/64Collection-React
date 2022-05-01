import React from 'react';
import {Link} from "react-router-dom";
import Images from "../../../images/CategoryIcons"
import { Card, Avatar } from "antd";
import defaultImage from "../../../images/default_cover.png";
import {useHistory} from "react-router-dom";

const BrandTypeCard = ({type}) => {
  const history = useHistory();

  return (
    <div className='brandTypeCard'>
      <div className='brandTypeImgBx'>
        <img src={type.coverImgUrl ? type.coverImgUrl : defaultImage} alt='cover_img' />
      </div>
      <div className='brandTypeContent'>
        <div className='brandTypeDetails'>
          <Avatar className='brandTypeCategory' src={Images[type.category]} size={40}/>
          <h2>{type.name}<br/><span>{type.make}</span></h2>
          <div className='brandTypeData'>
            <h3>{type.imgUrls.length}<br/><span>Photos</span></h3>
            <h3>{type.category}<br/><span>Category</span></h3>
            <h3>{type.viewTimes}<br/><span>View Times</span></h3>
          </div>
          <div className='brandTypeButton'>
            <button onClick={() => {history.push(`/type/${type.id}`)}}>View</button>
          </div>
        </div>
      </div>
    </div>
    // <Link className='linkedCard' to={`/type/${type.id}`}>
    //   <Card hoverable className='type'>
    //     <div className='typeCardWrapper'>
    //       <img className='typeCategoryIcon' src={Images[type.category]} alt='category-icon'/>
    //       <div className='typeCardContent'>
    //         <h1>{type.name}</h1>
    //         <h2>{type.make}</h2>
    //       </div>
    //       <img className='typeCoverImg' src={type.coverImgUrl ? type.coverImgUrl : defaultImage} alt='cover_img' />
    //     </div>
    //   </Card>
    // </Link>
  );
};

export default BrandTypeCard;
