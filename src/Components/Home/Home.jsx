import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    const jobsPromise = fetch('jobs.json').then(res=>res.json())
    return (
        <div>
          <Banner/> 
          <JobCategory/>
          <Jobs jobsPromise={jobsPromise}/>
        </div>
    );
};

export default Home;