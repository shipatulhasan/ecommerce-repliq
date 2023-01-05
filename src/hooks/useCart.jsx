import { useEffect, useState } from 'react';
import { addToDb, getCart } from '../utility/fakeDb';

const useCart = () => {

    const [cart,setCart] = useState([])
    const [update,setUpdate] = useState(false)
    useEffect(()=>{
        const storedCart = getCart()
        setCart(storedCart)
    },[update])
    const handleAddToCart = (product)=>{
        const {name,price,image,id} = product
        const myProduct = {
            name, price,image,id,quantity:1,user:'01819051432'
        }
        addToDb(myProduct)
        setUpdate(!update)
    }
    
    return {handleAddToCart,cart}
};

export default useCart;