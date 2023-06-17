import React from 'react';

const TextNavMenu = ({ children }: { children: React.ReactNode }) => {
    return (
        <li
            className='text-md font-normal uppercase text-white transform transition duration-common list-none'
        >
            {children}
        </li>
    );
};

export default TextNavMenu;