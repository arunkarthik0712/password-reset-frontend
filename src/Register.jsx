import React, { useState } from "react";
import axios from "axios";
import api from "./api";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !cpassword) {
      setMessage("All fields are required");
      setAlertType("warning");
      return;
    }
    if (password !== cpassword) {
      setMessage("Password do not match");
      setAlertType("warning");
      return;
    }
    try {
      const response = await axios.post(`${api.API_BASE_URL}/register`, {
        email,
        password,
      });
      setMessage(response.data.message);
      setAlertType("success");
      navigate("/login");
    } catch (error) {
      setMessage(error.response.data.message);
      setAlertType("danger");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Register</h2>
              <hr></hr>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="*******"
                  />
                </div>
                <div className="form-group">
                  <label>Confrim Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={cpassword}
                    onChange={(e) => setcPassword(e.target.value)}
                    placeholder="*******"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
              {message && (
                <div className={`alert alert-${alertType}`} role="alert">
                  {message}
                </div>
              )}
            </div>
            <div className="card-footer">
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <Link to="/login" className="link">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
