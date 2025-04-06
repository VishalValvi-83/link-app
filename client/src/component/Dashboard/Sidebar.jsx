import React from 'react';
import { LogOut, } from 'lucide-react'; // Import icons
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    // Fetch user details
    const storedUser = localStorage.getItem('token') || localStorage.getItem('User');
    const user = storedUser ? JSON.parse(storedUser) : null;

    // Default values
    const fallbackPhoto = "https://avatar.iran.liara.run/public/47";
    const fallbackName = 'Guest User';
    const fallbackEmail = 'guest@example.com';

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/user-login'); // Redirect to login page
    };

    return (
        <div className="w-full min-h-full flex sm:flex-col justify-between sm:justify-start no-wrap flex-col-reverse items-center text-white p-4 relative">
            {/* Profile Section */}
            <div className='sm:text-center flex items-center sm:flex-col gap-2 flex-row'>
                <img
                    src={user?.photoURL || fallbackPhoto}
                    alt="Profile"
                    className="rounded-full h-14 w-14 sm:h-20 sm:w-20 mx-auto border-2 border-gray-600"
                    onError={(e) => { e.target.src = fallbackPhoto; }}
                />
                <div>
                    <h2 className="text-lg font-bold mt-2">{user?.fullname || user?.displayName || fallbackName}</h2>
                    <p className="text-sm text-gray-400">{user?.email || fallbackEmail}</p>
                </div>
            </div>

            {/* Logout Button */}
            <button 
                onClick={handleLogout} 
                className="sm:mt-4 sm:relative sm:top-0 sm:right-0 absolute top-4 right-4 bg-red-600 sm:px-4 sm:py-2 px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2"
            >
                <LogOut className="w-5 h-5" />Logout
            </button>
        </div>
    );
};

export default Sidebar;
