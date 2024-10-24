import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({token}){
    const navigate = useNavigate();
    const [user,setUser]= useState();

    useEffect(() =>{
        axios.get(`http://localhost:8001/api/profile`,{ headers:{ 'Authorization': 'Bearer ' + token }})
        .then((res)=> {
            if(res.data)
                setUser(res.data)
        })
        .catch((err) => {
            alert(err.response.data);
            localStorage.removeItem('token');
            navigate('/');
          });
    },[token])


    return(
        <div className="d-flex mt-5 vh-100 bg-light justify-content-center ">
            {user ?(
                <div className="w-50 bg-white p-5">
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <ul>Roles:
                    {user.roles.map((role,index) => (
                        <li key={index}>{role}</li>
                    ))}
                    </ul>
                </div>
            ): (
                <p>undefind</p>
            )}
        </div>
    )
}