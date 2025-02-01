

import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-400 text-white p-4 w-full">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo or Brand Name */}
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-300 to-purple-200 mb-4 md:mb-0">
                    GeniusPen
                </div>

                {/* Copyright Info */}
                <div className="text-sm text-center md:text-left mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Swagata Roy. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;


