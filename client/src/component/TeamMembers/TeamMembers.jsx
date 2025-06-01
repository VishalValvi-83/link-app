import React from "react";
import {
    Linkedin,
    Github,
    Twitter,
    Instagram,
    PhoneCall, // using for WhatsApp icon representation
} from "lucide-react";

const teamMembers = [
    {
        name: "Mr. Harshal R. Patil",
        linkedin: "https://linkedin.com/in/harshal-patil003/",
        github: "https://github.com/harshalpatil0003",
        instagram: "https://instagram.com/harshalpatil0003",
    },
    {
        name: "Mr. Vishal V. Valvi",
        linkedin: "https://linkedin.com/in/vishal-valvi-b325522a7",
        github: "https://github.com/VishalValvi-83",
        instagram: "https://instagram.com/V.i.s.h.a.l__83",
    },
    {
        name: "Mr. Bhushan B. Potdar",
        linkedin: "https://linkedin.com/in/bhushan-potdar-62283a2a7/",
        github: "https://github.com/bhushanpotdar19",
        instagram: "https://instagram.com/bhushan_potdar_19",
    },
    {
        name: "Mr. Suraj M. Ugale",
        linkedin: "https://linkedin.com/in/suraj-ugale-63b899301/",
        github: "https://github.com/suraj2804_96k",
        instagram: "https://instagram.com/suraj2804_96k",
    },
    {
        name: "Prof. Pravin M. Tambe",
        linkedin: "https://linkedin.com/in/pravin-tambe-patil-5411214a/",
        instagram: "https://instagram.com/pravin_tambe03",
        github: false,
    },
];

export default function TeamMembers() {
    return (
        <section className="bg-gray-300 py-10 px-4 rounded-2xl shadow-lg">
            <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-blue-600 mb-6">Team Members
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                        >
                            <h4 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h4>
                            <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                            <div className="flex flex-wrap justify-center gap-4 text-blue-600 text-xl">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="w-5 h-5 hover:text-blue-800 transition" />
                                </a>
                                {member.github && (
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <Github className="w-5 h-5 hover:text-gray-800 transition" />
                                    </a>
                                )}
                                <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center mt-8">
                <h2 className="text-3xl font-bold text-blue-700">Pravara Rural Education Society's</h2>
                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mb-2">
                    Sir Visvesvaraya Institute Of Technology, Nashik
                </p>
                <p className="text-md font-semibold text-gray-600 mb-6">
                    A/P: Chincholi, Taluka: Sinnar, District: Nashik, Maharashtra - 422102
                </p>
            </div>
        </section>
    );
}