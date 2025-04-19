import React, { use} from 'react';
import Job from '../Job/Job';

const Jobs = ({jobsPromise}) => {
    const jobsData = use(jobsPromise);
    return (
        <div className='my-20 text-center'>
            <h2 className='text-3xl font-semibold'>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                   jobsData.map(job=><Job key={job.id} job={job}/>) 
                }
            </div>
        </div>
    );
};

export default Jobs;
