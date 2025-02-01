"use client";

import Link from "next/link";

export function NavBar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl sm:text-2xl font-bold">
                    Five Three Studios
                </Link>
                
                <a
                    href="https://calendly.com/ibrahim0814/fivethree-consult"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium 
                    bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                    text-white shadow-sm hover:shadow-md transition-all whitespace-nowrap"
                >
                    Book a Consultation
                </a>
            </nav>
        </header>
    );
}
