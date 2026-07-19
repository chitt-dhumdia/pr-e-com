import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiInstance from "../api/axiosInstance.js";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginUser();
  };

  const loginUser = async () => {

    try {

      const res = await apiInstance.post("/user/login", formData);

      localStorage.setItem("token", res.data.token);

      toast.success(res.data.message);

      if (res.data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }

  };

  return (

    <div className="register-page">

      <div className="register-card">

        <div className="register-header">
          <h2>ShopNest</h2>
          <p>Login Your Account</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          <div className="mb-4">

            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

          </div>

          <button
            className="btn register-btn w-100"
            type="submit"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );

};

export default Login;