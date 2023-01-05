import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [status,setStatus] = useState(false)
    const [isLoading,setIsLoading] = useState(true)
    const token = localStorage.getItem('ecommerce-token')

    useEffect(()=>{
        fetch('http://localhost:5000/auth',{
            headers:{
                authorization:`Bearer ${token}`,
            }
        })
        .then(res=>{
            if(res.status===401 ||res.status===403 ){
                setStatus(false)
                setIsLoading(false)
                return 
            }
            return res.json()
        })
        .then(data=>{
            if(data?.status){
                setStatus(true)
                setIsLoading(false)
            }
        })
    },[])
 
    const authInfo = {status,isLoading,setStatus}
    console.log(status)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;