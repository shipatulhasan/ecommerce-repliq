import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Form from "../../component/Form";

const Login = () => {
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

  const myForm = {
    title:'Sign in',
    subtitle:'Sign in to access your account',
    buttonText:'Sign in',
    footerText:`Don't have an account yet?`,
    linkedText:'Sign up'
}

  return (
    <div className="grid place-content-center min-h-screen h-full">
      <Form myForm={myForm} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default Login;
