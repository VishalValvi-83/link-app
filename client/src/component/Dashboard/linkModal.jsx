import React, { useRef } from 'react';
import Modal from 'react-modal';
import QRCode from 'react-qr-code';
import './Style.css';

const LinkModal = ({ isOpen, onRequestClose, link }) => {
  if (!link) return null;
  const url =` ${import.meta.env.VITE_BACKEND_URL}/${link.slug}`;

  const canvasRef = useRef(null);

  const downloadQRCode = () => {
    const canvas = canvasRef.current;
    const svg = document.querySelector('svg');
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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay" appElement={document.getElementById('root')}>
      <h2 className="text-xl font-semibold mb-4">QR Code for <span className='hover:underline text-blue-500'>{link.slug}</span></h2>
      <QRCode value={url} size={100} />
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <button
        onClick={onRequestClose}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Close
      </button>
      <button
        onClick={downloadQRCode}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Download QR Code
      </button>
    </Modal>
  );
  
};

export default LinkModal;