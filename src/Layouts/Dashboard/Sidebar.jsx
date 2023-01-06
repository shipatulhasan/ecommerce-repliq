import React, { useContext, useState } from "react";
import brand from "../../assets/brand/ecommerce-logo.png";
import profile from "../../assets/brand/Profile.png";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {AiOutlineUserAdd} from 'react-icons/ai'
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { resetDb } from "../../utility/fakeDb";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const {setStatus} = useContext(AuthContext)
  const handlelogout = ()=>{
    localStorage.removeItem("ecommerce-token")
    resetDb()
    setStatus(false)
  }

  let menuList = (
    <>
      <NavLink to="/dashboard/add-user">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-rose-600 text-white" : " text-rose-600"
            } w-full hover:bg-rose-600 hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
          >
            <div className="flex gap-2 items-center">
              <AiOutlineUserAdd className="" />
              <span className="">Add User</span>
            </div>
          </li>
        )}
      </NavLink>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logout");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div>
      <div className="w-64 hidden bg-slate-50 shadow h-full md:flex  flex-col justify-between fixed">
        <div className="px-8 my-5">
        <Link
            to='/'
            title='eCommerce'
            className='inline-flex items-center'
          >
          <img src={brand} className='w-10 rounded-full' alt="" />
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              eCommerce
            </span>
          </Link>
          <Link to="/dashboard" className="flex items-center justify-center gap-0 mt-2">
            <div className="w-16 h-16 overflow-hidden border-2 ring-rose-600 ring-2 m-1 rounded-full flex items-center justify-center flex-shrink-0">
              <img
                src={profile}
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </div>
          </Link>
          <div className="mt-4">
            <h2 className="text-center font-bold text-black">
              Md. Shipatul Hasan
            </h2>
            <p className="text-center text-sm font-bold text-black">
              shipatulhasan328@gmail.com
            </p>
          </div>
          <ul className="mt-12 space-y-8">{menuList}</ul>
        </div>

        <div>
          <div className="my-3">
            <ul className="px-8 mt-10 w-full flex items-center justify-start gap-10">
              <li className="cursor-pointer text-rose-600 pt-5 pb-3">
                <FaFacebookF />
              </li>
              <li className="cursor-pointer text-rose-600 pt-5 pb-3">
                <FaWhatsapp />
              </li>
              <li className="cursor-pointer text-rose-600 pt-5 pb-3">
                <FaLinkedinIn />
              </li>
            </ul>
          </div>

          <p
            onClick={handlelogout}
            className="flex items-center p-3 text-sm text-white capitalize transition-colors duration-300 hover:cursor-pointer transform bg-rose-600"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="mx-1">Sign Out</span>
          </p>
        </div>
      </div>
      <div
        className={
          show
            ? "w-64 fixed flex bg-white z-10 shadow h-full flex-col justify-between md:hidden transition duration-150 ease-in-out transform -translate-x-full"
            : "w-64 fixed flex bg-white shadow h-full flex-col justify-between md:hidden transition duration-150 ease-in-out transform z-10 -translate-x-0"
        }
        id="mobile-nav"
      >
        <div
          className="h-10 w-10 bg-rose-600 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
          id="mobile-toggler"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-adjustments"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FFFFFF"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={6} cy={10} r={2} />
            <line x1={6} y1={4} x2={6} y2={8} />
            <line x1={6} y1={12} x2={6} y2={20} />
            <circle cx={12} cy={16} r={2} />
            <line x1={12} y1={4} x2={12} y2={14} />
            <line x1={12} y1={18} x2={12} y2={20} />
            <circle cx={18} cy={7} r={2} />
            <line x1={18} y1={4} x2={18} y2={5} />
            <line x1={18} y1={9} x2={18} y2={20} />
          </svg>
        </div>
        <div className="px-8 my-5">
        <Link
            to='/'
            title='eCommerce'
            className='inline-flex items-center'
          >
          <img src={brand} className='w-10 rounded-full' alt="" />
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              eCommerce
            </span>
          </Link>
          <div className="mt-2 space-y-4">
          <Link to="/dashboard" className="flex items-center justify-center gap-0 mt-2">
            <div className="w-16 h-16 overflow-hidden border-2 ring-rose-600 ring-2 m-1 rounded-full flex items-center justify-center flex-shrink-0">
              <img
                src={profile}
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </div>
          </Link>
          <div className="">
            <h2 className="text-center  font-bold text-slate-800">
              Md. Shipatul Hasan
            </h2>
            <p className="text-center text-sm font-bold text-slate-800">
              shipatulhasan328@gmail.com
            </p>
          </div>
          </div>
          <ul className="mt-12 space-y-8">{menuList}</ul>
        </div>

        <div>
          <div className="my-3">
            <ul className="px-8 mt-10 w-full flex items-center justify-start gap-10">
              <li className="cursor-pointer text-rose-600 pt-5 pb-3">
                <FaFacebookF />
              </li>
              <li className="cursor-pointer text-rose-600 pt-5 pb-3">
                <FaWhatsapp />
              </li>
              <li className="cursor-pointer text-rose-600 pt-5 pb-3">
                <FaLinkedinIn />
              </li>
            </ul>
          </div>

          <p
            onClick={handlelogout}
            className="flex items-center p-3 text-sm text-white capitalize transition-colors duration-300 hover:cursor-pointer transform bg-rose-600"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="mx-1">Sign Out</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
