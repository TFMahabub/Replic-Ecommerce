import React from 'react';

const TextDescription = ({ children, varient }: { children: React.ReactNode, varient: string }) => {
    return (
        <>
            {
                varient === 'black' &&
                <p
                    className={`text-base font-light tracking-wide`}
                >
                    {children}
                </p>
            }
            {
                varient === 'white' &&
                <p
                    className={`text-base font-light tracking-wide text-white`}
                >
                    {children}
                </p>
            }
        </>
    );
};

export default TextDescription;