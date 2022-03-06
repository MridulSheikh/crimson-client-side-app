import axios from 'axios';
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

const AdminRattingCard = ({name, _id, email, ratting, about, show, reset}) => {
    const [clicked, setClicked] = useState(false);
    const {handleSubmit, register} = useForm();
    const [isloading, setIsloading] = useState(false)
    const submit = data => {
        setIsloading(true)
        axios.put('http://localhost:5000/ratting', data)
        .then(res =>{
            if(res.data.acknowledged){
                reset()
            }
        })
        .finally(()=>setIsloading(false))
    }
    return (
        <div className='mx-5 px-2 text-md bg-white shadow-md py-5 border mt-5 rounded-md'>
        <div className='grid md:grid-cols-5 gap-5'>
            <p>{name}</p>
            <p>{email}</p>
            <p className='text-center'>{ratting}</p>
            <p className='text-center'>{show}</p>
            <button onClick={() => setClicked(!clicked)} className='text-yellow-500'>{clicked ? "close" : "body"}</button>
        </div>
        {
            clicked &&
            <div className='mx-3'>
            <hr className='h-1 bg-green-500 my-5 rounded-full' />
            <p className='text-sm text-gray-700 mb-10'>{about}</p>
            <form onSubmit={handleSubmit(submit)}>
            <input 
            {...register("_id")}
            type="hidden" 
            name='_id'
            Value={_id}
            />
            <label>
            <span className='text-sm'>{show} on web page</span> <br />
            <select 
                  {...register("show", { required: true })}
                  className="mt-3 border text-sm px-3 py-1 rounded-md outline-none focus:ring-2 ring-yellow-500 mb-4"
                  >
                  <option value="hidden">Hidden from website</option>
                  <option value="show">show on the site</option>
                 </select>
            </label>
            <br />
            {
                isloading && <p className='text-green-500 my-5'>updating......</p>
            }
            <button className='px-5 py-1 bg-green-500 text-white rounded-full hover:bg-green-700'>post</button>
            </form>
            <div>
            </div>
            </div>
        }
        
        </div>
    );
};

export default AdminRattingCard;