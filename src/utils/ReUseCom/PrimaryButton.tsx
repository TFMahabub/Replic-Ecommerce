
interface Propstype {
    children: React.ReactNode,
    onClick?: () => void,
    variant: string,
    type?: string
}

const PrimaryButton = ({ children, variant, type, ...attributes }: Propstype) => {
    return (
        <>
            {
                variant === 'small' &&
                <button
                    {...attributes}
                    className="primary-btn"
                >
                    {children}
                </button>
            }
            {
                variant === 'big' &&
                <button
                    {...attributes}
                    className="primary-btn-big"
                >
                    {children}
                </button>
            }
        </>
    );
};

export default PrimaryButton;