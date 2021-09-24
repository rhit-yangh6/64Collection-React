import React from 'react';
import Images from "../../images/CategoryIcons"
import CategoryCard from "./components/CategoryCard";
import {Divider} from 'antd';

const detailedCategories = {
    "The Regulars": [
        {category: "Microcar", imgPath: Images["Microcar"]},
        {category: "Hatchback", imgPath: Images["Hatchback"]},
        {category: "Coupe", imgPath: Images["Coupe"]},
        {category: "Sedan", imgPath: Images["Sedan"]},
        {category: "Luxury", imgPath: Images["Luxury"]},
        {category: "Cabriolet", imgPath: Images["Cabriolet"]}
    ],
    "The Speedsters": [
        {category: "Muscle", imgPath: Images["Muscle"]},
        {category: "Roadster", imgPath: Images["Roadster"]},
        {category: "Sports", imgPath: Images["Sports"]},
        {category: "Exotic", imgPath: Images["Exotic"]},
        {category: "Racing", imgPath: Images["Racing"]}
    ],
    "The Utilities": [
        {category: "SUV", imgPath: Images["SUV"]},
        {category: "MPV", imgPath: Images["MPV"]},
        {category: "Van", imgPath: Images["Van"]},
        {category: "Pickup", imgPath: Images["Pickup"]},
        {category: "Wagon", imgPath: Images["Wagon"]},
    ],
    "The Biggies": [
        {category: "MiniTruck", imgPath: Images["MiniTruck"]},
        {category: "Truck", imgPath: Images["Truck"]},
        {category: "Bus", imgPath: Images["Bus"]},
    ],
    "The Others": [
        {category: "Concept", imgPath: Images["Concept"]},
        {category: "Limousine", imgPath: Images["Limousine"]},
        {category: "Military", imgPath: Images["Military"]},
        {category: "Offroad", imgPath: Images["Offroad"]},
        {category: "Unclassified", imgPath: Images["Unclassified"]},
    ]
}


const Categories = () => {

    return (
        <div>
            {Object.keys(detailedCategories).map(bc => (
                <div>
                    <Divider>{bc}</Divider>
                    <div className='categoriesContainer'>
                        {detailedCategories[bc].map(c => (
                            <CategoryCard key={c.name} category={c}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
