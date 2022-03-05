import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Private_route = ({children, ...rest}) => {
    const{user, isLoading} = useAuth();
    const location = useLocation();
    console.log(isLoading)
    if(isLoading){
        return <div className=''>
        <h1 className='text-center text-red-700 text-xl my-52'>Loading.....</h1>
      </div>
      
    }
    if(user.email){
        return children
    }
    console.log("not return")
    return <Navigate to="/login" state={{from : location}} />
};

export default Private_route;