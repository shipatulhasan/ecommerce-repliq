import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Form from "../../component/Form";
import axios from "axios";

const Login = () => {
  const { status, setStatus } = useContext(AuthContext);
  const [value, setValue] = useState()
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const pass = form.password.value;
    const user = {
      phone:value,
      password: pass,
    };
    axios
      .post("/login", user)
      .then((res) => {
        if (res.data.token) {
          toast.success("loggedin Successfully");
          localStorage.setItem("ecommerce-token", res.data.token);
          setStatus(true);
        }
      })
      .catch((error) => {
        if (error.request.status === 400) {
          toast.error("invalid credential", { duration: 2000 });
        }
      });
  };
  useEffect(() => {
    if (status) {
      navigate(from, { replace: true });
    }
  }, [status]);

  const myForm = {
    title: "Sign in",
    subtitle: "Sign in to access your account",
    buttonText: "Sign in",
    footerText: `Don't have an account yet?`,
    linkedText: "Sign up",
  };

  return (
    <div className="grid place-content-center min-h-screen h-full">
      <Form myForm={myForm} handleSubmit={handleSubmit} value={value} setValue={setValue} />
    </div>
  );
};

export default Login;
