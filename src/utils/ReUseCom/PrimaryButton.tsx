
const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button
            type='button'
            className="h-10 w-40 flex-center rounded-lg text-white bg-primary active:scale-90 duration-common"
        >
            {children}
        </button>
    );
};

export default PrimaryButton;