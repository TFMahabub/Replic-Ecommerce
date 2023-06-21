
const PrimaryButton = ({ children, ...attributes }: { children: React.ReactNode, onClick?: () => void }) => {
    return (
        <button
            {...attributes}
            type='button'
            className="primary-btn"
        >
            {children}
        </button>
    );
};

export default PrimaryButton;