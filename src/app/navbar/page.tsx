"use client";
import React, { useState } from 'react';

// Define the Navbar component as a functional component.
const Navbar = () => {
    // State variable to control the visibility of the mobile menu.
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu's open/close state.
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-400 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <a href="/" className="text-decoration-none text-white text-2xl font-bold tracking-wider rounded-md px-2 py-1 hover:text-gray-300 transition duration-300">
                    AEON
                </a>

                <div className="block lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 p-2 rounded-md transition duration-300"
                        aria-label="Toggle navigation"
                    >
                        {isMobileMenuOpen ? (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>

                <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="text-sm lg:flex-grow mt-4 lg:mt-0">
                        <a href="#" className="block lg:inline-block text-white text-gray-300 hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-decoration-none">
                            Showcase
                        </a>
                        <a href="#" className="block lg:inline-block text-white text-gray-300 hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-decoration-none">
                            Docs
                        </a>
                        <a href="#" className="block lg:inline-block text-white text-gray-300 hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-decoration-none">
                            Blog
                        </a>
                        <a href="#" className="block lg:inline-block text-white text-gray-300 hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-decoration-none">
                            Analytics
                        </a>
                        <a href="#" className="block lg:inline-block text-white text-gray-300 hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-decoration-none">
                            Templates
                        </a>
                        <a href="#" className="block lg:inline-block text-white text-gray-300 hover:text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-decoration-none">
                            Enterprise
                        </a>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-4">
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            className="w-full lg:w-64 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white-500 focus:border-transparent transition duration-300"
                            aria-label="Search documentation"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
