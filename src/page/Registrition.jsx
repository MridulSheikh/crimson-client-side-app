import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';

const Registrition = () => {
    const [show, setShow] = useState(false)
    const [shows, setShows] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [passwordp, setPasswordP] = useState('');
    const [rpassword, setRpassword] = useState('');
    const {handleRegistration, isLoading, error, setError, handlegooglesingin} = useAuth()
    const proccesReg = (e) =>{
        e.preventDefault();
          setError("")
          if(displayName.length === 0){
              setError('please fill-up this name filed')
              return;
          }
          if(email.length === 0){
              setError('please fill-up this email field')
              return;
          }
        if(passwordp === rpassword){
            if(passwordp.length >= 8){
                handleRegistration(email, passwordp, displayName)
            }
            else{
                setError('set a Password minimum 8 carecter')
            }
        }
        else{
           setError("re-enter password not match")
        }
    }
    console.log(isLoading)
    return (
        <div className=''>
            <div className=" mx-5 md:w-3/12 md:mx-auto mt-28">
             <div>
             <div className='my-5 border-b-2'>
             <input onBlur={(e)=>setDisplayName(e.target.value)} type="text" className='w-full px-1 py-2 outline-none' placeholder='Name' required />
             </div>
             <div className='my-5 border-b-2'>
             <input onBlur={(e)=> setEmail(e.target.value)} type="text" className='w-full px-1 py-2 outline-none' placeholder='userName@gmail.com' required />
             </div>
             <div className='my-5 flex border-b-2 '>
             <input type={show ? "text" : "password"} onBlur={(e)=>setPasswordP(e.target.value)} className='w-full px-1 py-2 outline-none' placeholder='password' required />
             {
                 show ? <button onClick={()=>setShow(!show)} className="text-primary">Hide</button> : <button onClick={()=>setShow(!show)}>show</button>
             }
             </div>
             <div className='my-5 flex border-b-2 '>
             <input type={shows ? "text" : "password"} onBlur={(e)=>setRpassword(e.target.value)} className='w-full px-1 py-2 outline-none' placeholder='Re-enter password' />
             {
                 shows ? <button onClick={()=>setShows(!shows)} className="text-primary">Hide</button> : <button onClick={()=>setShows(!shows)}>show</button>
             }
             </div>
             <div>
              <p className='text-red-500'>{error}</p>
              {
                isLoading && <p>Registering.........</p>
            }
             </div>
             <button onClick={proccesReg} className='bg-primary text-white w-full py-1 rounded-full my-5'>sing up</button>
             <p>Are you new here ? <span className='underline text-primary'><Link to="/login">login</Link></span></p>
             </div>
             <div>
            { /*<button onClick={handlegooglesingin} className='text-primary border-2 hover:bg-google hover:text-white transition w-full py-1 rounded-full my-5'>sing in with google</button>*/}
             </div>
            </div>
            <div>
            </div>
            <div className='flex justify-between mx-5 md:mx-96 md:px-36 text-primary my-10'>
            <Link to="/">home</Link>
            <Link to="/service">service</Link>
            <Link to="/blog">blog</Link>
            <Link to="/about">about us</Link>
            </div>
        </div>
    );
};

export default Registrition;