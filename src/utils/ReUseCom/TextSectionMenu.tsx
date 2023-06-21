import React from 'react';

const TextSectionMenu = ({ children, moreClass }: { children: React.ReactNode, moreClass?: string }) => {
    return (
        <h4
            className={`text-3xl font-semibold text-headingTextColor ${moreClass}`}
        >
            {children}
        </h4>
    );
};

export default TextSectionMenu;