import React from 'react';
export default function Header({ title, links }) {
    return (
        <header className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-md mb-6">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex space-x-4 mt-2">
                {links.map((link, index) => (
                    <a key={index} href={link.href} className="text-blue-400 hover:text-blue-300">
                        {link.text}
                    </a>
                ))}
            </div>
        </header>
    );
}