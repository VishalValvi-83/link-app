import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Link as LinkIcon, QrCode } from 'lucide-react';
import QRGenerator from './QRGenerator';
import Createlink from './createlink';
const CreateLinkButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Toaster />
      {/* Fixed Create Now Button */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-50">
        {showOptions && (
          <div className="flex flex-col gap-2 mb-2">
            <button
              onClick={() => {
                window.location.href = '/create-link';
                
              }}
              className="bg-white animate__animated animate__fadeInLeft shadow px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100"
            >
              <LinkIcon size={18} />
              Link
            </button>
            <button
              onClick={() => setShowQRModal(true)}
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
    </div>
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