import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loader from '../component/Spinner/Loader';

const PrivateRoute = ({children}) => {
    const {status,isLoading} = useContext(AuthContext)

    let location = useLocation()

    if(isLoading){
        return <Loader height={'min-h-[60vh]'} />
    }
    if(status===true){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace/>
};

export default PrivateRoute;