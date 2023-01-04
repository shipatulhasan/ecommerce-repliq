import React, { useState } from 'react';

const ProductsCard = ({product}) => {
    const [imgLoading,setImgLoading] = useState(false)
    const {price,name,details} = product
    return (
        <div className="grid gap-10 lg:grid-cols-2 items-center border border-slate-200 shadow-lg shadow-slate-200 p-5">
        <div>
          <img
            className={`${!imgLoading?'blur-md':'blur-none'}object-contain w-full h-56 rounded sm:h-80`}
            src={product?.image}
            onLoad={()=>setImgLoading(true)}
            alt=""
          />
        </div>
  
        {/*  */}
        <div className="space-y-5 ">
          <div>
      
              <div className="space-y-1">
                <h3 className="text-xl font-bold leading-snug sm:pr-8">
                 {name}
                </h3>
                <p className="text-sm">Price: ${price}</p>
              </div>
     
          </div>
          <hr className=" border-gray-300" />
          <div>
            <h2 className="text-xl font-bold ">Description</h2>
  
            <p className="my-3 text-sm text-gray-900">
              {details?.length > 250
                ? details.slice(0, 200) + "..."
                : details}

                
            </p>

            <div className="my-4 space-y-4 md:space-y-0 md:flex items-center gap-5">
              <button
               
                className="px-6 py-2 tracking-wide text-cyan-800 rounded-full font-bold transition duration-200  shadow-md md:w-auto bg-cyan-200 hover:bg-cyan-300 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer"
              >
                View Details
              </button>
              <button
               
                className="px-6 py-2 font-bold rounded-full tracking-wide text-fuchsia-800 transition duration-200 shadow-md md:w-auto bg-fuchsia-200 hover:bg-fuchsia-300 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer"
              >
                Add to cart
              </button>
            
  
          
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductsCard;