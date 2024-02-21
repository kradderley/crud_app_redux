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
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>

      <div>
      {users.map((user) => {
              <div>
                <p>{user.id}</p>
                <p>{user.email}</p>
              
              </div>;
            })}
      </div>
    </>
  );
};

export default MainPage;
