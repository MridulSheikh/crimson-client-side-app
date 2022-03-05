import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({name, image, country, About,id}) => {
    return (
        <div className="grid md:grid-cols-2 gap-10">
            <div>
            <img src={image} alt="" width="100%" />
            </div>
            <div>
            <h1 className='text-3xl font-bold text-primary'>{name}</h1>
            <p className='my-5 text-xl font-semibold text-gray-700'>{country}</p>
            <p>{About}</p>
            <Link to={`/hotelDetail/${id}`} ><p className='text-xl hover:underline text-blue-800 mt-5'>see more</p></Link>
            </div>
        </div>
    );
};

export default HotelCard;