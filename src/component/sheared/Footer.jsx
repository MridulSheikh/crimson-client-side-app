import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='px-5 pt-5 pb-10 md:px-10 grid md:grid-cols-3 bg-gray-200 gap-10'>
            <div className='text-black'>
             <h2 className='text-2xl font-semibold'>Quick link</h2>
             <Link to="/service"><p className='mt-3 hover:underline'>TOUR</p></Link>
             <Link to="/hotel"><p className='mt-3 hover:underline'>HOTEL</p></Link>
             <Link to="/blog"><p className='mt-3 hover:underline'>BLOG</p></Link>
             <Link to="/about"><p className='mt-3 hover:underline'>ABOUT US</p></Link>
            </div>
            <div>
            <heading className="text-3xl text-primary font-bold">crimson Travel - x <sup>BD</sup></heading>
            <p className='text-primary text-xl mt-5'>Dhaka, Bangladesh</p>
            <p className='text-xl mt-3'>contect us : +880 1883992410</p>
            <p className='text-xl mt-3'>Eamil : nazir@gmail.com</p>
            </div>
            <div>
            <h1 className='text-3xl font-bold text-primary'><span className='text-black'>OUR</span> SERVICES</h1>
            <p className='mt-5'>Boking room :+880 1883992408</p>
            <p>tour : +880 1883992408</p>
            <p>party : +880 1883992408</p>
            <p>table booking : +880 1883992408</p>
            </div>
        </div>
    );
};

export default Footer;