// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { IoIosCloseCircleOutline } from "react-icons/io";


// const UsersList = () => {

//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         console.log("Users:",users);
//     }, [users])
    

//     useEffect(() => {
//         axios.get(process.env.NEXT_PUBLIC_SECRET_KEY+"/users")
//             .then(res => {
//                 setUsers(res.data);
//                 console.log("Result:",res);
//             })
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = (id) => {
//         axios.delete(process.env.NEXT_PUBLIC_SECRET_KEY+"/posts/${id}")
//             .then(res => {
//                 // setUsers(res.data);
//                 console.log("ID deleted:",id);
//                 setUsers(users.filter(user => user.id !== id))
//             })
//             .catch(err => console.log(err));
//     }

    
//     return (
//         <div>
//             {users.map(user => (
//             <div key={user.id} className="width-1/2 flex flex-row justify-center items-center bg-blue-100 border">
//                 <p className='p-2'>{user.name}</p>
//                 <button onClick={() => handleDelete(user.id)}>
//                     <IoIosCloseCircleOutline />
//                 </button>
//             </div>
//             ))}
//         </div>
//     );
// };

// export default UsersList;