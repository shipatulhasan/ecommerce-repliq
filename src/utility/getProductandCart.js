import axios from 'axios';
import { getCart } from './fakeDb';


export const productAndCartData = async()=>{
    const res = await axios.get('products.json')
    const products = await res.data

    const savedCart = getCart()
    const initialCart = []
    for(const id in savedCart){

        // get the product form localstorage

        const foundProduct = products.find(p=>p.id===id)
        if(foundProduct){
            const quantity = savedCart[id]
            foundProduct.quantity = quantity
            initialCart.push(foundProduct)
        }
    } 
    return { products, initialCart }
}