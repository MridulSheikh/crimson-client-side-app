import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ServiceDetails = () => {
    const [data, setData] = useState({});
    const [age, setAge] = useState("");
    const [uname , setUname] = useState("");
    const [adress, setAdress] = useState('');
    const [number, setNumber] = useState('');
    const [isopen, setIsopen] = useState(false);
    const [loading, setLoading] = useState("");
    const {name} = useParams();
    const {user} = useAuth();
    const Rederect_uri = "/service";
    const navigate = useNavigate()
    useEffect(()=>{
      axios.get(`http://localhost:5000/service/${name}`)
      .then(res => {
      console.log(res); 
      setData(res.data)
      //rederectin for uknow url
      if(res.data === ""){
        return navigate(Rederect_uri);
      }
      })
      .catch(err => {
        console.log(err)
    });
    },[])
    const submit = e =>{
        setLoading("Loading......")
        axios.post('http://localhost:5000/order', {
            age,
            Name : uname,
            adress,
            number,
            email : user.email, 
            service_id: data._id
          })
          .then(function (response) {
            if(response.data.acknowledged){
                setLoading('Submit successfull ! we are send a email on your email address in 24 hr.')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        e.preventDefault()
    }
    return (
        <div>
        {
            data?.service ?  
            <div className='px-5 md:px-10 my-5'>
            <div className='grid md:grid-cols-2 gap-10 mt-5'>
            <div>
            <h1 className='text-4xl font-bold text-primary'>{data.service}</h1>
            <p className='text-xl text-gray-500 my-5'>${data.price} USD</p>
            <img src={data.img} alt="" />
            </div>
            <div className='text-gray-700'>
            <h1 className='text-4xl font-semibold'>{data.slogun}</h1>
            <div className='my-10 text-xl grid grid-cols-1 gap-5'>
            <p>📆  {data.duration}</p>
            <p>🛫  {data.country} places revews</p>
            <p>🍽  {data.meals}</p>
            <p>👨‍👨‍👦‍👦  {data.group_size}</p>
            </div>
            <div>
            <h1 className='text-4xl font-bold mb-6'>About this trip</h1>
            <p>{data.about}</p>
            </div>
            {
                !isopen &&  <button onClick={()=> setIsopen(true)} className='w-full rounded-full bg-primary text-white py-2 mt-5'>Join now</button>
            }
            </div>
            </div>
            {
              isopen && <div className='fixed w-2/4 border bottom-5 right-5 h-full md:h-auto bg-gray-100 rounded-md shadow-xl p-5'>
              <h1 className='mb-3'>please give your some information :</h1>
              <form onSubmit={submit}>
              <input onBlur={(e)=> setAge(e.target.value)} type="number" placeholder='Age' className='bg-transparent px-2 w-full py-3 mb-5 border-b-2 border-primary outline-none' required />
              <input onBlur={(e)=> setUname(e.target.value)} type="text" placeholder='Name' className='bg-transparent px-2 w-full py-3 mb-5 border-b-2 border-primary outline-none' required />
              <input onBlur={(e)=> setAdress(e.target.value)} type="text" placeholder='street, division, country' className='bg-transparent px-2 w-full py-3 mb-5 border-b-2 border-primary outline-none' required />
              <input  onBlur={(e)=> setNumber(e.target.value)}type="number" placeholder='+880 188XXXXXXX' className='bg-transparent px-2 w-full py-3 mb-5 border-b-2 border-primary outline-none' required />
              <p className='py-5 text-red-700'>{loading}</p>
              <button className='text-white bg-primary px-5 py-1 rounded-md mb-5'>submit</button>
              </form>
              <button onClick={()=> setIsopen(false)} className='text-white bg-orange-700 px-5 py-1 rounded-md'>cancel</button>
            </div>
            }
        </div>
        :
        <div>
          <h1 className='text-center text-red-700 text-xl my-52'>Loading.....</h1>
        </div>
        }
       
        </div>
    );
};

export default ServiceDetails;