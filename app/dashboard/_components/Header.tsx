"use client";

import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Home, FileClock, Settings, Menu } from "lucide-react"; // Import necessary icons
import Link from "next/link"; // Import Link for navigation

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to handle menu item click
    const handleMenuItemClick = () => {
        setMenuOpen(false); // Close the menu
    };

    return (
        <div className="p-4 shadow-md border-b flex justify-between items-center bg-gradient-to-r from-purple-700 via-purple-600 to-purple-400 text-white">
            {/* Logo or Title */}
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-300 to-purple-200">
                GeniusPen
            </div>

            {/* Hamburger Menu for Mobile View */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Navigation Links for Small Screen */}
            {menuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white p-4 rounded-md z-50">
                    <Link href="/dashboard" onClick={handleMenuItemClick}>
                        <div className="flex items-center p-2 hover:bg-white hover:text-purple-600 rounded-lg">
                            <Home className="h-5 w-5 mr-1" /> Home
                        </div>
                    </Link>
                    <Link href="/dashboard/history" onClick={handleMenuItemClick}>
                        <div className="flex items-center p-2 hover:bg-white hover:text-purple-600 rounded-lg">
                            <FileClock className="h-5 w-5 mr-1" /> History
                        </div>
                    </Link>
                    <Link href="/dashboard/settings" onClick={handleMenuItemClick}>
                        <div className="flex items-center p-2 hover:bg-white hover:text-purple-600 rounded-lg">
                            <Settings className="h-5 w-5 mr-1" /> Settings
                        </div>
                    </Link>
                </div>
            )}

            {/* User Profile Button */}
            <div className="flex items-center">
                <UserButton />
            </div>
        </div>
    );
}

export default Header;
