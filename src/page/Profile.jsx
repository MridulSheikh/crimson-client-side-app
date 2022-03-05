import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Profile = () => {
    const {admin} = useAuth();
    const style = {
        height : "100vh",
        overflowY: "scroll"
      }
    return (
        <div className='h-screen flex overflow-hidden bg-gray-300'>
            <div className='bg-primary-color h-screen w-60 text-white pt-5'>
             <div className='mt-10 text-xl ml-3 hover:bg-green-500 mr-3 rounded-sm px-2 py-1'><Link to="edate-profile" >Edate Profile</Link></div>
             <div className='mt-3 text-xl ml-3 hover:bg-green-500 mr-3 rounded-sm px-2 py-1'><Link to="Booking-hotel" >Booking hotel</Link></div>
             <div className='mt-3 text-xl ml-3 hover:bg-green-500 mr-3 rounded-sm px-2 py-1'><Link to="my-tour" >My tour</Link></div>
             <div className='mt-3 text-xl ml-3 hover:bg-green-500 mr-3 rounded-sm px-2 py-1'><Link to="ratting" >Ratting</Link></div>
             {
               admin && <div className='mt-3 text-xl ml-3 hover:bg-green-500 mr-3 rounded-sm px-2 py-1'><Link to="get-ratting" >Get-Ratting</Link></div>
             }
            </div>
            <div style={style} className='h-screen w-full'>
             <Outlet />
            </div>
        </div>
    );
};

export default Profile;