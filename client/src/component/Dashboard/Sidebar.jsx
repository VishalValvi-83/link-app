import React from 'react';
import './Style.css';


const Sidebar = () => {
    //fetch the user photo and name from the local storage
    const storedUser = localStorage.getItem('token');
    const user = storedUser ? JSON.parse(storedUser) : null;
    console.log(user)

    const fallbackPhoto = "https://avatar.iran.liara.run/public/47"; // Default profile photo
    const fallbackName = 'Guest User'; // Default name
    const fallbackEmail = 'guest@example.com'; // Default email

    return (
        <div className="w-64 h-screen pt-12 p-4 dark:bg-gray-800 text-white">
            <img src={user?.photoURL || fallbackPhoto} alt="Profile" className="rounded-full mx-auto h-14 w-14" onError={(e) => {
                if (e.target.src !== fallbackPhoto) {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = fallbackPhoto; // Set fallback photo if the image fails to load
                }
            }} />
            <h2 className="text-lg font-bold text-center mx-auto mt-2">{user?.fullname || user?.displayName || fallbackName}</h2>
            <p className="text-sm text-center mx-auto">{user?.email || fallbackEmail} </p>
        </div>
    );
};

export default Sidebar;