import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import LeftSideBaqr from '../components/home/LeftSideBaqr';
import RightSideBar from '../components/home/RightSideBar';

const Main = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-12'>
                <Header/>
            </div>
            <div className='col-span-12 grid grid-cols-12'>
                <LeftSideBaqr className="col-span-1"/><Outlet className="col-span-7"/><RightSideBar className="col-span-4"/>
            </div>
            <div><Footer/></div>
        </div>
    );
};

export default Main;