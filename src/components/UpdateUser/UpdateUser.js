import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    //getting dynamic id
    const { id } = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/user/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    console.log(user)

    const handleUpdateUser=(e)=>{
        e.preventDefault()
        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
    
        const user = { userName, userEmail }; //value niye object creation(shorthand technique)
        console.log(user);
    
        //updated data to the server
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
          method: "PUT", // or 'PUT:data update ar jnno'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user), //user object k stringify korey pathano hocchey server side a
        })
          .then((response) => response.json()) //server side thekey jei response ashbey sheita json()/object a convert
          .then((data) => {
            console.log("Success:", data);
            alert('USER Updated SUCCESSFULLY')
            //form ta k reset korbey
            e.target.reset()
          })
          .catch((error) => {
            console.error("Error:", error);
          });
    }
    return (
        <div>
            <h1>Update user:{user.userName}</h1>
            <h2>Please Add a new user</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder="name" required></input>
                <br />
                <input type="email" name="email" placeholder="email" required></input>
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;