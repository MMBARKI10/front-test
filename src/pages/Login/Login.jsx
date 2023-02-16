
import "./login.css"
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  const {  error, dispatch } = useContext(AuthContext);

   const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/signin", credentials);
      console.log(res)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/dashbord")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };



  return (
    <>
     
    <div className="login">
    <h1>Sign In</h1>
      <div className="lContainer">
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button  onClick={handleClick}  className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
    </>
  );
};

export default Login