import React from "react";
import Footer from "./../Footer";
import { QrCodeIcon } from "lucide-react";
import Navbarnew from "../Navb";
import { Link } from "react-router-dom";
import {
  HelpCircle,
  UserPlus,
  LogIn,
  Link2,
  BarChart2,
  Settings,
  RefreshCcw,
  Mail,
  Info,
  CheckCircle2,
  Wand2,
  Trash2,
  AlertTriangle,
  MailQuestion,
} from "lucide-react";

const QRHelpPage = () => {
  return (
    <>
      <Navbarnew />
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

export const Help = () => (
  <>
    <Navbarnew />
    <section className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <HelpCircle className="w-8 h-8 text-fuchsia-600 dark:text-fuchsia-400" />
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Help & Support
          </h1>
        </div>

        {/* Getting Started */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <UserPlus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Getting Started</h2>
          </div>
          <ul className="space-y-2 pl-7 border-l-4 border-blue-100 dark:border-blue-900">
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <LogIn className="w-4 h-4 text-fuchsia-500" /> Sign up with your email or Google account.
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Log in to access your dashboard.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Link2 className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Using URL Shortner</h2>
          </div>
          <ul className="space-y-2 pl-7 border-l-4 border-fuchsia-100 dark:border-fuchsia-900">
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Settings className="w-4 h-4 text-indigo-500" /> Enter a <span className="font-semibold border-b border-indigo-400">title</span> for your link.
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Link2 className="w-4 h-4 text-fuchsia-600" /> Enter a <span className="font-semibold border-b border-fuchsia-400">slug</span> (Eg. your_brand) for your link.
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Wand2 className="w-4 h-4 text-blue-500" /> Paste your long URL and click <span className="font-semibold border-b border-blue-400">Shorten</span>.
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Settings className="w-4 h-4 text-indigo-500" /> Manage your links from the dashboard.
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <BarChart2 className="w-4 h-4 text-pink-500" /> Track clicks and analytics for each link.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Account Management</h2>
          </div>
          <ul className="space-y-2 pl-7 border-l-4 border-indigo-100 dark:border-indigo-900">
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <UserPlus className="w-4 h-4 text-blue-500" /> Update your profile information in settings.
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <RefreshCcw className="w-4 h-4 text-fuchsia-500" /> Change your password anytime from your account page.
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Trash2 className="w-4 h-4 text-red-500" /> Contact support to delete your account.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Troubleshooting</h2>
          </div>
          <ul className="space-y-2 pl-7 border-l-4 border-yellow-100 dark:border-yellow-900">
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <RefreshCcw className="w-4 h-4 text-blue-500" /> If you can't log in, try resetting your password.
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Mail className="w-4 h-4 text-fuchsia-500" /> Check your spam folder for verification emails.
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Info className="w-4 h-4 text-indigo-500" /> Clear your browser cache if you experience issues.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <MailQuestion className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Contact Support</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Email us at{" "}
            <a href="mailto:support@urlshortner.com" className="text-blue-600 underline">
              support@urlshortner.com
            </a>{" "}
            or use our{" "}
            <Link to="/contact" className="text-blue-600 underline">
              contact form
            </Link>.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">FAQs</h2>
          </div>
          <ul className="space-y-2 pl-7 border-l-4 border-fuchsia-100 dark:border-fuchsia-900">
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>
                <strong>Is this URL Shortner free?</strong> Yes, basic features are free for all users.
              </span>
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Wand2 className="w-4 h-4 text-blue-500" />
              <span>
                <strong>Can I customize my short links?</strong> Yes, you can choose a custom alias for your links.
              </span>
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Trash2 className="w-4 h-4 text-red-500" />
              <span>
                <strong>How do I delete a link?</strong> Go to your dashboard, find the link, and click "Delete".
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Footer/>
  </>
);


export default QRHelpPage;
