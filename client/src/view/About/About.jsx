
import React from 'react'
import Navbar from "../../component/Navbar";
import aboutimg from '../../assets/Good team.png'
import vishal from '../../assets/vishal.png'

function About() {
    return (
        <>
            <Navbar />
            <section className=" w-[100%] text-gray-500 dark:bg-gray-900 border-none body-font">
                <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div class="w-full mx-auto lg:w-1/2">

                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none dark:text-white animate__animated animate__fadeInDown">
                            Empowering Your Links, Enhancing Your Reach

                        </h1>
                        <p class=" my-4 text-lg md:text-xl lg:text-2xl font-light text-gray-500 dark:text-gray-400 animate__animated animate__zoomIn transition ease-in-out delay-200 hover:text-sky-400 duration-300">
                            At ZipLink, we transform long, cumbersome URLs into concise, shareable links, making your digital interactions seamless and efficient. Whether you're a business, marketer, or individual, our fast and secure platform helps you simplify link sharing while ensuring reliability and tracking. With custom branding and built-in analytics, ZipLink makes every link smarter and more impactful.
                        </p>
                    </div>


                    <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                        <img
                            class="w-full max-w-lg lg:mx-auto"
                            src={aboutimg}
                            alt="peoples"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-500">CORE VALUES</h1>
                    </div>
                    <div className="flex flex-wrap justify-around -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className=" flex items-center gap-4">

                                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                        </svg>
                                    </div>
                                    <div className='mb-4'>
                                        <h2 className="text-lg dark:text-white text-gray-900 font-medium title-font mb-2">Innovation</h2>
                                    </div>

                                </div>
                                <p className="leading-relaxed text-sm lg:text-lg">We constantly evolve and improve ZipLink to stay ahead in the fast-paced digital world, always bringing users the latest features and tech.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="flex items-center gap-4">

                                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </div>
                                    <div className='mb-4'>
                                        <h2 className="text-lg dark:text-white text-gray-900 font-medium title-font mb-2">User-Centricity</h2>
                                    </div>

                                </div>
                                <p className="leading-relaxed  text-sm lg:text-lg">Every decision we make is centered around delivering the best possible experience for our users simple, intuitive, and hassle-free.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="flex items-center gap-4">

                                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                        </svg>
                                    </div>
                                    <div className='mb-4'>
                                        <h2 className="text-lg dark:text-white text-gray-900 font-medium title-font mb-2">Integrity</h2>

                                    </div>
                                </div>
                                <p className="leading-relaxed  text-sm lg:text-lg">Trust is key. We’re committed to providing a secure and transparent platform that protects your data and your audience.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="flex items-center gap-4">

                                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                        </svg>

                                    </div>
                                    <div className='mb-4'>
                                        <h2 className="dark:text-white text-lg text-gray-900 font-medium title-font mb-2">Collaboration</h2>
                                    </div>
                                </div>
                                <p className="leading-relaxed  text-sm lg:text-lg">We believe in building together with our team, our users, and our partners to shape the future of digital communication.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-white text-center mt-10'>
                    <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-500">BUILT BY STUDENTS, FOR EVERYONE</h1>
                    </div>
                    <p className='w-[80%] mx-auto my-4 text-lg md:text-xl lg:text-2xl font-light text-gray-500 dark:text-gray-400 animate__animated animate__zoomIn transition ease-in-out delay-200 hover:text-sky-400 duration-300'>
                        ZipLink is the result of passion, learning, and late-night coding sessions 🌙💡 by a group of final-year Computer Science students 🎓. We wanted to solve a real-world problem with a simple, useful tool anyone can use.
                        This project represents our journey through full-stack development, teamwork, UI/UX design, and a lot of debugging 🐞💻. More than just a project, it’s a reflection of how much we’ve grown as developers and friends 🤝.
                    </p>
                </div>

                <div className='text-white text-center mt-10'>
                    <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-500">MEET US</h1>
                    </div>

                    <div className='flex w-[60%] mx-auto justify-around flex-wrap'>
                        <div className=''>
                            <img src={vishal} alt="vishal" />
                        </div>
                        <div className='border-2 border-purple-500 w-[150px] h-[150px] mx-auto bg-purple-500 rounded-se-xl'>
                            <div>
                                <img src={vishal} alt="vishal" />
                            </div>
                        </div>
                        <div className='border-2 border-purple-500  w-[150px] h-[150px] mx-auto bg-purple-500'>
                            <div>
                                <img src={vishal} alt="vishal" />
                            </div>
                        </div>
                        <div className='border-2 border-purple-500  w-[150px] h-[150px] mx-auto bg-purple-500'>
                            <div>
                                <img src={vishal} alt="vishal" />
                            </div>
                        </div>

                    </div>
                </div>



            </section>
        </>
    )
}

export default About
