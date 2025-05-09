import React, { useRef } from 'react';
import Modal from 'react-modal';
import QRCode from 'react-qr-code';
import './Style.css';

const LinkModal = ({ isOpen, onRequestClose, link }) => {
    if (!link) return null;
    const url = `${import.meta.env.VITE_BACKEND_URL}/${link.slug}`;

    const canvasRef = useRef(null);
    const qrCodeRef = useRef(null);

    const downloadQRCode = () => {
        const canvas = canvasRef.current;
        const svg = qrCodeRef.current.querySelector('svg');
        const svgData = new XMLSerializer().serializeToString(svg);
        const img = new Image();
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        img.onload = () => {
            const canvasContext = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            canvasContext.drawImage(img, 0, 0);
            URL.revokeObjectURL(url);

            const pngUrl = canvas.toDataURL('image/png');
            const linkElement = document.createElement('a');
            linkElement.href = pngUrl;
            linkElement.download = `${link?.slug || 'qrcode'}-QRCode.png`;
            linkElement.click();
        };

        img.src = url;
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal p-0" overlayClassName="overlay" appElement={document.getElementById('root')}>
            <h2 className="text-md font-semibold mb-3">QR Code for <span className='hover:underline text-blue-500'>{link.slug}</span></h2>
            <div ref={qrCodeRef}> 
                <QRCode value={url} size={200} />
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            <nav className="flex flex-row gap-4 items-center justify-between mt-4">
                <button
                    onClick={onRequestClose}
                    className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Close
                </button>
                <button
                    onClick={downloadQRCode}
                    className="mt-4 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className='dark:fill-blue-600' fill="#e8eaed"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                    </svg>
                </button>
            </nav>
        </Modal>
    );
};

export default LinkModal;