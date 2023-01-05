import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { addToDb, getCart } from '../utility/fakeDb';

const useCart = () => {
    const [cart,setCart] = useState([])
    const [update,setUpdate] = useState(false)
    useEffect(()=>{
        const savedCart = getCart()
        setCart(savedCart)
    },[update])

    const handleAddToCart = (product)=>{

        const {name,price,image,id} = product
        const myProduct = {
            name, price,image,id,quantity:1,user:'01819051432'
        }
        addToDb(myProduct)
        toast.success('product added successfully')   
        setUpdate(!update)
    }
    
    return {handleAddToCart,cart,setCart}
};

export default useCart;