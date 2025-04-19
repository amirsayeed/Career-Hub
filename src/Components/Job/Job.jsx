import React from 'react';
import { TfiLocationPin } from "react-icons/tfi";
import { ImCoinDollar } from "react-icons/im";
const Job = ({job}) => {
    
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        // <div className="card bg-base-100 card-lg shadow-md items-start p-4">
        //     <figure>
        //         <img
        //         src={logo}
        //         alt="Shoes" />
        //     </figure>
        //     <div className="space-y-3">
        //         <h2 className="card-title">{job_title}</h2>
        //         <p>{company_name}</p>
        //         <div className='flex gap-4'>
        //             <button className='btn'>{remote_or_onsite}</button>
        //             <button className='btn'>{job_type}</button>
        //         </div>
        //         <div className='flex justify-between'>
        //             <p>Location: {location}</p>
        //             <p>Salary: {salary}</p>
        //         </div>
        //         <div className="card-actions justify-start">
        //         <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>
        <div className="card bg-base-100 card-xs h-96 items-start justify-center shadow-sm px-4 py-8">
            <figure>
                 <img
                src={logo}
                alt="Shoes" />
            </figure>
        <div className="space-y-4 text-left">
            <h2 className="text-2xl">{job_title}</h2>
            <p>{company_name}</p>
            <div className='flex gap-4'>
                <button className='btn'>{remote_or_onsite}</button>
                <button className='btn'>{job_type}</button>
            </div>
            <div className='flex gap-5'>
                <div className='flex'><span><TfiLocationPin size={20}/></span> <span>{location}</span></div>
                <div className='flex'><span><ImCoinDollar size={20}/></span> <span>{salary}</span></div>
            </div>
            <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
            </div>
        </div>
        </div>
    );
};

export default Job;