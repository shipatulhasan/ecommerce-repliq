import axios from 'axios';
import { getCart } from './fakeDb';


export const productAndCartData = async()=>{
    const res = await fetch('products.json')
    const products = await res.json()
// fetch product from json
    const savedCart = getCart()
    const initialCart = []
    for(const id in savedCart){

        // get the specific product form localstorage through id

        const foundProduct = products.find(p=>p.id===id)
        if(foundProduct){
            const quantity = savedCart[id]
            foundProduct.quantity = quantity
            initialCart.push(foundProduct)
        }
    } 
    return { products, initialCart }
}