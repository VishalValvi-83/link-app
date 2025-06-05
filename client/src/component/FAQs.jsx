import React, { useState } from 'react';

const faqs = [
    {
        question: "Can I edit the destination URL after creating a short link?",
        answer: "Yes, you can update the destination URL anytime without changing the short link. This allows you to fix mistakes or redirect to new pages without breaking existing links.",
    },
    {
        question: "Are the links I create secure?",
        answer: "Absolutely. All links created with Slinky URL Shortner are HTTPS-secured and protected against unauthorized access or manipulation.",
    },
    {
        question: "Does Slinky URL Shortner track personal user data?",
        answer: "No, Slinky URL Shortner only collects anonymous click data like time, location to help you analyze traffic. We respect user privacy and comply with data protection laws.",
    },
    {
        question: "Is there a limit on how many links I can create?",
        answer: "There’s no limit on the number of links in the free tier.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-gray-900">
            <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                    <div className="max-w-xs">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                            Frequently<br />asked questions
                        </h2>
                        <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
                            Answers to the most frequently asked questions.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="divide-y divide-gray-200 dark:divide-neutral-700">
                        {faqs.map((faq, index) => (
                            <div key={index} className="pt-6 pb-3">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                    aria-expanded={activeIndex === index}
                                    aria-controls={`faq-content-${index}`}
                                >
                                    {faq.question}
                                    <svg
                                        className={`${activeIndex === index ? 'hidden' : 'block'
                                            } shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <svg
                                        className={`${activeIndex === index ? 'block' : 'hidden'
                                            } shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                                <div
                                    id={`faq-content-${index}`}
                                    className={`${activeIndex === index ? 'block' : 'hidden'
                                        } w-full overflow-hidden transition-[height] duration-300`}
                                    role="region"
                                    aria-labelledby={`faq-${index}`}
                                >
                                    <p className="text-gray-600 dark:text-neutral-400">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}