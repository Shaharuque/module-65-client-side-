import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users,setUsers]=useState([])
    //data load from created api
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    console.log(users)

    const handleUserDelete=(id)=>{
        const procced=window.confirm('Are you sure you want to delete?')
        if(procced){
            
        }
    }
    return (
        <div>
            <p>Total Users:{users.length}</p>
            <ul>
                {
                    users.map(user=><li key={user._id}>{user.userName} and Email:{user.userEmail}
                        <button onClick={()=>handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;