import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import SignUp from './pages/signup/SignUp';
import Dashbord from './pages/dashbord/Dashbord';


const Layout = ()=>{
  return(
    <div className="app">
    <NavBar/>
    <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
   element:<Layout/>,
   children:[
     {
       path:"/",
       element:<Home/>
     },
     {
       path:"/signin",
       element:<Login/>
     },
     {
       path:"/signup",
       element:<SignUp/>
     },
     {
      path:"/dashbord",
      element:<Dashbord/>
     }
   ]
  }
 ])

function App() {
  return (
    <div className="App">
         <RouterProvider router={router}/>
    </div>
  );
}

export default App;
