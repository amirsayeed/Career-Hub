import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className='max-w-7xl mx-auto min-h-[calc(100vh-285px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;