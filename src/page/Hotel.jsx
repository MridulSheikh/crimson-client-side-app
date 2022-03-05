import React, { useEffect, useState } from 'react';
import HotelCard from '../component/hotel/HoteCardl';

const Hotel = () => {
    const [hotel, setHotel] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [text, setText] = useState('')
    useEffect(()=>{
        setLoading(true)
        let url;
        if(value == "All"){
             url = `http://localhost:5000/hotel`
          }
          else{
             url = `http://localhost:5000/hotel/${value}`
          }
          console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setHotel(data))
        .finally(()=>setLoading(false))
    },[value])
    const search = () =>{
        setLoading(true)
         fetch(`http://localhost:5000/hotels/${text}`)
         .then(res => res.json())
         .then(data => setHotel(data))
         .finally(()=>setLoading(false))
    }
    const reset = () =>{
        setLoading(true)
         fetch(`http://localhost:5000/hotel`)
         .then(res => res.json())
         .then(data => setHotel(data))
         .finally(()=>setLoading(false))
    }
    console.log(hotel)
    return (
        <div className='px-5 md:px-10 mb-20'>
            <div className='bg-white md:flex justify-between md:sticky mt-10 md:mt-0 hotel-top'> 
             <div className='flex justify-start'>
             <div className='my-auto'> <input onBlur={e => setText(e.target.value)} type="text" placeholder='search your hotel' className='outline-none px-4 py-1 rounded-full shadow-md mr-2' /></div>
             <div className='my-auto'> <button onClick={search} className='text-primary bg-white border-2 rounded-full border-primary hover:bg-primary hover:text-white font-semibold px-5 py-1'>Find</button></div>
             </div>
             
             <div className='flex align-middle gap-5'>
             <div className='my-5 md:my-auto'>
             <button onClick={reset}  className='my-auto text-white bg-primary rounded-full px-3 py-1'>Reset</button>
             </div>
             <select onChange={e => setValue(e.target.value)} name="cars" id="cars" form="carform" className='my-6 text-center outline-primary text-primary'>
             <option className='my-3'>All</option>
             <option value="Dhaka, Bangladesh" className='my-3'>Bangladesh</option>
             <option value="Dubai" className='my-3'>Dubai</option>
             <option value="india" className='my-3'>india</option>
             </select>
             </div>
            </div>
            { !loading ?
              <div className='grid grid-cols-1 my-10 gap-10'>
              { 
                 hotel?.map(hotel => <HotelCard key={hotel._id} country={hotel.country} image={hotel.image} name={hotel.name} About={hotel.About} id={hotel._id} />) 
              }
              </div>
              :
              <div className='m-auto text-primary text-xl h-48'><p className='text-center mt-52'>Loading......</p>
              </div>
             }
        </div>
    );
};

export default Hotel;