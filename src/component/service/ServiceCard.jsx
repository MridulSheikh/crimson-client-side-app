import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({about, country, duration, group_size, img, meals, price, service, slogun, id }) => {
    return (
        <div className='overflow-hidden rounded-md shadow-md'>
          <div className='h-60'>
            <img src={img} alt="" className='w-full h-full'/>
           </div>
            <div className='p-5'>
            <p className='text-2xl font-semibold mb-5 text-gray-700'>{service}</p>
            <p className='my-5'>⏱ <span>{duration}</span></p>
            <p className='mb-5'>{slogun}</p>
            <Link to={`/serviceDetails/${service}`}>
            <button className='bg-primary text-white py-1 w-full rounded-full'>VEW DETAILS</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceCard;