import React from "react";
import Footer from "../Footer";
import { QrCodeIcon } from "lucide-react";
import Navbarnew from "../Navb";

const QRHelpPage = () => {
  return (
    <>
    <Navbarnew/>
      <section className="bg-white dark:bg-gray-900 sm:py-10 pt-12 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-4xl text-center mt-10 font-extrabold mb-6 text-gray-900 dark:text-gray-200">
            How QR Code Generation Works
          </h1>

          <p className="text-lg leading-relaxe text-gray-700 text-justify dark:text-gray-300 mb-6">
            Our URL shortener lets you instantly generate a QR code for any link you shorten. This is useful for print, offline sharing, or quick access via mobile scanning.
          </p>

          <div className="mb-8">
            <h2 className="sm:text-xl text-lg lg:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">🔗 Step 1: Create a Short URL</h2>
            <p className="text-gray-700 dark:text-gray-400">
              Go to the <a href="/create-link" className="bg-gray-100 text-sky-500 dark:bg-gray-800 px-2 py-1 rounded">create link</a> page, paste your long URL, and enter a custom short name.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="sm:text-xl text-lg lg:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">⚙️ Step 2: QR Code is Auto-Generated</h2>
            <p className="text-gray-700 dark:text-gray-400">
              Once your short URL is created, our system automatically generates a QR code image for it. This QR code points to your short URL.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="sm:text-xl text-lg lg:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">📥 Step 3: Download or Share</h2>
            <p className="text-gray-700  dark:text-gray-400">
              You can preview the QR code on your dashboard and download it as an image file to share on flyers, posters, websites, and more.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="sm:text-xl text-lg lg:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">❓ Frequently Asked Questions</h2>
            <dl class="space-y-4">
              <div>
                <dt class="font-bold text-gray-800 dark:text-gray-100">Is the QR code permanent ?</dt>
                <dd class="text-gray-700 dark:text-gray-400">Yes, it always points to your short URL unless deleted.</dd>
              </div>
              <div>
                <dt class="font-bold text-gray-800 dark:text-gray-100">Can I customize the QR code ?</dt>
                <dd class="text-gray-700 dark:text-gray-400">Customization isn't supported yet, but it’s coming soon!</dd>
              </div>
              <div>
                <dt class="font-bold text-gray-800 dark:text-gray-100">Is scanning tracked ?</dt>
                <dd class="text-gray-700 dark:text-gray-400">Yes, each scan counts as a visit in your link analytics.</dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 w-5/6 mx-auto text-center">
            <a href="/create-link" className="inline-block px-3 sm:px-6 py-4 border border-blue-800 transition ease-out text-white font-semibold rounded bg-indigo-700 hover:bg-indigo-800 hover:text-white ">
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
