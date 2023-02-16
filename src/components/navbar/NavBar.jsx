import "./navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  useNavigate,
} from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const NavBar = () => {


const { user, dispatch } = useContext(AuthContext);

const navigate = useNavigate();

const logout = async () => {
  dispatch({ type: "LOGOUT" });
  window.localStorage.removeItem("user");
  const { data } = await axios.get("/auth/logout");
  console.log(data)
  toast(data.message);
  navigate("/signin");
};

  return (
    <>
    {user ? (
   <>
  
   <span> LOGO</span>    
    <button onClick={logout}>LOG OUT</button>
 
              
     </>
    ):
     (<div className="navbar">
       <div className="navContainer"> 
          <Link to="/"> <span className="logo">LOGO</span></Link> 
           <div className="navItems">
             <Link to="/signup"><button className="navButton">Sign up</button></Link>
             <Link to="/signin"><button className="navButton">Sign In</button></Link>
           </div>        
       </div>
     </div>)}
     </>
   
  );
  };


export default NavBar