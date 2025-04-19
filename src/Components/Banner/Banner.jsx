import React from 'react';
import bannerImg from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-4">
            <img className='relative -bottom-4'
            src={bannerImg}
            />
            <div className= 'max-w-lg ml-5 space-y-4'>
            <h1 className="text-5xl font-bold">One Step <br/> Closer To Your<br/> Dream Job</h1>
            <p className="py-6">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;