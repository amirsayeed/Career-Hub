import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { ImCoinDollar } from "react-icons/im";
import './JobDetails.css'
import { addToStore } from '../../utility/addToStoreDb';


const JobDetails = () => {
    const navigate = useNavigate();
    const allJobs = useLoaderData()
    const {jobId} = useParams()
    // console.log(jobId,allJobs);
    const id = parseInt(jobId)
    const jobData = allJobs.find(job=> job.id === id);
    const {id:currentId,job_title,contact_information,salary,job_description,job_responsibility,educational_requirements,experiences} = jobData || {}

    const handleApply = (id) =>{
       const isApplied = addToStore(id);
       {isApplied && navigate('/appliedJobs')};
    }

    return (
        <div>
            <div className='p-10 bg-gray-300' >
                <h2 className="text-2xl font-semibold text-center">Job Details</h2>
            </div>
            <div className='my-20'>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row items-start justify-center">
                            <div className="text-justify lg:text-left max-w-3xl space-y-5">
                            <p className="text-lg"><span className='font-medium'>Job Description:</span> {job_description}</p>
                            <p className="text-lg">
                                <span className='font-medium'>Job Responsibility:</span> {job_responsibility}
                            </p>
                            <p className='text-lg'><span className='font-medium'>Educational Requirements:</span><br/>
                                {educational_requirements}</p>
                            <p className='text-lg'> <span className='font-medium'>Experiences:</span><br/>
                                {experiences}
                            </p>
                            </div>
                            <div>
                                <div className="card bg-[linear-gradient(90deg,rgba(126,144,254,0.1),rgba(152,115,255,0.1))] shadow-md rounded-2xl p-4">
                                <div className="card-body">
                                    <span className="text-xl font-medium">Job Details</span>
                                    <div className='border-t border-dashed my-3'></div>
                                    <p className='flex gap-2'>
                                        <span><ImCoinDollar size={20}/></span>
                                        <span><span className='font-medium'>Salary :</span> {salary} (Per Month)</span>
                                    </p>
                                    <p className='flex gap-2'>
                                        <span><ImCoinDollar size={20}/></span>
                                        <span><span className='font-medium'>Job Title :</span> {job_title}</span>
                                    </p>
                                    <div className='border-t border-dashed my-3'></div>
                                    <h2 className="text-xl font-medium">Contact Information</h2>
                                    <div className='border-t border-dashed my-3'></div>
                                    <div className="flex flex-col gap-2">
                                        <p className='flex gap-2'>
                                            <span><ImCoinDollar size={20}/></span>
                                            <span><span className='font-medium'>Phone :</span> {contact_information.phone}</span>
                                        </p>
                                        <p className='flex gap-2'>
                                            <span><ImCoinDollar size={20}/></span>
                                            <span><span className='font-medium'>Email :</span> {contact_information.email}</span>
                                        </p>
                                        <p className='flex gap-2'>
                                            <span><ImCoinDollar size={20}/></span>
                                            <span><span className='font-medium'>Address :</span> {contact_information.address}</span>
                                        </p>
                                    </div>
                                </div>
                                </div>
                                <div className="pt-6">
                                    <button onClick={()=>handleApply(currentId)} className="btn btn-primary btn-block rounded-xl">Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default JobDetails;