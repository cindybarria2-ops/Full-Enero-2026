import React from "react";
export default function Button({ text, onClick, color }) {
    return (
        <button
            onClick={onClick}
            className={`bg-${color}-400 text-white px-4 py-2 rounded-md mr-2`}>
            {text}
        </button>
    );
}