import React from "react";

const AddUsers = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;

    const user = { userName, userEmail }; //value niye object creation(shorthand technique)
    console.log(user);

    //send data to the server
    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), //user object k stringify korey pathano hocchey server side a
    })
      .then((response) => response.json()) //server side thekey jei response ashbey sheita json()/object a convert
      .then((data) => {
        console.log("Success:", data);
        alert('USER ADDED SUCCESSFULLY')
        //form ta k reset korbey
        e.target.reset()
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h2>Please Add a new user</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" required></input>
        <br />
        <input type="email" name="email" placeholder="Email" required></input>
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUsers;
