import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageHeader from '../../component/PageHeader';
import ProductsCard from './ProductsCard';
import img from '../../assets/banner/banner.jpg'
import { addToDb, getCart } from '../../utility/fakeDb';
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    
    useEffect(()=>{
        axios.get('products.json').then(res=>{
            setProducts(res.data)
            setIsLoading(false)
        })
    },[])
    
    return (
        <div>
            <PageHeader headerInfo={{img,title:'Shop'}} />
            <div className='px-5 py-10 md:px-10 md:py-20 space-y-8 max-w-screen-lg mx-auto'>

            {
                products.map(product=><ProductsCard key={product.id} product={product} />)
            }
            </div>
        </div>
    );
};

export default Shop;