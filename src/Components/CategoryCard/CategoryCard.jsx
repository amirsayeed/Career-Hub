import React from 'react';

const CategoryCard = ({category}) => {
    const {logo,category_name,availability} = category;
    return (
        <div id='ctg-bg' className="card shadow-md p-4 hover:scale-110">
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