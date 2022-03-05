import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';
const Ratting = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const [loading, setLoading] = useState(false);
    const {user} = useAuth();
    const submit = data =>{
        setLoading(true);
        axios.post('http://localhost:5000/ratting', data)
        .then(res => {
           if(res.data.insertedId){
               alert('thank you for your submition')
           }
           if(!res.data.insertedId){
            alert('submition failed')
           }
        })
        .finally(()=> setLoading(false))
        reset()
    }
    return (
        <div className='my-10'>
            <div>
            <form onSubmit={handleSubmit(submit)} className='bg-white shadow-md border rounded-md w-5/12 mx-auto p-7 flex flex-col'>
            <h2 className='text-2xl text-gray-400 font-semibold'>give us Ratting</h2>
            <hr className='bg-green-500 h-1 my-5 rounded-full' />
            <input 
            type="hidden"
            {...register("show")}
            value="hidden"
            />
            <label className='my-3'>
            <span>Name<sup>*</sup></span>
            <br />
            <input 
            type="text"
            {...register("name", { required: true })}
             className="mt-3 border px-3 py-1 rounded-md outline-none focus:ring-2 ring-yellow-500 w-full"
             placeholder='John smith'
            />
            </label>
            <label className='my-3'>
            <span>Email<sup>*</sup></span>
            <br />
            <input 
            type="email"
            {...register("email", { required: true })}
             className="mt-3 border px-3 py-1 rounded-md outline-none focus:ring-2 ring-yellow-500 w-full"
             placeholder='name@email.com'
            />
            </label>
            <label className='my-3'>
                  <span>Ratting<sup>*</sup></span>
                  <select 
                  {...register("ratting", { required: true })}
                  className="mt-3 border px-3 py-1 rounded-md outline-none focus:ring-2 ring-yellow-500 w-full"
                  >
                  <option value="1" >1</option>
                  <option value="2" >2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                 </select>
            </label>
            <label className='my-5'>
            <span>Email<sup>*</sup></span>
            <br />
            <textarea 
            type="text"
            {...register("about", { required: true })}
             className="mt-3 border px-3 py-1 rounded-md outline-none focus:ring-2 ring-yellow-500 w-full"
             placeholder='discripton'
             rows={7}
            />
            </label>
            {/* errors will return when field validation fails */}
            <div className='mb-3'>
            {
                errors.name && (
                    <span className='text-red-500'>- The Name field is required</span>
                )
            }
            <br />
            {
                errors.email && (
                    <span className='text-red-500'>- The email field is required</span>
                )
            }
            <br />
            {
                errors.about && (
                    <span className='text-red-500'>- The description field is required</span>
                )
            }
            {
                errors.ratting && (
                    <span className='text-red-500'>- please give a ratting</span>
                )
            }
        </div>
        <div>
        {
            loading && <p className='mb-5 text-green-500'>submiting....</p>
        }
        </div>
            <button className='w-full py-1 bg-green-500 text-white hover:bg-primary rounded-md'>submit</button>
            </form>
            </div>
        </div>
    );
};

export default Ratting;