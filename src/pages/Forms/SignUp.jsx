import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Form from "../../component/Form";

const SignUp = ({ adduser }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;

    const pass = form.password.value;
    const user = {
      phone,
      password: pass,
      status: true,
    };

    axios
      .post("/register", user)
      .then((res) => {
        if (res.data.acknowledged) {
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.request.status === 302) {
          toast.error("user already exist", { duration: 2000 });
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
      <Form myForm={myForm} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignUp;
