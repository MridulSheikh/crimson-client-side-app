import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HotelDetailCard from '../component/hoteDetails/HotelDetailCard';

const HotelDetails = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const navigate = useNavigate();
    const Rederect_uri = '/';

    useEffect(()=>{
        axios.get(`https://arcane-refuge-73765.herokuapp.com/hotel-by-id/${id}`)
        .then(res => {
            console.log(res.data)
            if(res.data === ""){
                return navigate(Rederect_uri)
            }
            setDetail(res.data);
        })
        .catch(err => {
            console.log(err)
        });
    },[])
    return (
        <div>
        {
            detail.name 
            ?
            <div className='my-5 md:px-10 '>
        <div className='grid md:grid-cols-2 md:gap-10 px-5 '>
            <div>
              <p className='text-3xl text-gray-700 font-semibold mb-5'>{detail.name}</p>
              <p className='text-gray-700 font-semibold mb-5'>Location : {detail.country}</p>
              <img src={detail.image} alt="" className='w-full' />
            </div>
            <div>
             <div>
             <p className='text-2xl mt-3 md:mt-0 font-semibold text-gray-500'>About</p>
             <p className='my-3 text-gray-500'>{detail.About}</p>
             </div>
             <div>
             <p className='text-2xl text-primary font-semibold my-3'>service : </p>
             {
                 detail?.service?.map(service => <p  className='bg-primary inline-block rounded-md text-white p-3 m-1'>✔ {service}</p>)
             }
             </div>
            </div>
        </div>
        <div className="text-center text-4xl text-gray-600 font-semibold">
        <p className="my-20">Price plane</p>
        <div className='grid md:grid-cols-4 md:gap-10 mt-5 md:mt-10'>
        {
            detail?.package?.map(s => <HotelDetailCard _id={detail._id} key={s.price} name={s.name} room={s.Room} people={s.people} duration={s.duration} service_free={s.service_free} price={s.price} />)
        }
        </div>
        </div>
    </div>
    :
    <div>
          <h1 className='text-center text-red-700 text-xl my-52'>Loading.....</h1>
        </div>
        }
        
    </div>
    );
};

export default HotelDetails;