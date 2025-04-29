import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const JobCategory = () => {
    const [cateogories,setCategories] = useState([]);
    
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data =>setCategories(data))
    },[])

    return (
        <div className='text-center my-20 space-y-3'>
            <h2 className='text-3xl font-semibold'>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='my-10 flex items-center justify-around gap-6'>
                {
                    cateogories.map(category=> <CategoryCard key={category.id} category={category}/>)
                }
            </div>

        </div>
    );
};

export default JobCategory;