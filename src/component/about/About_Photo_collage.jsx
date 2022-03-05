import React from 'react';
import { Link } from 'react-router-dom';

const About_Photo_collage = () => {
    return (
        <div className='text-center'>
        <div className='grid md:grid-cols-5 px-5 md:px-10'>
            <div>
             <img src="/image/Banner2.jpg" className='h-full' alt="" />
            </div>
            <div>
            <img src="/image/sajek/md-parvez-hossen-yq4Fx0VNxHU-unsplash.jpg" className='h-full' alt="" />
            </div>
            <div>
            <img src="/image/Bnner5.jpg" className='h-full' alt="" />
            </div>
            <div>
            <img src="/image/Bnner4.jpg" className='h-full' alt="" />
            </div>
            <div>
            <img src="/image/coxbazar/masudur-rahman-3VIASEA4xZ0-unsplash.jpg" className='h-full' alt="" />
            </div>
        </div>
        <Link to="/service">
        <button className='mt-20 text-center bg-blue-500 rounded-full text-white py-2 px-5'>Make a journey with us</button>
        </Link>
        </div>
    );
};

export default About_Photo_collage;