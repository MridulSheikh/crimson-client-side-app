import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';

const EdateProfile = () => {
    const [clicked, setClicked] = useState(true);
    const {user, admin, Logout, isLoading} = useAuth()
    return (
        <div>
        <div className='bg-white border shadow-md  mx-auto my-10 w-2/4 rounded-md py-10'>
        <div className='w-full'>
        {
            user.photoURL ?  <img src={user.photoURL} className='w-2/12 rounded-full mx-auto' alt="" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XmvVL7mrbkE4LOF-O3UCi_V8oUG-3T_ODw&usqp=CAU" className='w-2/12 rounded-full mx-auto' alt="" />
        }
        <div className='text-center mt-5'>
        <p className='text-xl text-primary'>{user.displayName} <sup className='text-1xl'>{admin && "🔑"}</sup></p>
        <p className='mt-3 font-semibold'>{user.email}</p>
        </div>
        <div className='px-10 mt-10'>
        <h1 className='text-2xl font-semibold'>Edate Account information    
        {
            clicked ?  
            <button onClick={()=> setClicked(!clicked)} className='px-5 py-1 text-xl bg-orange-500 text-white rounded-full ml-2'>Edate</button>
            :
            <button onClick={()=> setClicked(!clicked)} className='px-5 py-1 text-xl bg-primary text-white rounded-full ml-2'>Done</button>
        }  </h1>
        <form>
        <div className='border-b-2 border-orange-500 mt-5'>
        {
            clicked ? <input type="text" placeholder='Address' className='outline-none px-1 py-1 w-full' disabled /> :  <input type="text" placeholder='Address' className='outline-none px-1 py-1 w-full' />
        }
         </div>
        <div className='border-b-2 border-orange-500 mt-5'>
        {
            clicked ? <input type="text" placeholder='subname' className='outline-none px-1 py-1 w-full' disabled /> :  <input type="text" placeholder='subname' className='outline-none px-1 py-1 w-full' />
        }
         </div>
        <div className='border-b-2 border-orange-500 mt-5'>
        {
            clicked ? <input type="number" placeholder='Age' className='outline-none px-1 py-1 w-full' disabled /> :  <input type="number" placeholder='Age' className='outline-none px-1 py-1 w-full' />
        }
         </div>
        <div className='border-b-2 border-orange-500 mt-5'>

        {
            clicked ? <input type="number" placeholder='+880 17XXXXXXXXX' className='outline-none px-1 py-1 w-full' disabled /> :  <input type="number" placeholder='+880 17XXXXXXXXX' className='outline-none px-1 py-1 w-full' />
        }
         </div>
         <div>
         <select name="cars" id="cars" form="carform" className='text-orange-700 my-6 text-center outline-primary'>
         <option className='my-3'>Gender</option>
         <option value="male" className='my-3'>Male</option>
         <option value="female" className='my-3'>Female</option>
         <option value="mixer" className='my-3'>Mixer</option>
         </select>
         </div>
         <div className='mt-5'>
         {
             isLoading && <p className='my-5 text-orange-600'>Loading.......</p>
         }
        <button onClick={Logout} className='text-white bg-primary px-5 py-1 rounded-full'>Logout</button>
        <button className='text-white bg-red-700 px-5 py-1 rounded-full ml-5'>Delete account</button>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
    );
};

export default EdateProfile;