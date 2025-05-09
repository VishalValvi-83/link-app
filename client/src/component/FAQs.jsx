import {
    Smartphone,
    Ticket,
    Tags,
    Package,
    Info,
} from 'lucide-react';

const useCases = [
    {
        icon: Smartphone,
        text: 'Secure mobile payments',
    },
    {
        icon: Ticket,
        text: 'Fast and easy event registration',
    },
    {
        icon: Tags,
        text: 'Inventory management',
    },
    {
        icon: Package,
        text: 'DooH promotions',
    },
    {
        icon: Info,
        text: 'Printable product information',
    },
];

export default function UseCases() {
    return (
        <section className="max-w-7xl mx-auto dark:text-white dark:bg-gray-800 px-6 py-12 text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-medium mb-4">
                <svg
                    className="w-4 text-white h-4"
                    fill="inherit"
                    viewBox="0 0 17 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.166 2.667h4v4h-4v-4ZM9.833 2.667h4v4h-4v-4ZM3.166 9.333h4v4h-4v-4ZM9.833 11.333a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span>Use Cases</span>
            </div>
            <h2 className="text-4xl font-bold mb-12">
                Grow your brand with QR codes that convert
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {useCases.map(({ icon: Icon, text }, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
                    >
                        <div className="w-10 h-10 bg-yellow-300 rounded-lg flex items-center justify-center mb-4">
                            <Icon className="w-5 h-5 text-black" />
                        </div>
                        <p className="font-medium text-gray-900">{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
