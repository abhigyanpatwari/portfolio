import React from 'react';

const CustomCard = ({ children, className = '', size = 64, isDark = false }) => {
    const baseClasses = "rounded-3xl p-6 flex flex-cols items-center justify-center";
    const lightClasses = "bg-white text-gray-800";
    const darkClasses = "bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg text-white border border-gray-300 border-opacity-30";

    const colorClasses = isDark ? darkClasses : lightClasses;

    return (
        <div
            className={`${baseClasses} ${colorClasses} ${className}`}
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            {children}
        </div>
    );
};

export default CustomCard;