import React from 'react';

const Button = ({ children, type }) => {
    return (
        <button
            type={type}
            className='px-6 py-1 bg-blue-600 rounded-3xl text-white font-bold hover:bg-blue-800 cursor-pointer'
        >
            {children}
        </button>
    );
};

export default Button;