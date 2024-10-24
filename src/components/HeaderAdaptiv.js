import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ReactComponent as White_Icon} from './icon.svg'
import {ReactComponent as Black_Icon} from './black_icon.svg'

import "../headerA.css"

export default function HeaderA({setToken}){
  const navigate = useNavigate();
  const storedToken = localStorage.getItem('token');
  const [userMenuOpen, setuserMenuOpen] = useState(false);

    useEffect(() => {
        setToken(localStorage.getItem('token'));
      }, [setToken]);
    
      const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/');
      };

    return(
        <header className="headerA">
            <span className="headerA_logo">logo</span>
                <nav className={`headerA_nav ${userMenuOpen ? "active" : ""}`}>
                <ul className="headerA_nav-list">
                {storedToken ? (
                <>
                    <li className="headerA_nav-item"><Link to={`/`}>Main</Link></li>
                    <li className="headerA_nav-item"><Link to={`/profile`}>Profile</Link></li>
                    <li className="headerA_nav-item"><Link to={`/product/create`}>AddProduct</Link></li>
                    <li className="headerA_nav-item"><Link to={`/categories`}>Categories</Link></li>
                    <li className="headerA_nav-item">P2</li>
                    <li className="headerA_nav-item">P3</li>
                    <li className="headerA_nav-item">P4</li>
                    <li className="headerA_nav-item" onClick={handleLogout}>logout</li>
                </>
                ):(
                <>
                    <li className="headerA_nav-item"><Link to={`/`}>Main</Link></li>
                    <li className="headerA_nav-item" onClick={()=> setuserMenuOpen(!userMenuOpen)}><Link to={`/login`}>login</Link></li>
                    <li className="headerA_nav-item" onClick={()=> setuserMenuOpen(!userMenuOpen)}><Link to={`/registration`}>register</Link></li>
                </>            
                )}
                </ul>
            </nav>
            {userMenuOpen ? (
            <button className="headerA_menu-button" onClick={()=> setuserMenuOpen(!userMenuOpen)}> <Black_Icon /> </button>
          ): (
            <button className="headerA_menu-button" onClick={()=> setuserMenuOpen(!userMenuOpen)}> <White_Icon /> </button>
          )
            }   
        </header>
    )
}