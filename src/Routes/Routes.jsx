import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Components/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index: true,
        Component: Home
      }
    ]
  },
]);
 
