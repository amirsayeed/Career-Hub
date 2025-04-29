import React from 'react';
import { TfiLocationPin } from "react-icons/tfi";
import { ImCoinDollar } from "react-icons/im";
import { Link } from 'react-router';
const Job = ({job}) => {
    
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className="card bg-base-100 w-96 h-96 items-start justify-center shadow-lg px-6 py-8 gap-2 hover:scale-105 hover:bg-yellow-300">
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
                 
            <Link to={`/jobs/${id}`}>
                <button className="btn allBtn text-white">View Details</button>
            </Link> 
            
            </div>
        </div>
        
        
        </div>
    );
};

export default Job;