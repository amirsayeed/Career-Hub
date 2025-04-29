import React from 'react';
import bannerImg from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-4">
            <div className='w-1/2'>
                <img className='relative -bottom-8'
                src={bannerImg}
                />
            </div>
            <div className= 'max-w-lg ml-5 space-y-8'>
            <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
            <p className="text-xl">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn allBtn text-white">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;