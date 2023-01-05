import { useEffect, useState } from 'react';
import { addToDb, getCart } from '../utility/fakeDb';

const useCart = () => {

    const [cart,setCart] = useState([])
    const [update,setUpdate] = useState(false)
    useEffect(()=>{
        setCart(getCart())
    },[update])

    const handleAddToCart = (product)=>{
        const storedCart = getCart()
        const {name,price,image,id} = product
        const myProduct = {
            name, price,image,id,quantity:1,user:'01819051432'
        }
        let newCart = []
        if(storedCart){

            const existingProduct = cart?.find(p=>p.id===product.id)
            if(!existingProduct){
                newCart.push(product)
            }
            else{
                newCart = [...newCart,product]
            }
        }
        
        setCart(newCart)
        addToDb(myProduct)
        setUpdate(!update)
       
    }
    
    return {handleAddToCart,cart,setCart}
};

export default useCart;