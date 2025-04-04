import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import LinkModal from './linkModal';
import { toast } from 'react-hot-toast';
import axios from 'axios';
// import QRCode from 'qrcode.react';

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [editingLink, setEditingLink] = useState(null);
  const [editUrl, setEditUrl] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [linkMessage, setLinkMessage] = useState(null);
  const storedUser = localStorage.getItem('token');
  const user = React.useMemo(() => (storedUser ? JSON.parse(storedUser) : null), [storedUser]);
  const handleAddLink = (url, title) => {
    const newLink = {
      title,
      originalUrl: url,
      shortenedUrl: `short.ly/${Math.random().toString(36).substr(2, 5)}`, // Simulated shortened URL
      viewCount: 0,
      status: Math.random() > 0.5 ? "Active" : "Inactive",
      createdAt: new Date().toISOString(),
    };
    setLinks([...links, newLink]);
  };

  const handleDeleteLink = (originalUrl) => {
    setLinks(links.filter(link => link.originalUrl !== originalUrl));
  };

  const handleEditLink = (originalUrl) => {
    const linkToEdit = links.find(link => link.originalUrl === originalUrl);
    setEditingLink(originalUrl);
    setEditUrl(linkToEdit.originalUrl);
    setEditTitle(linkToEdit.title);
  };

  const handleUpdateLink = () => {
    setLinks(links.map(link =>
      (link.originalUrl === editingLink) ? { ...link, originalUrl: editUrl, title: editTitle } : link
    ));
    setEditingLink(null);
    setEditUrl('');
    setEditTitle('');
  };

  const openModal = (link) => {
    setSelectedLink(link);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedLink(null);
  };

  const LoadLinks = async () => {
    if (!user._id) {
      console.error("User ID not found");
      return
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/get-short-link?userId=${user._id}`
      );

      console.log("Fetched response:", response.data); // Log the response data

      if (response.data.success) {
        setLinks(response.data.data);
        toast.success(response.data.message) // Set the links if the response is successful
      } else {
        console.error("Error in response:", response.data.message);
        toast.error(response.data.message || "Failed to fetch links");
      }
    } catch (error) {
      console.error("Error fetching links:", error);
      toast.error("An error occurred while fetching links");
    }
  }


  useEffect(() => {
    if (user && user._id) {
      LoadLinks();
    }
  }, [user]);

  return (
    <div className='flex wrap flex-row'>
      <aside className="md:w-1/6 h-screen w-full bg-gray-800 text-white">
        <Sidebar user={user} />
      </aside>

      <div className="flex pt-12 px-5 flex-col flex-grow text-white dark:bg-gray-900">
        <div className="hero-section">
          <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
          <p className="text-lg">Shorten your URLs and track their performance.</p>
        </div>

        <div className="flex-grow p-4 bg-gray-900 text-gray-100">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter URL"
              onKeyDown={(e) => e.key === 'Enter' && handleAddLink(e.target.value, "Set Title Here")} // Basic title; replace as needed
              className="border border-gray-700 p-2 rounded w-full bg-gray-800 text-gray-100"
            />
            <input
              type="text"
              placeholder="Enter Title"
              onKeyDown={(e) => e.key === 'Enter' && handleAddLink(e.target.value, e.target.value)}
              className="border border-gray-700 p-2 rounded w-full bg-gray-800 text-gray-100 mt-2"
            />
          </div>

          <div className="overflow-x-auto overflow-y-scroll rounded-lg shadow-lg">
            <table className="min-w-full bg-gray-800 text-gray-100">
              <thead>
                <tr>
                  <th className="py-2 px-4">Short Link</th>
                  <th className="py-2 px-4">Original Link</th>
                  <th className="py-2 px-4">Title</th>
                  <th className="py-2 px-4">QR Code</th>
                  <th className="py-2 px-4">Clicks</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link, index) => (
                  <tr key={index} className="border-t border-gray-700">
                    <td className="py-2 px-4">{link.shortenedUrl}</td>
                    <td className="py-2 px-4">{link.originalUrl}</td>
                    <td className="py-2 px-4">{link.title}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => openModal(link)}
                        className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                      >
                        Show QR Code
                      </button>
                    </td>
                    <td className="py-2 px-4">{link.viewCount}</td>
                    <td className="py-2 px-4">
                      <span className={`font-bold ${link.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                        {link.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{new Date(link.createdAt).toLocaleDateString()}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleEditLink(link.originalUrl)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteLink(link.originalUrl)}
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {editingLink && (
            <div className="mt-4 flex">
              <input
                type="text"
                value={editUrl}
                onChange={(e) => setEditUrl(e.target.value)}
                className="border border-gray-700 p-2 rounded w-full bg-gray-800 text-gray-100"
                placeholder="Edit URL"
              />
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border border-gray-700 p-2 rounded w-full bg-gray-800 text-gray-100 ml-2"
                placeholder="Edit Title"
              />
              <button
                onClick={handleUpdateLink}
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          )}
          {selectedLink && (
            <LinkModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              link={selectedLink}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;