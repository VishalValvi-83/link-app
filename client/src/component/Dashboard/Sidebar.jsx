import React from 'react';
import './Style.css';


const Sidebar = () => {
    //fetch the user photo and name from the local storage
    const storedUser = localStorage.getItem('User');
    const user = storedUser ? JSON.parse(storedUser) : null;
    console.log(user)

    return (
        <div className="w-64 h-screen pt-12 p-4 dark:bg-gray-800 text-white">
            <img src={user.photoURL} alt="Profile" className="rounded-full mx-auto h-14 w-14" />
            <h2 className="text-lg font-bold text-center mx-auto mt-2">{user.displayName}</h2>
            <p className="text-sm text-center mx-auto">{user.email}</p>
        </div>
    );
};

export default Sidebar;