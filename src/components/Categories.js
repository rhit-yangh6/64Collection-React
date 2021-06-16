import React from 'react';
import Images from "../images/CategoryIcons"
import CategoryCard from "./CategoryCard";

const Categories = () => {

  let categories = []
  for (let item in Images) {
    categories.push({
      "category": item,
      "imgPath": Images[item]
    })
  }

  return (
    <div className='categoriesContainer'>
      {categories.map((c) => (
        <CategoryCard key={c.category} category={c} />
      ))}
    </div>
  );
};

export default Categories;
