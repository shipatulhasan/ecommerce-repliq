import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../../component/ErrorPage";
import useCart from "../../hooks/useCart";

const SingleProduct = () => {
  const [imgLoading, setImgLoading] = useState(false);
  const { handleAddToCart } = useCart()
  const [isLoading, setIsLoading] = useState(true);
  const [products,setProducts] = useState([])

  const { id } = useParams();
  useEffect(() => {
    fetch("products.json")
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
      setIsLoading(false);
    })
  
  }, []);
  if(isLoading){
    return 
  }

const product = products?.find((p) => p.id === id);
if(!product){
  return <ErrorPage />
}
  return (
    <div className="max-w-screen-lg mx-auto space-y-5 py-20">

    <div className=" grid gap-10 lg:grid-cols-2 items-center p-5">
      <div>
        <img
          className={`${
            !imgLoading ? "blur-md" : "blur-none"
          }object-contain w-full h-56 rounded sm:h-96`}
          src={product?.image}
          onLoad={() => setImgLoading(true)}
          alt=""
        />
      </div>

      {/*  */}
      <div className="space-y-5 ">
        <div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold leading-snug sm:pr-8">{product?.name}</h3>
            <p className="text-xl font-bold text-rose-800">${product?.price}</p>
            <div className=" py-3 text-justify">
          <h2 className="text-lg font-bold ">Short Description</h2>
          <hr className=" border-gray-300 my-3 " />

          <p className="text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eum quibusdam. Deleniti, nemo. Incidunt commodi nesciunt illum ad velit vero in veniam aspernatur ullam vitae minus beatae neque, magni eveniet.</p>
        </div>
          </div>
        </div>
        <div className="my-4 space-y-4 md:space-y-0 md:flex items-center gap-5">
        <button
               onClick={()=>handleAddToCart(product)}
                className="px-5 py-2 text-sm font-bold rounded-full tracking-wide text-rose-600 transition duration-200 shadow-md md:w-auto bg-rose-200 hover:bg-rose-300 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer"
              >
                Add to cart
              </button>
        </div>
      
      </div>
    </div>
    <div className="px-5 text-justify">
          <h2 className="text-xl font-bold ">Description</h2>
          <hr className=" border-gray-300 my-3 " />

          <p className="text-sm text-gray-900">{product?.details}</p>
        </div>
    </div>
  );
};

export default SingleProduct;
