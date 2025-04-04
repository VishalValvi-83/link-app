import React from 'react';
import { LogOut, } from 'lucide-react'; // Import icons
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    // Fetch user details
    const storedUser = localStorage.getItem('token');
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
        <div className="w-64 min-h-full flex flex-col justify-between items-center text-white p-4">
            {/* Profile Section */}
            <div className='text-center'>
                <img
                    src={user?.photoURL || fallbackPhoto}
                    alt="Profile"
                    className="rounded-full h-20 w-20 mx-auto border-2 border-gray-600"
                    onError={(e) => { e.target.src = fallbackPhoto; }}
                />
                <h2 className="text-lg font-bold mt-2">{user?.fullname || fallbackName}</h2>
                <p className="text-sm text-gray-400">{user?.email || fallbackEmail}</p>
            </div>

            {/* Logout Button */}
            <button onClick={handleLogout} className="mt-auto bg-red-600 px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2">
                <LogOut className="w-5 h-5" />Logout
            </button>
        </div>
    );
};

export default Sidebar;
