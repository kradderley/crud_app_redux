import React from "react";

const Create = () => {
  return (
    <>
      <h1>Register Here!</h1>
      <div>
        <form>
          <div>
            <label>Name: </label>
            <input type="text" placeholder="Name"></input>
          </div>
          <div>
            <label>Email: </label>
            <input type="text" placeholder="Email"></input>
          </div>
          <div>
            <label>Phone Number: </label>
            <input type="text" placeholder="Phone Number"></input>
          </div>
        </form>
      </div>
      <div>
        <br />
        <button>Add Member +</button>
      </div>
    </>
  );
};

export default Create;
