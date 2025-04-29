import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Components/Home/Home';
import JobDetails from '../Components/JobDetails/JobDetails';
import AppliedJobs from '../Components/AppliedJobs/AppliedJobs';
import Blog from '../Components/Blog/Blog';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage/>,
    children:[
      {
        index: true,
        loader: ()=> fetch('../jobs.json'),
        Component: Home,
        hydrateFallbackElement: <span className='flex items-center justify-center'>
                                    <span className="loading loading-bars loading-lg"></span>
                                    <span className="loading loading-bars loading-xl"></span>
                                </span>
      },
      {
        path: '/jobs/:jobId',
        loader: ()=> fetch('../jobs.json'),
        Component: JobDetails
      },
      {
        path: '/appliedJobs',
        loader: ()=>fetch('../jobs.json'),
        Component: AppliedJobs
      },
      {
        path: '/blog',
        Component: Blog
      }
    ]
  },
]);
 
