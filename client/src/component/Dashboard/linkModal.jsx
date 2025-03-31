import React from 'react';
import Modal from 'react-modal';
import './Style.css';
// import QRCode from 'qrcode.react';

const LinkModal = ({ isOpen, onRequestClose, link }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
            <h2 className="text-xl font-semibold mb-4">QR Code for {link.url}</h2>
            {/* <b value={link.url} /> */}
            <button
                onClick={onRequestClose}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Close
            </button>
        </Modal>
    );
};

export default LinkModal;