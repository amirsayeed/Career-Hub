import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredItem } from '../../utility/addToStoreDb';
import Job from '../Job/Job';
import { IoIosArrowDown } from "react-icons/io";


const AppliedJobs = () => {
    const [applied,setApplied] = useState([]);
    const allJobs = useLoaderData()

    useEffect(()=>{
        const jobs = getStoredItem();
        const jobsInt = jobs.map(select=>parseInt(select));
        const selectedJob = allJobs.filter(item=> jobsInt.includes(item.id));
        setApplied(selectedJob);
    },[])

    return (
        <div>
            <div className='bg-gray-200 p-10'>
            <h2 className="text-2xl text-center">Applied Jobs page</h2>
            </div>
            <div className='flex justify-end my-10'>
                <details className="dropdown">
                    <summary className="btn m-1">Filter By<span><IoIosArrowDown size={15}/></span></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Salary</a></li>
                    </ul>
                </details>
            </div>
            <div className='my-20 flex flex-col gap-3 items-center justify-center'>
                {
                 applied.map((job) => <Job key={job.id} job={job}/>)   
                }
            </div>
        </div>
    );
};

export default AppliedJobs;