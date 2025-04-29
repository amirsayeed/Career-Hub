import React, {useEffect, useState} from 'react';
import Job from '../Job/Job';

const Jobs = ({jobsData}) => {
    const [showJobs, setShowJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
        if(showAll){
            setShowJobs(jobsData);
        }else{
            setShowJobs(jobsData.slice(0,6));
        }
    },[jobsData,showAll])
    
    return (
        <div className='my-20 text-center space-y-3'>
            <h2 className='text-3xl font-semibold'>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center'>
                {
                   showJobs.map(job=><Job key={job.id} job={job}/>) 
                }
            </div>
            <div className='text-center mt-8'>
            <button onClick={()=>setShowAll(prev=>!prev)} className='btn allBtn text-white'>{showAll ? 'Show Less' : 'Show All Jobs'}</button>
            </div>
        </div>
    );
};

export default Jobs;
