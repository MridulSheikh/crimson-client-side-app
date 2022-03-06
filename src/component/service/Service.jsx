import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service, setService] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [resetLoading, setResetLoading] = useState(false);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('https://arcane-refuge-73765.herokuapp.com/service')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setService(data)
        })
        .finally(()=> setLoading(false));
    },[])
    const handle_search = () =>{
        setLoading(true)
         if(searchText === ""){
             alert("please give a value");
             setLoading(false)
             return;
         }
         setLoading(true)
         const url = `https://arcane-refuge-73765.herokuapp.com/service/${searchText}`;
         console.log(url)
         fetch(url)
         .then(res => res.json())
         .then(data =>  {
             setService([data])
            
            })
        .finally(()=> setLoading(false));
    }
    const reset = () =>{
        setResetLoading(true)
        fetch('https://arcane-refuge-73765.herokuapp.com/service')
        .then(res => res.json())
        .then(data => {setService(data) })
        .finally(()=> setResetLoading(false));
    }
    return (
        <div className='mb-20'>
            <div className='my-5 shadow-md flex justify-between pl-5 mx-5 md:w-4/12 rounded-full md:mx-auto'>
            <input onBlur={e => setSearchText(e.target.value)} type="text" placeholder='"Search"' className='outline-none w-full' />
            <button onClick={handle_search} className='bg-primary text-white font-semibold px-7 py-2 rounded-full'>search</button>
            </div>
            {
                resetLoading ? <p className='mx-10 text-primary'>reastarting...........</p> :  <button onClick={reset} className='bg-red-700 text-white font-semibold md:mx-10 px-5 py-2 rounded-full'>reset</button>
            }
            {
                loading && <div className='m-auto text-primary text-xl'><p className='text-center my-36'>Loading......</p>
                </div>
            }
            <div className='grid md:grid-cols-3 gap-10 mt-10 md:px-10'>
              {
                service?.map(service => 
                    <ServiceCard 
                    key={service._id}
                    about = {service.about}
                    country = {service.country}
                    duration = {service.duration}
                    group_size = {service.group_size}
                    img = {service.img}
                    meals = {service.meals}
                    price = {service.price}
                    service = {service.service}
                    slogun = {service.slogun}
                    id = {service._id}
                    />)
              }
            </div>
        </div>
    );
};

export default Service;