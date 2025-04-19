import React from 'react';

const CategoryCard = ({category}) => {
    const {logo,category_name,availability} = category;
    return (
        <div className="card bg-base-100 shadow-md p-4">
            <figure>
                <img
                src={logo}
                alt="Shoes" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default CategoryCard;