import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import LinkModal from './linkModal';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { ChevronDown, ChevronUp, Copy, Trash, Pencil, Eye, EyeIcon } from "lucide-react";
import Navbarnew from '../Navb';


const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const storedUser = localStorage.getItem('token');
  const user = React.useMemo(() => (storedUser ? JSON.parse(storedUser) : null), [storedUser]);

  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [updateLinkDetails, setUpdateLinkDetails] = useState({ id: "", title: "", target: "" });

  const openUpdateModal = (link) => {
    setUpdateLinkDetails({ id: link._id, title: link.title, target: link.target, slug: link.slug });
    setUpdateModalIsOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalIsOpen(false);
    setUpdateLinkDetails({ id: "", title: "", target: "", slug: "" });
  };

  const handleUpdateLink = async () => {
    try {
      const { id, title, target, slug } = updateLinkDetails;
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/update-link/${id}`,
        { title, target, slug }
      );

      if (response.data.success) {
        setLinks(links.map(link => (link._id === id ? { ...link, title, target, slug } : link)));
        toast.success(response.data.message || "Link updated successfully");
        closeUpdateModal();
      } else {
        toast.error(response.data.message || "Failed to update link");
      }
    } catch (error) {
      toast.error("An error occurred while updating the link");
    }
  };

  const handleDeleteLink = async (id) => {
    try {
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
      toast.error("An error occurred while deleting the link");
    }
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


      if (response.data.success) {
        setLinks(response.data.data);
        console.log(response.data.data)

        toast.success(response.data.message)
      } else {
        toast.error(response.data.message || "Failed to fetch links");
      }
    } catch (error) {
      toast.error("An error occurred while fetching links");
    }
  }
  useEffect(() => {
    if (user && user._id) {
      LoadLinks();
    }
  }, [user]);

  const exportToCSV = () => {
    const csvRows = [
      ["Title", "Original Link", "Short Link", "Clicks", "Created At"],
      ...links.map(link => [
        link.title,
        link.target,
        `${import.meta.env.VITE_BACKEND_URL}/${link.slug}`,
        link.view,
        new Date(link.createdAt).toLocaleDateString()
      ])
    ];
    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "shortened_links.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const printTable = () => {
    const printContent = document.getElementById("links-table").outerHTML;
    const win = window.open("", "", "width=900,height=700");
    win.document.write(`
    <html>
      <head>
        <title>Print Links</title>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `);
    win.document.close();
    win.print();
  };

  return (
    <>
      <Navbarnew />
      <div className="flex h-screen flex-col dark:bg-gray-900 md:flex-row">
        <aside className="md:w-1/6 pt-14 md:pt-16 md:h-screen h-48 w-full dark:bg-gray-800 text-gray-900 dark:text-white">
          <Sidebar user={user} />
        </aside>
        {/* Mobile View (Card Style) */}
        <div className="sm:hidden dark:bg-gray-600 p-3 rounded-lg text-black dark:text-white">
          <div className="flex flex-row items-center mb-2 justify-between">
            <p className='mx-5 text-lg font-semibold dark:text-white text-gray-900 mb-2'>Shorten Links</p>
            <button
              onClick={() => window.location.href = '/create-link'}
              className="bg-indigo-700 text-white px-2 py-1 rounded hover:bg-indigo-800"
            > Create New Link
            </button>
          </div>
          <div className="flex gap-2 mb-4 justify-end">
            <button
              onClick={exportToCSV}
              className="bg-green-600 text-white px-2 rounded hover:bg-green-700 text-md"
            >Export
            </button>
            <button
              onClick={printTable}
              className="bg-blue-600 text-white px-2 rounded hover:bg-blue-700 text-md"
            >Print
            </button>
          </div>
          {links.map((link, index) => (
            <div key={index} className="dark:bg-gray-800 dark:text-white text-gray-100 p-2 sm:p-4 shadow-lg">
              {/* Short Link Row */}
              <div className="flex items-center bg-gray-700 p-1 rounded flex-wrap justify-between">
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
                      onClick={() => openUpdateModal(link)}
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
        <main className="w-full hidden md:pt-12 sm:block overflow-x-auto mx-auto p-4">
          {/* Dashboard Content */}

          <div className="hidden p-8 sm:block overflow-x-hidden to shadow-lg">
            <div className="flex flex-row items-center mb-5">
              <a href="/" className='text-gray-400 mx-2 hover:text-blue-400 hover:underline underline-offset-4'>Home</a> <span className='text-gray-400'>/</span>
              <a href="/dashboard" className='text-gray-400 mx-2 hover:text-blue-400 hover:underline underline-offset-4'>Dashboard</a>
            </div>
            <div className="hero-section mb-4">
              <p className="text-4xl text-gradient text-white font-bold ">Dashboard</p>
              <p className="text-lg font-light text-gradient">Shorten your URLs and track their performance.</p>
            </div>
            <div className="flex flex-col mb-4 ">
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-200">Shortened Links</h2>
                <button
                  onClick={() => window.location.href = '/create-link'}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Create New Link
                </button>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-2 mb-4">
              <button
                onClick={exportToCSV}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Export to Excel
              </button>
              <button
                onClick={printTable}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Print Table
              </button>
            </div>
            <table id="links-table" className="w-full dashboard rounded-md text-sm md:text-medium overflow-x-scroll dark:bg-gray-800 text-gray-100">
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
                    <td className="py-2 px-2 text-center font-bold md:px-4">{link.title}</td>
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
                    <td className="py-2 text-center px-2 md:px-4"><Eye className='w-4 inline-flex mb-1 h-4' /> {link.view}</td>
                    <td className="py-2 text-center px-2 md:px-4">{new Date(link.createdAt).toLocaleDateString()}</td>
                    <td className="py-2 text-center px-2 md:px-4">
                      <button
                        onClick={() => openUpdateModal(link)}
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
        {/* Update Link Modal */}
        {updateModalIsOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">Update Link</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={updateLinkDetails.title}
                  onChange={(e) => setUpdateLinkDetails({ ...updateLinkDetails, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Slug</label>
                <input
                  type="text"
                  value={updateLinkDetails.slug}
                  onChange={(e) => setUpdateLinkDetails({ ...updateLinkDetails, slug: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Target URL</label>
                <input
                  type="text"
                  value={updateLinkDetails.target}
                  onChange={(e) => setUpdateLinkDetails({ ...updateLinkDetails, target: e.target.value })}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={closeUpdateModal}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateLink}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>

  );

};

export default Dashboard;