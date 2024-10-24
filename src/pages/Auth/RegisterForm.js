import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterForm({setToken}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handlSubmit(event) {
    event.preventDefault();

    /*fetch("http://localhost:8001/api/auth/registration", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({username, email , password}),
          })
          .then((response) => {
            console.log(response);
            //if (response.ok) {
              return response.json();
            //} else {
             // alert(response.result.message);
             // throw new Error(response.statusText);
            //}
          })
          .then((result) => {
            if(result.message==='Successful registration ;)'){
                localStorage.setItem('token', result.token);
                localStorage.setItem('user_id', result.data._id);
                navigate("/");
            }
            else alert(result.message)
          })
          .catch((error) => {
            alert(error.message);
          });*/

    axios.post("http://localhost:8001/api/auth/registration", {
        username,
        email,
        password,
      })
      .then((res) => {
        if (res.status !== 201) {
          throw new Error(res.data.message);
        } else {
          localStorage.setItem("token", res.data.token);
          setToken(res.data.token);
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.data.message);
      });
  }

  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handlSubmit}>
            <h2>Registration Form</h2>
            <div className="mb-2">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
