import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Form from "../../component/Form";

const SignUp = ({ adduser }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState()
  const [loading,setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const pass = form.password.value;
    const user = {
      phone:value,
      password: pass
    };

    axios
      .post("/register", user)
      .then((res) => {
        if (res.data.acknowledged) {
          setLoading(false)
            if(adduser){
                toast.success('create user successfully')
                return
            }
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.request.status === 302) {
          toast.error("user already exist", { duration: 2000 });
          setLoading(false)
        }
      });
  };
  let myForm = {};
  if (adduser) {
    myForm = {
      title: "Add user",
      subtitle: "Create new user",
      buttonText: "Add user",
    };
  } else {
    myForm = {
      title: "Sign up",
      subtitle: "Create your account",
      buttonText: "Sign up",
      footerText: "Already have an account?",
      linkedText: "Sign in",
    };
  }
  return (
    <div className="grid place-content-center min-h-screen h-full">
      <Form myForm={myForm} handleSubmit={handleSubmit} value={value} setValue={setValue} loading={loading} />
    </div>
  );
};

export default SignUp;
