import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrderCard = ({_id}) => {
    console.log(_id)
    const [order, setOrder] = useState([]);
    useEffect(()=>{
     axios.get(`https://arcane-refuge-73765.herokuapp.com/service-by-id/${_id}`)
     .then(res => {
         setOrder(res.data)
     })
    },[])
    return (
        <div>
        {
            order.map(order => 
                <Link to={`/serviceDetails/${order.service}`}>
                <div className='bg-white shadow-md border rounded-md pb-5 overflow-hidden'>
                  <img src={order.img} alt="" className='w-full' />
                  <div className='px-3'>
                   <p className='mt-3 text-2xl font-semibold'>{order.service}</p>
                   <p className='mt-3 text-sm font-light text-gray-500'>{order.slogun}</p>
                   <p className='mt-3 text-xl'>${order.price}</p>
                  </div>
                </div>
                </Link>
                )
        }
        </div>
    );
};

export default MyOrderCard;