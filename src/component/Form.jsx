import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Form = ({myForm,handleSubmit}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-300 shadow-lg shadow-slate-400 max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">{myForm.title}</h1>
            <p className="text-sm dark:text-gray-400">{myForm.subtitle}</p>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm">Phone number</label>
                    <input type="text" name="phone" id="phone" placeholder="0181*******" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                </div>
                <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={`${isOpen ? "text" : "password"}`}
                  name="password"
                  id="password"
                  placeholder="password..."
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="absolute top-3 right-3 text-slate-500 hover:cursor-pointer "
                >
                  {isOpen ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
            </div>
            <div className="space-y-2">
                <div>
                <button
                type="submit"
                className="px-4 py-1 border font-semibold rounded-full hover:bg-rose-400 bg-rose-200 text-rose-600"
              >
                {myForm.buttonText}
              </button>
                </div>
                {
                    myForm.footerText &&  <p className="p-4 text-sm text-center dark:text-gray-400">{myForm.footerText}
                    <Link to={`/${myForm.linkedText==='Sign in'?'login':'signup'}`} className="hover:underline text-rose-600 font-bold">{myForm.linkedText}</Link>.
                </p>
                }
               
            </div>
        </form>
    </div>
    );
};

export default Form;