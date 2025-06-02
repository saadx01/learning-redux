import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Navbar } from '@/layout/Navbar';


const UsersList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log("Users:", users);
    }, [users])


    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_SECRET_KEY + "/users")
            .then(res => {
                setUsers(res.data);
                console.log("Result:", res);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(process.env.NEXT_PUBLIC_SECRET_KEY + "/posts/${id}")
            .then(res => {
                // setUsers(res.data);
                console.log("ID deleted:", id);
                setUsers(users.filter(user => user.id !== id))
            })
            .catch(err => console.log(err));
    }


    return (
        <div className='bg-gray-100 min-h-screen pt-15 p-3 w-full flex flex-col justify-center items-center gap-2'>
            <Navbar />
            {users.map(user => (
                <div key={user.id} className="w-1/2 flex flex-row justify-between items-center bg-blue-100 border p-4">
                    <p>{user.name}</p>
                    <button className='text-xl text-red-500' onClick={() => handleDelete(user.id)}>
                        <IoIosCloseCircleOutline />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default UsersList;