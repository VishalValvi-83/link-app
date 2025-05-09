import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link as LinkIcon, Loader, QrCode } from 'lucide-react';
import QRGenerator from './QRGenerator';
import ErrorImage from './../assets/error404.svg'


const CreateLinkButton = () => {

  const [showOptions, setShowOptions] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [userloginModal, setUserLoginModal] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({ position: "fixed", bottom: "16px" });


  const CreateLinkRedirect = () => {
    const user = localStorage.getItem('User') || localStorage.getItem('token');
    if (user) {
      setUserLoginModal(false);

      window.location.href = '/create-link';
    }
    if (!user) {
      setUserLoginModal(true);
      toast.error('Please login to create a link!');
    }
  }


  useEffect(() => {
    const adjustButtonPosition = () => {
      const footer = document.getElementById("footer");
      const createBtn = document.getElementById("createBtn");

      if (!footer || !createBtn) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top < windowHeight) {
        setButtonStyle({
          position: "fixed",
          bottom: `${windowHeight - footerRect.top}px`,
        });
      } else {
        setButtonStyle({
          position: "fixed",
          bottom: "16px",
        });
      }
    };

    window.addEventListener("scroll", adjustButtonPosition);
    window.addEventListener("resize", adjustButtonPosition);

    adjustButtonPosition();

    return () => {
      window.removeEventListener("scroll", adjustButtonPosition);
      window.removeEventListener("resize", adjustButtonPosition);
    };
  }, []);


  const checkUser = () => {
    const user = localStorage.getItem('User') || localStorage.getItem('token');
    if (user) {
      setShowQRModal(true);
    }
    if (!user) {
      setShowQRModal(false);
      setUserLoginModal(true);
      toast.error('Please login to create a link!');
    }
  }

  return (
    <>
      <Toaster />
      {/* Fixed Create Now Button */}
      <div id='createBtn' style={buttonStyle} className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-50">
        {showOptions && (
          <div className="flex flex-col gap-2 mb-2">
            <button
              onClick={CreateLinkRedirect}
              className="bg-white animate__animated animate__fadeInLeft shadow px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100"
            >
              <LinkIcon size={18} />
              Link
            </button>
            {userloginModal && (
              <Modal title="" onClose={() => setUserLoginModal(false)}>
                <div className="flex flex-col items-center justify-center h-full">
                  <img src={ErrorImage} alt="Error" className="w-32 h-32 mb-4" />
                  <h2 className="text-lg font-semibold">User not Found</h2>
                  <p className="text-gray-700 mt-4">Please login to access this feature</p>
                  <button
                    onClick={() => {
                      setUserLoginModal(false);
                      window.location.href = '/user-login';
                    }}
                    onClose={() => setUserLoginModal(false)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >Login</button>
                </div>
              </Modal>
            )}
            <button
              onClick={checkUser}
              className="bg-white animate__animated animate__fadeInRight shadow px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100"
            >
              <QrCode size={18} />
              QR Code
            </button>
          </div>
        )}
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="bg-blue-600 animate__animated animate__fadeInUp text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          Create Now
        </button>
      </div>
      {/* QR Code Modal */}
      {showQRModal && (
        <Modal title="Generate QR Code" onClose={() => setShowQRModal(false)}>
          <QRGenerator onClose={() => setShowQRModal(false)} />
        </Modal>
      )}
    </>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {children}
        <div className="text-right mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateLinkButton