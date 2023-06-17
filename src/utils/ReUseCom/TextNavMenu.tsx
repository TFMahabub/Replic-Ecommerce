import React from 'react';

const TextNavMenu = ({ children }: { children: React.ReactNode }) => {
    return (
        <li
            className='text-lg font-medium text-primary transform transition hover:text-primary/60 duration-common list-none'
        >
            {children}
        </li>
    );
};

export default TextNavMenu;