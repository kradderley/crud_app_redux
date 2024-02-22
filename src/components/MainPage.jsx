import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const MainPage = () => {
  const users = useSelector((state) => state.users.users);
  console.log(users);

  return (
    <>
      <h2>New Members</h2>
      <button>Add User + </button>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Telephone Number</th>
              <th scope="col">Identifier Code</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>{user.uniqueCode}</td>
                  <td><button>Update</button></td>
                  <td><button>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainPage;
