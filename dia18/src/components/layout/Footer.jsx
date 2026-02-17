import React from "react";
export default function Footer({text}) {
    return (
        <footer className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-md mt-6">
            <p className="text-center">&copy; {text}</p>       
        </footer>
    );
}