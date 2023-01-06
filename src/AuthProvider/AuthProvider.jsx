import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [status,setStatus] = useState(false)
    const [isLoading,setIsLoading] = useState(true)
    const token = localStorage.getItem('ecommerce-token')

    useEffect(()=>{
        axios.get('/auth',{headers:{
            authorization:`Bearer ${token}`,
        }})
        .then(res=>{
            if(res.data.status){
                setStatus(true)
                setIsLoading(false)
            }
        })
        .catch(error=>{
            // console.log(error.response)
            if(error.response.status===403 || error.response.status===403){
                setStatus(false)
                setIsLoading(false)
            }
        })
        
    },[])
 
    const authInfo = {status,isLoading,setStatus}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;