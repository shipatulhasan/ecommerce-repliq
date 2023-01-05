import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {status,isLoading} = useContext(AuthContext)

    let location = useLocation()

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(status===true){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace/>
};

export default PrivateRoute;