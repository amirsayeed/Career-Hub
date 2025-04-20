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
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index: true,
        path: '/',
        Component: Home,
        hydrateFallbackElement: <p>Loading, Please wait...</p>,
        loader: ()=> fetch('categories.json')
      },
      {
        path: '/jobs/:jobId',
        loader: ()=> fetch('../jobs.json'),
        Component: JobDetails
      },
      {
        path: '/appliedJobs',
        Component: AppliedJobs,
        loader: ()=>fetch('../jobs.json')
      },
      {
        path: '/blog',
        Component: Blog
      }
    ]
  },
]);
 
