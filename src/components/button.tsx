import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button = ({ children, className = '', ...props }: ButtonProps) => {
    return (
        <button
            className={`rounded-md font-bold bg-[#C2F800] px-5 py-2 text-[#000000] ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;