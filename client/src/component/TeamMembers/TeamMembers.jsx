import React from "react";
import {
    Linkedin,
    Github,
    Twitter,
    Instagram,
    PhoneCall,
    Mail, // using for WhatsApp icon representation
} from "lucide-react";

const teamMembers = [
    {
        name: "Mr. Harshal R. Patil",
        linkedin: "https://linkedin.com/in/harshal-patil003/",
        github: "https://github.com/harshalpatil0003",
        instagram: "https://instagram.com/harshalpatil0003",
        phone: "+91 87678 87013",
        email: "harshalpatilcsn2020@gmail.com"
    },
    {
        name: "Mr. Bhushan B. Potdar",
        linkedin: "https://linkedin.com/in/bhushan-potdar-62283a2a7/",
        github: "https://github.com/bhushanpotdar19",
        instagram: "https://instagram.com/bhushan_potdar_19",
        phone: "+91 77440 49590",
        email: "bhushanpotdar3@gmail.com"
    },
    {
        name: "Mr. Vishal V. Valvi",
        linkedin: "https://linkedin.com/in/vishal-valvi-b325522a7",
        github: "https://github.com/VishalValvi-83",
        instagram: "https://instagram.com/V.i.s.h.a.l__83",
        phone: "+91 90224 13979",
        email: "vishalvalvi2529@gmail.com"
    },

    {
        name: "Mr. Suraj M. Ugale",
        linkedin: "https://linkedin.com/in/suraj-ugale-63b899301/",
        github: "https://github.com/suraj2804_96k",
        instagram: "https://instagram.com/suraj2804_96k",
        phone: "+91 77680 98480",
        email: "surajugale2804@gmail.com"
    },
    {
        name: "Prof. Pravin M. Tambe",
        linkedin: "https://linkedin.com/in/pravin-tambe-patil-5411214a/",
        instagram: "https://instagram.com/pravin_tambe03",
        github: false,
        phone: "+91 80876 70566",
        email: "pravintambe@gmail.com"
    },
];

export default function TeamMembers() {
    return (
        <section className="dark:bg-gray-900 bg-blue-100 py-5 px-4 shadow-lg">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-purple-500 mb-10">TEAM MEMBERS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md py-6 px-4 hover:shadow-xl transition"
                        >
                            <h4 className="text-2xl font-bold dark:text-gray-200 text-gray-800 mb-2">{member.name}</h4>
                            <div className="mb-2 text-gray-700 dark:bg-inherit bg-blue-50 py-3 px-2 font-medium text-left dark:text-gray-300 text-md">
                                <div>
                                    <span className="font-semibold"><Mail className="w-4 h-4 text-blue-400 me-1 inline-block"/>Email: </span>
                                    <a href={`mailto:${member.email}`} className="dark:text-blue-300 text-blue-500 font-medium hover:underline">{member.email}</a>
                                </div>
                                <div>
                                    <span className="font-semibold"> <PhoneCall className="w-4 h-4 text-green-500 me-1 inline-block"/>Phone: </span>
                                    <a href={`tel:${member.phone}`} className="dark:text-blue-300 text-blue-500 hover:underline">{member.phone}</a>
                                </div>

                            </div>
                            <div className="flex flex-wrap justify-center p-1 gap-4 text-blue-600 text-xl">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
                                </a>
                                {member.github && (
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <Github className="w-6 h-6 hover:text-blue-500 transition" />
                                    </a>
                                )}
                                <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram className="w-6 h-6 text-red-700 hover:text-pink-500 transition" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center mt-10">
                <h2 className="sm:text-3xl text-xl font-bold text-blue-500">Pravara Rural Education Society's</h2>
                <p className="sm:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mb-2">
                    Sir Visvesvaraya Institute Of Technology, Nashik
                </p>
                <p className="text-base font-semibold text-gray-400 mb-6">
                    A/P. Chincholi, Taluka: Sinnar, District: Nashik, Maharashtra - 422102
                </p>
            </div>
        </section>
    );
}