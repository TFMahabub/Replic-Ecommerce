import React from 'react';

const TextSectionMenu = ({ children }: { children: React.ReactNode }) => {
    return (
        <h4
            className='text-3xl font-semibold text-headingTextColor'
        >
            {children}
        </h4>
    );
};

export default TextSectionMenu;