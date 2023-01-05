import React from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utility/fakeDb';
import CartItem from './CartItem';

const Cart = () => {
    const {cart,setCart} = useCart()
    let total = 0
    const handleRemoveItem = (product) => {
      const permission = window.confirm(`would you like to remove ${product.name}`)
      if(permission){

        const remaining = cart.filter(p => p.id !== product.id)
        setCart(remaining)
        removeFromDb(product.id)
        toast.success('Product Removed!', { autoClose: 500 })
      }
     
      }
      for(const product of cart){
          total = total + (product?.price*product?.quantity)
      }
      const checkout = {handleRemoveItem,total} 
    
    return (
        <div className='flex min-h-screen justify-center  text-gray-900'>
        <div className='w-full max-w-screen-xl p-6 space-y-4 sm:p-10 '>
          <h2 className='text-xl font-semibold'>
            {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
          </h2>
          <ul className='divide-y divide-gray-300'>
            {cart.map(product => (
              <CartItem
                key={product.id}
                product={product}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
          </ul>
          <div className='space-y-1 text-right'>
            <p>
              Total amount: <span className='font-semibold'>${total}</span>
            </p>
            <p className='text-sm text-gray-400'>
              Not including taxes and shipping costs
            </p>
          </div>
          <div className='flex justify-end space-x-4'>
            <Link to='/shop'>
              <button
                type='button'
                className='px-5 py-2 text-sm tracking-wide text-cyan-800 rounded-full font-bold transition duration-200  shadow-md md:w-auto bg-cyan-200 hover:bg-cyan-300 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer'
              >
                Back <span className='sr-only sm:not-sr-only'>to shop</span>
              </button>
            </Link>
            <Link to='/checkout' state={{total}} >
            <button
              className='px-5 py-2 text-sm font-bold rounded-full tracking-wide text-rose-600 transition duration-200 shadow-md md:w-auto bg-rose-200 hover:bg-rose-300 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer'
            >
              Procced to checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Cart;