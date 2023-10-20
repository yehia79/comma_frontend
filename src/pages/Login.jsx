import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URL = "http://127.0.0.1:8000/users/handel_login";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // send username and password to the backend and get reponse 
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <br />
                  <br />
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h3 text-gray-900 mb-4">Welcome Back!</h1>
                      <p className="h6 text-danger mb-4">{error}</p>
                    </div>
                    <br />
                    <br />
                    <form className="user" onSubmit={handleLogin}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleInputUsername"
                          placeholder="Enter your Username..."
                          onChange={(e) => setUsername(e.target.value.trim())}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value.trim())}
                        />
                      </div>
                      <br />
                      <br />
                      <br />
                      <button className="btn btn-primary btn-user btn-block">
                        Login
                      </button>
                    </form>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}