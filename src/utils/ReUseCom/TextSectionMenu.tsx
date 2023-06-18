import React from 'react';

const TextSectionMenu = ({ children }: { children: React.ReactNode }) => {
    return (
        <h4
            className='text-2xl font-semibold text-textColor'
        >
            {children}
        </h4>
    );
};

export default TextSectionMenu;