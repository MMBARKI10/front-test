import React, { useState,useEffect } from 'react'
import "./dashbord.css"
import axios from 'axios';

function Dashbord() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
      }, []);

      const getAllUsers = () => {
        axios
          .get("http://localhost:8800/api/users")
          .then((result) => {
            console.log("getAllUsers getAllUsers", result.data);
            setUsers(result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <div className="card">
    <div className="card-header border-0">
      <h3 className="card-title">List of Users</h3>
      <div className="card-tools">
        <a href="#" className="btn btn-tool btn-sm">
          <i className="fas fa-download" />
        </a>
        <a href="#" className="btn btn-tool btn-sm">
          <i className="fas fa-bars" />
        </a>
      </div>
    </div>
    <div className="card-body table-responsive p-0" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <table className="table table-striped table-valign-middle">
        <thead>
          <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>password</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
        { users.map((user,i)=>

        <tr key={i}> 
            <td>
              {user.firstname}
            </td>
            <td>
              {user.lastname}
            </td>
            <td>
              <small className="text-success mr-1">
                <i className="fas fa-arrow-up" />
                {user.password}
              </small>
            </td>
            <td>
            <small>
              <i>{user.email}</i>
              </small>
            </td>
          </tr>
         ) } 
            
        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default Dashbord