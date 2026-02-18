const SocialButton = ({ icon: Icon, children }) => {
    return (
        <button className="w-full flex items-center justify-center gap-3 text-[#828282] border-2 border-gray-200 rounded-sm py-3 font-semibold cursor-pointer">
        <Icon className="w-5 h-5" />
        {children}
        </button>
    );
};

export default SocialButton;