import React from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import CartItem from '../Cart/CartItem';

const CheckOut = () => {
    const {cart} = useCart()
    const {state} = useLocation()
    console.log({state})
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        toast.success("Your order has been successfully placed");
        form.reset()
      };
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 ">
            <div className=' p-6 space-y-4 sm:p-10'>
            <ul className='divide-y divide-gray-300'>
            {cart.map(product => (
              <CartItem
                key={product.id}
                product={product}
                
              />
            ))}
          </ul>
          <div className='space-y-1 text-right'>
            <p>
              Total amount: <span className='font-semibold'>${state?.total}</span>
            </p>
            <p className='text-sm text-gray-400'>
              Not including taxes and shipping costs
            </p>
          </div>
            </div>
        <form action="" onSubmit={handleSubmit} className="p-10 bg-slate-50 border border-slate-300 shadow-xl rounded">
        <p  className="text-xl mb-4 font-bold leading-6 text-gray-800">
                     Please fill up the form to place an order
                  </p>
          
            <label className="text-base font-medium leading-none text-gray-800">
              Full Name
              <input
                type="text"
                name="userName"
                required
                className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </label>
      <div className="mt-4">
      <label className="pt-5 text-base font-medium leading-none text-gray-800 ">
              Email
              <input
                type="email"
                name="email"
                required
                className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </label>
      </div>
            
        
  
          <div className="mt-6">
              <p className="text-base mb-4 font-semibold">Payment Method</p>
          <div className="flex items-center mb-4">
              <input id="country-option-1" type="radio" name="countries" value="USA" className="h-4 w-4 border-gray-300 focus:none " aria-labelledby="country-option-1" aria-describedby="country-option-1" />
              <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
              Paypal
              </label>
          </div>
  
          <div className="flex items-center mb-4">
              <input id="payment" type="radio" name="countries" value="Germany" className="h-4 w-4 border-gray-300 focus:none " />
              <label htmlFor="payment" className="text-sm font-medium text-gray-900 ml-2 block">
              Bkash
              </label>
  
          </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          
          </div>
  
          <div className="mt-2">
          <button
              type='submit'
              className='px-6 py-2 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800'
            >
              Place Order
            </button>
          </div>
        </form>
        </div>
    );
};

export default CheckOut;