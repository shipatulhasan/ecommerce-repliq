import React, { useContext } from 'react';
import PageHeader from '../../component/PageHeader';
import ProductsCard from './ProductsCard';
import img from '../../assets/banner/banner.jpg'
import { ProductContext } from '../../Layouts/Main';

const Shop = () => {

    const products = useContext(ProductContext)
    
 
    
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