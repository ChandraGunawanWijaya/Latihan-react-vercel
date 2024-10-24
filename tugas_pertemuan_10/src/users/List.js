import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        const { data } = response.data;
        setUsers(data);
      })
      .catch((error) => {
        alert("Error fetching users: ", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-4">
        <h2 className="text-center">User List</h2>
        <NavLink to="/users/create" className="btn btn-success">
          Create User
        </NavLink>
      </div>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card h-100">
              <img
                src={user.avatar}
                className="card-img-top"
                alt={`${user.first_name} ${user.last_name}`}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {user.first_name} {user.last_name}
                </h5>
                <p className="card-text">{user.email}</p>
                <div className="d-flex justify-content-between">
                  <NavLink
                    to={`/users/show/${user.id}`}
                    className="btn btn-primary"
                  >
                    View
                  </NavLink>
                  <NavLink
                    to={`/users/update/${user.id}`}
                    className="btn btn-warning"
                  >
                    Update
                  </NavLink>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id, user.first_name)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const handleDelete = async (id, first_name) => {
  console.log(id);
  if (window.confirm(`Are you sure you want to delete ${first_name}?`)) {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      });
    } catch (error) {
      alert("Error deleting user: ", error);
    }
  }
};

export default List;
