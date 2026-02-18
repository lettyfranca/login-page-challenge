const PrimaryButton = ({ children }) => {
    return (
        <button className="w-full text-white bg-[#7F265B] rounded-sm py-3 font-semibold hover:bg-[#975c7f] transition duration-200">
            {children}
        </button>
    );
};

export default PrimaryButton;