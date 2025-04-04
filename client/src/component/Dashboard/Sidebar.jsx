import React from 'react';
import './Style.css';


const Sidebar = () => {
    //fetch the user photo and name from the local storage
    const storedUser = localStorage.getItem('token');
    const user = storedUser ? JSON.parse(storedUser) : null;

    const fallbackPhoto = "https://avatar.iran.liara.run/public/47"; // Default profile photo
    const fallbackName = 'Guest User'; // Default name
    const fallbackEmail = 'guest@example.com'; // Default email

    return (
        <div className="w-64 p-4 flex flex-row items-center md:flex-col dark:bg-gray-800 text-white">
            <img src={user?.photoURL || fallbackPhoto} alt="Profile" className="rounded-full mx-auto h-20 w-20 md:h-14 md:w-14" onError={(e) => {
                if (e.target.src !== fallbackPhoto) {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = fallbackPhoto; // Set fallback photo if the image fails to load
                }
            }} />
            <div className='mx-4 md:mx-0'>
                <h2 className="text-lg font-bold md:text-center mx-auto mt-2">{user?.fullname || user?.displayName || fallbackName}</h2>
                <p className="text-sm text-gray-300 text-center mx-auto">{user?.email || fallbackEmail} </p>
            </div>
        </div>
    );
};

export default Sidebar;