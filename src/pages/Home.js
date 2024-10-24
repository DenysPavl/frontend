import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCart from "../components/ProductCart.js";
import "../card.css";

export default function Home({ token }) {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    try {
      axios.get("http://localhost:8001/api/product/all",{headers: { Authorization: "Bearer " + token }})
        .then((res) => setProducts(res.data))
        .catch((err) => alert(err));
    } catch (error) {
      console.log(error);
    }
    finally{
        setLoading(true);
    }
  }, [token]);



  if(!loading)
  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
        Loading...
    </div>
  )
  else
    return(
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
        {products.length > 0 ? (
            <ul className="cards" >
                { products.map((product)=>(<ProductCart key={product._id} product={product}/>))}
            </ul>
        )
        :(
            <p> not founds </p>
        )}
    </div>
    )
}
