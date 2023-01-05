import React from 'react';
import toast from 'react-hot-toast';
import { Link,useNavigate  } from 'react-router-dom';
import Form from '../../component/Form';

const SignUp = ({adduser}) => {
    const navigate = useNavigate ()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const phone = form.phone.value

        const pass = form.password.value
        const user = {
           phone,password:pass,status:true
        }

        fetch('http://localhost:5000/register',{
            method:'post',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)

        })
        .then(res=>{
            if(res.status===302){
                return toast.error('user already exist',{duration:5000})
            }
            return res.json()
        })
        .then(data=>{
            if(data.acknowledged){
                navigate('/login')
            }
        })
        .catch(err=>console.error(err.message))



        console.log(name,email,pass)
    }
    let myForm = {}
    if(adduser){
        myForm ={
            title:'Add user',
            subtitle:'Create new user',
            buttonText:'Add user',
         
        }

    }
    else{
        myForm ={
            title:'Sign up',
            subtitle:'Create your account',
            buttonText:'Sign up',
            footerText:'Already have an account?',
            linkedText:'Sign in'
        }
       
    
    }
    return (
        <div className='grid place-content-center min-h-screen h-full'>
       
            <Form myForm={myForm} handleSubmit={handleSubmit}/>
        </div>
    );
};

export default SignUp;