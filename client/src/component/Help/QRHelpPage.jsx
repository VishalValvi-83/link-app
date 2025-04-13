import React from "react";
import Footer from "../Footer";
import { QrCodeIcon } from "lucide-react";

const QRHelpPage = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-12 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
            How QR Code Generation Works
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Our URL shortener lets you instantly generate a QR code for any link you shorten. This is useful for print, offline sharing, or quick access via mobile scanning.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">🔗 Step 1: Create a Short URL</h2>
            <p className="text-gray-700 dark:text-gray-400">
              Go to the <a href="/create-link" className="bg-gray-100 text-sky-500 dark:bg-gray-800 px-2 py-1 rounded">create link</a> page, paste your long URL, and enter a custom short name.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">⚙️ Step 2: QR Code is Auto-Generated</h2>
            <p className="text-gray-700 dark:text-gray-400">
              Once your short URL is created, our system automatically generates a QR code image for it. This QR code points to your short URL.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">📥 Step 3: Download or Share</h2>
            <p className="text-gray-700 dark:text-gray-400">
              You can preview the QR code on your dashboard and download it as an image file to share on flyers, posters, websites, and more.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">❓ Frequently Asked Questions</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2">
              <li><strong>Is the QR code permanent?</strong> Yes, it always points to your short URL unless deleted.</li>
              <li><strong>Can I customize the QR code?</strong> Customization isn't supported yet, but it’s coming soon!</li>
              <li><strong>Is scanning tracked?</strong> Yes, each scan counts as a visit in your link analytics.</li>
            </ul>
          </div>

          <div className="mt-10 inline-block">
            <a href="/create-link" className="inline-block px-6 py-3 border border-blue-800 transition ease-out text-white font-semibold rounded hover:bg-indigo-700  hover:bg-primary-800">
              Create a QR Code Now
              <QrCodeIcon className="inline-block ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default QRHelpPage;
