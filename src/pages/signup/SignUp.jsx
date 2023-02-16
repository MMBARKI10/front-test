import React, { useState,useContext, useEffect } from 'react'
import {Link }from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import axios from 'axios';
import {
  useNavigate,
} from 'react-router-dom';
import "./signup.css"


function SignUp() {
	const [firstname, setFirstName] = useState("");
	const [lastname,  setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  	// state

	const {user , dispatch} = useContext(AuthContext);

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true)
		 const {data} = await axios.post(`/auth/signup`, { firstname,lastname,email, password });
     console.log(data)
		  toast.success("Registration successful, please Login");
		  setLoading(false);
      navigate('/signin');
		// router.push("/login")
		} catch (err) {
			toast.error(err.response.data);
			setLoading(false);
		}
	  };

  return (
    <div className="register">
    <h1>Sign Up</h1>
    <form>
      <input required type="text" onChange={(e) => setFirstName(e.target.value)}  placeholder="first Name"/>
      <input required type="text"  onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
      <input required type="email"  onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
      <input required type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
      <button className="btn btn-info" 
      onClick={handleSubmit}
      disabled={!firstname || !lastname || !email || !password || loading}
      >
      {loading ? <SyncOutlined spin />: "Sign Up"}
      </button>
      {error && <div className="error_msg">{error}</div>}
      <span>Do you have a account ? <Link to="/signin">Sign In</Link></span>
    </form>

  </div>
    // <div className="login">
    //   <div className="lContainer">
    //     <input
    //       type="text"
    //       placeholder="firstname"
    //       id="firstname"
    //     //   onChange={handleChange}
    //       className="lInput"
    //     />
    //     <input
    //       type="text"
    //       placeholder="lastname"
    //       id="lastname"
    //     //   onChange={handleChange}
    //       className="lInput"
    //     />
    //     <input
    //       type="text"
    //       placeholder="email"
    //       id="email"
    //     //   onChange={handleChange}
    //       className="lInput"
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       id="password"
    //     //   onChange={handleChange}
    //       className="lInput"
    //     />
    //     <button   className="lButton">
    //       Sign Up
    //     </button>
    //     {/* {error && <span>{error.message}</span>} */}
    //   </div>
    // </div>
  )
}

export default SignUp