import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [imgLoading, setImgLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    axios.get("products.json").then((res) => {
      setProducts(res.data);
      setIsLoading(false);
    });
  }, []);

  const product = products.find((p) => p.id === id);
  
if(isLoading){
  return 
}
const {price,name,details} = product
  return (
    <div className="max-w-screen-lg mx-auto space-y-5">

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
            <h3 className="text-2xl font-bold leading-snug sm:pr-8">{name}</h3>
            <p className="text-xl font-bold text-fuchsia-800">${price}</p>
          </div>
        </div>
        <div className="my-4 space-y-4 md:space-y-0 md:flex items-center gap-5">
          <button className="px-5 py-2 text-sm font-bold rounded-full tracking-wide text-fuchsia-800 transition duration-200 shadow-md md:w-auto bg-fuchsia-200 hover:bg-fuchsia-300 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer">
            Add to cart
          </button>
        </div>
      
      </div>
    </div>
    <div className="px-5 text-justify">
          <h2 className="text-xl font-bold ">Description</h2>
          <hr className=" border-gray-300 my-3 " />

          <p className="text-sm text-gray-900">{details}</p>
        </div>
    </div>
  );
};

export default SingleProduct;
