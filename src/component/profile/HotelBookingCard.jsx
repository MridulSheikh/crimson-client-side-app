import React from 'react';
import { Link } from 'react-router-dom';

const HotelBookingCard = ({loading, deleteMethode, id, name, room, people, duration, service_free, final_price, number, email,  hotel_id}) => {
    console.log(id)
    return (
        <div className="shadow-md p-5 mt-5 grid md:grid-cols-8 border rounded-sm bg-white">
            <p className='text-xl font-semibold text-primary'>{name}</p>
            <p className='text-xl font-semibold text-primary'>{room}</p>
            <p className='text-xl font-semibold text-primary'>{people}</p>
            <p className='text-xl font-semibold text-primary'>{duration}</p>
            <p className='text-xl font-semibold text-primary'>{service_free  ? "✔" : "❌"}</p>
            <p className='text-xl font-semibold text-primary'>${final_price}</p>
            {
                loading ? <p className='text-xl font-semibold text-orange-500'>deleting....</p>
                :
                <button onClick={()=>deleteMethode(id)} className='text-xl font-semibold text-red-500'>cancel</button>
            }
            <Link to={`/hotelDetail/${hotel_id}`}>
            <p className='text-xl font-semibold text-yellow-500'>Deatail</p>
            </Link>
        </div>
    );
};

export default HotelBookingCard;