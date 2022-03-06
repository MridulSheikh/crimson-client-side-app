import React from 'react';
import Banner from '../component/home/Banner';
import PopulerBangladesh from '../component/home/PopulerBangladesh';
import ShowingRtting from '../component/home/ShowingRtting';

const Home = () => {
    return (
        <div className='mb-20'>
            <Banner />
            <PopulerBangladesh />
            <ShowingRtting />
        </div>
    );
};

export default Home;