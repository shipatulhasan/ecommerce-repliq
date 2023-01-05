import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {CartContext} from '../Layouts/Main'
import { addToDb, getCart } from '../utility/fakeDb';

const useCart = () => {
    const [cart, setCart] = useContext(CartContext)
    const handleAddToCart = (product)=>{
        addToDb(product.id)
        let newCart = []
        const exist = cart.find(p=>p.id===product.id)
        if(exist){
            // remove existing product from cart
            const rest = cart.filter(p=>p.id!==product.id)
            exist.quatity = exist.quatity  + 1
            newCart = [exist,...rest]
        }
        else{
            newCart=[product,...cart]
        }

        
        setCart(newCart)
        toast.success('product added successfully')   
    }
    
    return {handleAddToCart,cart,setCart}
};

export default useCart;