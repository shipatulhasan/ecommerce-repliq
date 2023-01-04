import React, { useState } from 'react';

const SingleProduct = ({proudct}) => {
    const [imgLoading,setImgLoading] = useState(false)
    return (
        <div className="grid gap-10 lg:grid-cols-2 items-center border border-slate-200 shadow-lg shadow-slate-200 p-5">
        <div>
          <img
            className={`${!imgLoading?'blur-md':'blur-none'}object-contain w-full h-56 rounded sm:h-96`}
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
                  My fan
                </h3>
                <p className="text-sm">Original price:12012</p>
              </div>
     
          </div>
          <hr className=" border-gray-300" />
          <div>
            <h2 className="text-xl font-bold ">Description</h2>
  
            <p className="my-3 text-sm text-gray-900">
              {/* {description?.length > 250
                ? description.slice(0, 250) + "..."
                : description} */}

                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ipsam dolores suscipit nemo temporibus quae, et unde quo harum voluptate magni similique dolorem pariatur dignissimos nulla vitae sapiente fuga reiciendis?
            </p>

            <div className="my-4 space-y-4 md:space-y-0 md:flex items-center justify-between">
              <button
               
                className="px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer"
              >
                Details now
              </button>
              <button
               
                className="px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer"
              >
                Details now
              </button>
            
  
          
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;