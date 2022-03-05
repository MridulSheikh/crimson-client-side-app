import React from 'react';
import { Link } from 'react-router-dom';

const PageNotfound = () => {
    return (
        <div className='mb-20'>
            <div className='w-3/12 m-auto'>
             <img src="/image/page_not_found.png" width="100%" alt="" />
            </div>
            <div className='text-center'>
            <h1 className='text-5xl font-semibold text-primary mb-5'>Page not found</h1>
            </div>
            <div className='text-center'>
            <Link to="/">
              <button className='px-5 py-2 bg-primary text-white rounded-md mx-auto'>Back to the home</button>
              </Link>
            </div>
        </div>
    );
};

export default PageNotfound;