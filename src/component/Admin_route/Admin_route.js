import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const AdminRoute = ({children}) => {
    const{user, isLoading, admin} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <div>
        <h1 className='text-center text-red-700 text-xl my-52'>Loading.....</h1>
      </div>
      
    }
    if(user.email && admin){
        return children
    }
    return <Navigate to="/" state={{from : location}} />
};

export default AdminRoute;