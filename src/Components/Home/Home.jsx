import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router';

const Home = () => {
    const jobsData = useLoaderData();
    return (
        <div>
          <Banner/> 
          <JobCategory/>
          <Jobs jobsData={jobsData}/>
        </div>
    );
};

export default Home;