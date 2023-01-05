import React from 'react';
import toast from 'react-hot-toast';
import { Link,useNavigate  } from 'react-router-dom';

const SignUp = () => {
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
                return toast.error('email already exist',{duration:5000})
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
    return (
        <div className='grid place-content-center min-h-screen h-full'>

        <div className="flex flex-col border border-slate-300 shadow-lg shadow-slate-400 max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign up</h1>
            <p className="text-sm dark:text-gray-400">Create your account</p>
        </div>
        <form onSubmit={handleSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm">Phone number</label>
                    <input type="text" name="phone" id="phone" placeholder="0181*******" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">Password</label>
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                </div>
            </div>
            <div className="space-y-2">
                <div>
                    <button type="submit" className='px-6 py-2 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800'>Sign up</button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account ?
                    <Link to="/login" className="hover:underline text-fuchsia-800 font-bold">Sign in</Link>.
                </p>
            </div>
        </form>
    </div>
        </div>
    );
};

export default SignUp;