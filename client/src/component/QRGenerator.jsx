import React, { useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import { toast } from 'react-hot-toast';
import { DownloadIcon } from 'lucide-react';

function QRGenerator() {
  const [url, setUrl] = useState('');
  const [showQR, setShowQR] = useState(false);
  const qrRef = useRef();

  const handleGenerate = () => {
    if (!url) {
      toast.error('Enter a URL to generate QR code');
      return;
    }
    if (!/^https:\/\//i.test(url)) {
      toast.error('URL must start with HTTPS');
      setShowQR(false);
      return;
    } else {
      setShowQR(true);
      toast.success('QR code generated!');
    }
  };

  const handleDownload = () => {
    const svg = qrRef.current.querySelector('svg');
    const serializer = new XMLSerializer();
    const svgData = serializer.serializeToString(svg);
    const canvas = document.createElement('canvas');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const pngUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = 'qr-code.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
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
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Generate QR
      </button>
      {showQR && (
        <div className="mt-4 text-center" ref={qrRef}>
          <QRCode value={url} className='mx-auto' size={150} />
          <button
            onClick={handleDownload}
            className="mt-3 bg-indigo-600  text-white text-center px-2 py-1 rounded hover:bg-indigo-700"
          >
            <DownloadIcon className="w-4 h-4 inline-block mr-1" />Download QR </button>
        </div>
      )}
    </>
  );
}

export default QRGenerator;
