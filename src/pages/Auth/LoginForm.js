import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

export default function LoginForm({setToken}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handlSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:8001/api//auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({email , password}),
    })
      .then((res) => res.json())
      .then(
        (result) => {
            if(result.message === 'Successful login ;)'){
                localStorage.setItem('token', result.token);
                setToken(result.token)
                localStorage.setItem('user_id', result.data._id);
                navigate("/");
            }
            else alert(result.message)
        },
        (error) => {
          alert(error.message);
        }
      );
  }

  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handlSubmit}>
            <h2>Login</h2>
            <div className="mb-2">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
              <label>Password</label>
              <input type ="password" className="form-control" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}