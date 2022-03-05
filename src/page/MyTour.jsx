import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyOrderCard from '../component/myorder/MyOrderCard';
import useAuth from '../hooks/useAuth';

const MyTour = () => {
    const [order, setOrder] = useState([]);
    const [isloading, setIsloading] = useState(false);
    const {user} = useAuth();
    useEffect(()=>{
        setIsloading(true)
        axios.get(`http://localhost:5000/order/${user.email}`)
        .then(res => {
           setOrder(res.data)
        })
        .finally(()=>setIsloading(false))
    },[])
    return (
        <div>
            {
                isloading && 
                <div>
                <h1 className='text-center text-red-700 text-xl my-52'>Loading.....</h1>
               </div>
            }
            <div className='my-5 grid md:grid-cols-3 gap-5 px-5'>
            {
                  order.map(order => 
                    <MyOrderCard 
                    key = {order._id}
                    _id = {order.service_id}
                    />)
            }
            </div>
            {
                order.length === 0 &&
                <div>
                <h1 className='text-center text-red-700 text-xl my-52'>Order not found 😕!</h1>
               </div>
            }
        </div>
    );
};

export default MyTour;