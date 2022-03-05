import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import HotelBookingCard from './HotelBookingCard';

const HotelBooking = () => {
    const {user} = useAuth()
    const [order, setOrder] = useState([]);
    const [pageloading, setPageloading] = useState(false);
    const [loading, setLoading] = useState(false)
    console.log(user.email)
    useEffect(()=>{
        setPageloading(true)
        axios.get(`http://localhost:5000/order-hotel/${user.email}`)
        .then(res => {
            setOrder(res.data)
        })
        .finally(()=>setPageloading(false))
    },[])
    const deleteMethode = id =>{
        setLoading(true)
       fetch(`http://localhost:5000/order-hotel/${id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
                const remaining = order.filter(order => order._id !== id);
                setOrder(remaining)
    })
    .finally(()=>setLoading(false))
    }
    return (
        <div>
            <div className='grid md:grid-cols-8 sticky top-0 bg-primary-color text-white py-5 px-14'>
            <div className=''>
            <p className='text-xl font-semibold'>Name</p>
            </div>
            <div className=''>
            <p className='text-xl font-semibold'>room</p>
            </div>
            <div className=''>
            <p className='text-xl font-semibold'>people</p>
            </div>
            <div className=''>
            <p className='text-xl font-semibold'>Duration</p>
            </div>
            <div className=''>
            <p className='text-xl font-semibold'>Free service</p>
            </div>
            <div className=''>
            <p className='text-xl font-semibold'>Amount</p>
            </div>
             </div>
             {
                !pageloading ?
                 <div className='md:mx-10'>
            {
                order?.map(order => <HotelBookingCard 
                    key ={order._id}
                    id ={order._id}
                    name ={order.name}
                    room ={order.room}
                    people ={order.people}
                    duration={order.duration}
                    service_free={order.service_free}
                    final_price={order.final_price}
                    number={order.number}
                    email={order.email}
                    deleteMethode={deleteMethode}
                    loading={loading}
                    />)
            }
            </div>
            :
            <div className='m-auto text-primary text-xl h-48'><p className='text-center mt-52'>Loading......</p>
            </div>
             }
             {
                order.length === 0 && 
                <div className='m-auto text-primary text-xl h-48'><p className='text-center mt-52'>you are not booking any hotel !</p>
                </div>
             }
            
        </div>
    );
};

export default HotelBooking;