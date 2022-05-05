import React from 'react';
import defaultImage from "../../../images/default_cover.png";
import {useHistory} from "react-router-dom";

const CategoryTypeCard = ({ type }) => {
  const history = useHistory();

  return (
    // <Link className='linkedCard' to={`/type/${type.typeId}`}>
    //   <Card hoverable className='type'>
    //     <div className='typeCardWrapper'>
    //       <img className='brandIcon' src={type.iconUrl} alt='brand_icon'/>
    //       <div className='typeCardContent'>
    //         <h3><b>{type.brandName}</b></h3>
    //         <h3>{type.typeName}</h3>
    //         <h4>{type.make}</h4>
    //       </div>
    //       <img className='typeCoverImg' src={type.coverImgUrl ? type.coverImgUrl : defaultImage} alt='cover_img' />
    //     </div>
    //   </Card>
    // </Link>
    <div className='categoryTypeCard'>
      <div className='categoryTypeImgContainer'>
        <img className='categoryTypeBrand' src={type.iconUrl} alt='brand_img' />
        <img className='categoryTypeCover' src={type.coverImgUrl ? type.coverImgUrl : defaultImage} alt='cover_img' />
      </div>
      <div className='categoryTypeInfo'>
        <h1><b>{type.brandName}</b>&nbsp;{type.typeName}</h1>
        <h2>{type.make}</h2>
        <h3>Photos: {type.imgUrls.length}</h3>
        <h3>View Times: {type.viewTimes}</h3>
      </div>
      <div className='categoryTypeViewButton'>
        <button onClick={() => {history.push(`/type/${type.typeId}`)}}>View</button>
      </div>

    </div>
  );
};

export default CategoryTypeCard;
