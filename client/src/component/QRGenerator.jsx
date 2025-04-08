// QRGenerator.js
import React, { useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import { toast } from 'react-hot-toast';

function QRGenerator() {
  const [url, setUrl] = useState('');
  const [showQR, setShowQR] = useState(false);
  const qrRef = useRef();

  const handleGenerate = () => {
    if (!url) {
      toast.error('Enter a URL to generate QR code');
      return;
    }
    setShowQR(true);
    toast.success('QR code generated!');
  };

  const handleDownload = () => {
    const svg = qrRef.current.querySelector('svg');
    const serializer = new XMLSerializer();
    const svgData = serializer.serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/png' });
    const urlBlob = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = urlBlob;
    link.download = 'qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        className="w-full mb-3 px-3 py-2 border rounded"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate QR
      </button>
      {showQR && (
        <div className="mt-4 text-center" ref={qrRef}>
          <QRCode value={url} size={150} />
          <button
            onClick={handleDownload}
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Download QR
          </button>
        </div>
      )}
    </>
  );
}

export default QRGenerator;
