import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { status, setStatus } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const pass = form.password.value;
    const user = {
      phone,
      password: pass,
    };
    fetch("http://localhost:5000/login", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 400) {
          return toast.error("invalid credential", { duration: 5000 });
        }
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          toast.success("loggedin Successfully");
          localStorage.setItem("ecommerce-token", data.token);
          setStatus(true);
        }
      })
      .catch((err) => console.error(err.message));
  };
  useEffect(() => {
    if (status) {
      navigate(from, { replace: true });
    }
  }, [status]);

  return (
    <div className="grid place-content-center min-h-screen h-full">
      <div className="flex flex-col border border-slate-300 shadow-lg shadow-slate-400 max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm">
                phone number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="01810******"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={`${isOpen ? "text" : "password"}`}
                  name="password"
                  id="password"
                  placeholder="password..."
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="absolute top-3 right-3 text-slate-500 hover:cursor-pointer "
                >
                  {isOpen ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="px-4 py-1 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800"
              >
                Sign in
              </button>
            </div>
            <p className="p-4 text-sm text-center dark:text-gray-400">
              Don't have an account yet?
              <Link
                to="/signup"
                className="hover:underline text-cyan-600 font-bold"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
