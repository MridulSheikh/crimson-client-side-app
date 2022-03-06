import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useCalculation from '../../hooks/useCalculation';

const HotelDetailCard = ({name, room, people, duration, service_free, price, _id}) => {
    const [value, setValue] = useState(1);
    const [number, setNumber] = useState('');
    const {final_price, calculation} = useCalculation();
    const [alert, setAlert] = useState('')
    const {user} = useAuth()
    useEffect(()=>{
        calculation(price, value)
    },[value])
    console.log(value)
    const handleOrder = () =>{
        setAlert("Loading....")
        if(!number){
            setAlert("we need you number");
            return;
        }
        axios.post('http://localhost:5000/order-hotel', {
            name,
            room,
            people,
            duration,
            service_free,
            final_price,
            number,
            email : user.email,
            hotel_id : _id
          })
          .then(function (response) {
            if(response.data.acknowledged){
                setAlert("booking successfully !")
            }
          })
          .catch(error =>{
              console.log(error)
              setAlert("booking not successfully")
          })
    }
    return (
        <div className='shadow-md rounded-md text-xl text-left border'>
        <div className='p-5'>
        <h2 className='text-4xl text-green-600'>{name}</h2>
        <div className='text-left my-5 text-black'>
        <p className='mb-2'> <sup>*</sup>{room} Room</p>
        <p className='mb-2'> <sup>*</sup>{people} People</p>
        <p className='mb-2'> <sup>*</sup>{duration}</p>
        <p className='mb-2'> ${final_price}</p>
        <p className='mb-2'> {service_free ? "✔" : "❌"} free service</p>
        <div className='my-5'>
        <input onBlur={e => setNumber(e.target.value)} type="text" className='text-1xl outline-none'  placeholder='+880 188XXXXXXXX' />
        </div>
        <select onChange={e => setValue(e.target.value)} name="cars" id="cars" form="carform" className='my-6 text-center text-1xl outline-none text-primary'>
             <option value="1" className='my-3'>1 night</option>
             <option value="2" className='my-3'>2 night</option>
             <option value="3" className='my-3'>3 night</option>
             <option value="4" className='my-3'>4 night</option>
             </select>
             <p className='text-1xl text-primary my-5'>{alert}</p>
             <button onClick={handleOrder} className='bg-primary text-white py-1 rounded-md w-full'>Booking</button>
        </div>
        </div>
        </div>
    );
};

export default HotelDetailCard;