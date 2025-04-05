import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import LinkModal from './linkModal';
import { toast } from 'react-hot-toast';
import axios from 'axios';
// import CopyIcon from '../../assets/content_copy.svg';
import { ChevronDown, ChevronUp, Copy, Trash, Pencil, Eye } from "lucide-react";

// import QRCode from 'qrcode.react';

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [editingLink, setEditingLink] = useState(null);
  const [editUrl, setEditUrl] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [linkMessage, setLinkMessage] = useState(null);
  const storedUser = localStorage.getItem('token');
  const user = React.useMemo(() => (storedUser ? JSON.parse(storedUser) : null), [storedUser]);


  const handleDeleteLink = async (id) => {
    try {
      console.log("Deleting link with ID:", id); // Debugging log
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/delete-link/${id}`
      );

      if (response.data.success) {
        setLinks(links.filter(link => link._id !== id));
        toast.success(response.data.message || "Link deleted successfully");
      } else {
        toast.error(response.data.message || "Failed to delete link");
      }
    } catch (error) {
      console.error("Error deleting link:", error);
      toast.error("An error occurred while deleting the link");
    }
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

      console.log("Fetched response:", response.data.data); // Log the response data

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
    <div className="flex h-screen flex-col dark:bg-gray-900 md:flex-row">
      <aside className="md:w-1/6 pt-8 md:pt-12 md:h-screen h-48 w-full dark:bg-gray-800 text-white text-gray-900 dark:text-white">
        <Sidebar user={user} />
      </aside>
      {/* Mobile View (Card Style) */}
      <div className="sm:hidden dark:bg-gray-600 pt-3 rounded-lg dark:text-white">
        <p className='mx-5 mb-2'>Shorten Links</p>
        {links.map((link, index) => (
          <div key={index} className="dark:bg-gray-800 dark:text-white text-gray-100 p-4 shadow-lg">
            {/* Short Link Row */}
            <div className="flex items-center justify-between">
              <span className='text-white'>{link.title}</span>
              <div className="flex flex-row justify-between items-center gap-2">
                <a href={`${import.meta.env.VITE_BACKEND_URL}/${link.slug}`} className="text-blue-400 hover:underline">
                  {link.slug}
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${import.meta.env.VITE_BACKEND_URL}/${link.slug}`);
                    toast.success("Copied to clipboard");
                  }}
                >
                  <Copy className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
                </button>
              </div>
              <span className="text-gray-400 flex items-center flex-row gap-1">{link.view} <Eye className="w-3 h-3" /></span>
              <button onClick={() => setOpenDropdown(openDropdown === index ? null : index)}>
                {openDropdown === index ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>

            {/* Dropdown Content */}
            {openDropdown === index && (
              <div className="mt-2 bg-gray-700 p-3 rounded-md space-y-2">
                <div className="text-sm text-gray-300 overflow-x-auto wrap-anywhere">
                  <span className="font-semibold">Original Link: </span>{link.target}
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold">Created At: </span>
                  {new Date(link.createdAt).toLocaleDateString()}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(link)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                  >
                    Show QR
                  </button>
                  <button
                    onClick={() => handleEditLink(link.target)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                  >
                    <Pencil className="w-4 h-4 inline" /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteLink(link._id)} // Ensure correct ID is passed
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                  >
                    <Trash className="w-4 h-4 inline" /> Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View (Table Style) */}
      <main className="w-full hidden sm:block overflow-x-auto mx-auto p-4">
        {/* Dashboard Content */}

        <div className="hidden p-8 sm:block overflow-x-hidden to shadow-lg">
          <div className="flex flex-row items-center mb-5">
            <a href="/" className='text-gray-400 mx-2 hover:text-blue-400 hover:underline underline-offset-4'>Home</a> <span className='text-gray-400'>/</span>
            <a href="/dashboard" className='text-gray-400 mx-2 hover:text-blue-400 hover:underline underline-offset-4'>Dashboard</a>
          </div>
          <div className="hero-section mb-4">
            <p className="text-4xl text-gradient text-white font-bold ">Dashboard</p>
            <p className="text-lg text-gradient">Shorten your URLs and track their performance.</p>
          </div>
          <table className="w-full overflow-x-scroll dashboard rounded-md text-sm md:text-medium overflow-x-scroll dark:bg-gray-800 text-gray-100">
            <thead>
              <tr>
                <th className="py-2 px-2 md:px-4">Title</th>
                <th className="py-2 px-2 md:px-4">Original Link</th>
                <th className="py-2 px-2 md:px-4">Short Link</th>
                <th className="py-2 px-2 md:px-4">QR Code</th>
                <th className="py-2 px-2 md:px-4">Clicks</th>
                <th className="py-2 px-2 md:px-4">Date</th>
                <th className="py-2 px-2 md:px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {links.map((link, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="py-2 px-2 md:px-4">{link.title}</td>
                  <td className="py-2 px-2 md:px-4">{link.target.substring(0, 30)}..</td>
                  <td className="py-2 text-blue-400 flex flex-row justify-between hover:underline underline-offset-2 px-2 md:px-4">
                    <a href={`${import.meta.env.VITE_BACKEND_URL}/${link.slug}`}>{link.slug}</a>
                    <button onClick={() => {
                      navigator.clipboard.writeText(`${import.meta.env.VITE_BACKEND_URL}/${link.slug}`);
                      toast.success("Copied to clipboard");
                    }}>
                      <Copy className="w-5 h-5 hover:cursor-pointer" />
                    </button>
                  </td>
                  <td className="py-2 text-center px-2 md:px-4">
                    <button
                      onClick={() => openModal(link)}
                      className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                    >
                      Show
                    </button>
                  </td>
                  <td className="py-2 text-center px-2 md:px-4">{link.view}</td>
                  <td className="py-2 text-center px-2 md:px-4">{new Date(link.createdAt).toLocaleDateString()}</td>
                  <td className="py-2 text-center px-2 md:px-4">
                    <button
                      onClick={() => handleEditLink(link.target)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                    >
                      <Pencil className="w-4 h-4 inline" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteLink(link._id)} // Ensure correct ID is passed
                      className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                    >
                      <Trash className="w-4 h-4 inline" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      {selectedLink && (
        <LinkModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          link={selectedLink}
        />
      )}
    </div>
  );

};

export default Dashboard;