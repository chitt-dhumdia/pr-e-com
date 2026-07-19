import { useState } from "react";
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify'
import axios from "axios";
import apiInstance from "../api/axiosInstance.js";

const Register = () => {

  const[formData,setFormData]=useState({});
  const navigate = useNavigate();

  const handleChange = (e)=>{

    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  }

 const handleSubmit = async (e) => {
  e.preventDefault();

  const { password, confirmPassword } = formData;

  if (password !== confirmPassword) {
    return toast.error("Password and Confirm Password do not match");
  }

  await registerUser();
};

const registerUser = async () => {
  try {
    const res = await apiInstance.post("/user/register", formData);

    toast.success(res.data.message);

    navigate("/login");

  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};


  return (

    

    <div className="register-page">

      <div className="register-card">

        <div className="register-header">
          <h2>ShopNest</h2>
          <p>Create Your Account</p>
        </div>

        <form onSubmit={handleSubmit} method="post">

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
              value={formData.name || ''}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={formData.email || ''}

              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              value={formData.password || ''}
              placeholder="Enter password"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              onChange={handleChange}
              value={formData.confirmPassword || ''}
              placeholder="Confirm password"
            />
          </div>

          <button className="btn register-btn w-100">
            Register
          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;