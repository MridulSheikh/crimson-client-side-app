import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const {user, Logout, admin} = useAuth();
    console.log(admin)
    const handlelogout = () =>{
        setIsClicked(!isClicked);
        Logout()
    }
    console.log(user)
    return (
        <div className='shadow-md sticky top-0 z-50'>
        <div className='flex justify-between bg-white text-primary py-3 px-3 md:px-10'>
            <div className='md:my-2'>
            <NavLink to='/'><h1 className='text-primary text-xl md:text-2xl font-semibold'>Crimson Travel - X <sup className='text-1xl'>BD</sup> </h1></NavLink>
            </div>
            <div className='gap-10 hidden md:flex'>
              <div className='text-primary my-auto hover:underline'><NavLink to="service">TOUR</NavLink></div>
              <div className='text-primary my-auto hover:underline'><NavLink to="hotel">HOTEL</NavLink></div>
              <div className='text-primary my-auto hover:underline'><NavLink to="blog">BLOG</NavLink></div>
              <div className='text-primary my-auto hover:underline'><NavLink to="about">ABOUT US</NavLink></div>
              <div className='text-primary my-auto hover:underline'>
              {
                user.email ? 
                <button onClick={()=> setIsClicked(!isClicked)} className='overflow-hidden rounded-full my-auto'>
                {
                    user.photoURL ? <img src={user.photoURL} alt="" width={40} /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XmvVL7mrbkE4LOF-O3UCi_V8oUG-3T_ODw&usqp=CAU" alt="" width={40} />
                }
                </button> : <NavLink to="login">LOGIN</NavLink>
              }
              </div>
            </div>
            <div className='inline md:hidden'>
            <button onClick={()=> setOpen(!open)}>
            {  !open ? 
                <p className='text-primary'>Touch</p>
                :
                <p className='text-red-600'>close</p>
            }
            </button>
            </div>
        </div>
        {
            open && 
            <div className='fixed w-screen h-screen bg-white z-40'>
        <div className='mx-20 mt-28 grid grid-cols-1 gap-9 text-xl text-center'>
        <div className='text-primary my-auto hover:underline' onClick={()=>setOpen(!open)}><NavLink to="service">SERVICE</NavLink></div>
        <div className='text-primary my-auto hover:underline' onClick={()=>setOpen(!open)}><NavLink to="hotel">HOTEL</NavLink></div>
        <div className='text-primary my-auto hover:underline' onClick={()=>setOpen(!open)}><NavLink to="blog">BLOG</NavLink></div>
        <div className='text-primary my-auto hover:underline' onClick={()=>setOpen(!open)}><NavLink to="about">ABOUT US</NavLink></div>
        <div className='text-wprimarymy-auto hover:underline' onClick={()=>setOpen(!open)}><NavLink to="login">LOGIN</NavLink></div>
        </div>
        </div>
        }
        {
            isClicked && 
            <div className='fixed right-4 top-20 bg-white p-3 shadow-md z-40'>
            <p className='py-3 px-3 rounded'>{user.email}</p>
            <div className=''>
            <Link to='/profile/edate-profile' onClick={()=>setIsClicked(!isClicked)}> <p className='hover:bg-gray-300 px-3 py-3 my-3 rounded'>Profile</p> </Link>
            </div>
              <button onClick={handlelogout} className='bg-primary-color text-white w-full rounded-md mt-3 py-1'>sing out</button>
            </div>
        }
        </div>
    );
};

export default Header;