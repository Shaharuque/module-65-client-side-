import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([])
    //data load from created api
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users)

    const handleUserDelete = (id) => {
        const procced = window.confirm('Are you sure you want to delete?')
        if (procced) {
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: "DELETE", // or 'PUT'
            })
            .then(res=>res.json())
            .then(data=>{
                //UI tey delete click korley sathey UI thekey o data remove hobey and database thekey to remove hobei
                if(data.deletedCount>0){
                    const remainingUsersAfterDelete=users.filter(user=>user._id!==id)
                    setUsers(remainingUsersAfterDelete)
                }
            })
        }
    }
    return (
        <div>
            <p>Total Users:{users.length}</p>
            <ul>
                {
                    users.map(user => <li key={user._id}>{user.userName} and Email:{user.userEmail}
                        <Link to={`/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;