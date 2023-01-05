import React from 'react';
import useCart from '../../hooks/useCart';

const Cart = () => {
    const {cart} = useCart()
    console.log(cart)
    return (
        <div>
            
        </div>
    );
};

export default Cart;