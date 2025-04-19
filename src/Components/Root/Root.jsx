import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <div className='min-h-[calc(100vh-285px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;