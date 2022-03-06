import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [show, setShow] = useState(false);
    const {handlelogin, error, handlegooglesingin, isLoading,  saveUser, setUser, setError} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation()
    const navigate = useNavigate()
    const redirect_uri = location.state?.from || '/';
    //sing in with google 
    const singinWithGoogle = () =>{
        handlegooglesingin()
        .then(result => {
            const user = result.user
            setUser=(user)
            saveUser(user.email, user.displayName)
            navigate(redirect_uri)
        })
    }

    //email password login 
    const email_pass_login = (email, password) =>{
        handlelogin(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            navigate(redirect_uri)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          })
    }
    return (
        <div className='mb-20'>
            <div className=" mx-5 md:w-3/12 md:mx-auto mt-28">
             <div>
             <div className='my-5 border-b-2'>
             <input onBlur={(e)=>setEmail(e.target.value)} type="email" className='w-full px-1 py-2 outline-none' placeholder='userName@gmail.com' required />
             </div>
             <div className='my-5 flex border-b-2 '>
             <input onBlur={(e)=>setPassword(e.target.value)} type={show ? "text" : "password"} className='w-full px-1 py-2 outline-none' placeholder='password' required />
             {
                 show ? <button onClick={()=>setShow(!show)} className="text-primary">Hide</button> : <button onClick={()=>setShow(!show)}>show</button>
             }
             </div>
             <div>
               <p className='text-red-500'>{error}</p>
               { isLoading &&
                   <p>Authenticate.........</p>
               }
             </div>
             <button onClick={()=>email_pass_login(email, password)} className='bg-primary text-white w-full py-1 rounded-full my-5'>login</button>
             <p>Are you new here ? <span className='underline text-primary'><Link to="/registration">sing up</Link></span></p>
             </div>
             <button onClick={singinWithGoogle} className='text-primary border-2 hover:bg-google hover:text-white transition w-full py-1 rounded-full my-5'>sing in with google</button>
            </div>
            <div className='flex justify-between mx-5 md:mx-96 md:px-36 text-primary mt-20'>
            <Link to="/">home</Link>
            <Link to="/service">service</Link>
            <Link to="/blog">blog</Link>
            <Link to="/about">about us</Link>
            </div>
        </div>
    );
};

export default Login;