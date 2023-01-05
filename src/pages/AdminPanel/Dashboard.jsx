import React from "react";
import {AiOutlineUserAdd,AiOutlineShoppingCart} from 'react-icons/ai'
import {TbBrandProducthunt} from 'react-icons/tb'
const Dashboard = () => {
    const iconBoxes = [
        {
            title:'Add user',
            subtitle:'total user 10',
            icon:<AiOutlineUserAdd />
        },
        {
            title:'View orders',
            subtitle:'total order 30',
            icon:<AiOutlineShoppingCart />
        },
        {
            title:'View products',
            subtitle:'totla product 9',
            icon:<TbBrandProducthunt/>
        },
    ]
  return (
    <div className="flex flex-col justify-between  ">
      <h2 className="text-3xl md:text-5xl  font-bold uppercase py-2">
        <span className="text-rose-600 ">Welcome </span>Md. Shipatul Hasan
      </h2>
      <div className="bg-gradient-to-r from-rose-500 via-cyan-500 to-pink-500 p-[2px]" />
      {/* box */}



      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            iconBoxes.map((box,i)=><div key={i} className="mt-10">
            <div className="max-w-2xl rounded shadow-lg shadow-slate-300 dark:bg-gray-800  bg-gradient-to-r from-rose-500 via-cyan-500 to-pink-500 p-[1px] transition-all duration-300 ease-in-out">
              <div className="px-8 py-4 bg-white min-h-[176px] rounded flex flex-col justify-between transition-all duration-300 ease-in-out">
                <div>
                  <div className="mt-2 space-y-2">
                      <div className="text-6xl">
                        {box.icon}
                      
                      </div>
                    <div className="text-end">
                    <h2 className="text-3xl font-bold text-rose-600 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 ">
                      {box.title}
                    </h2>
                    <p className="mt-2 text-lg font-bold text-rose-600 dark:text-gray-300">
                      {box.subtitle}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
        }

        
      </div>
    </div>
  );
};

export default Dashboard;
