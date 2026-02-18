const InputField = ({ label, type, id, placeholder }) => {
    return (
        <div className="relative">
            <label htmlFor={id} className="text-sm font-medium text-[#828282] bg-white z-10">
                {label}
            </label>
            <input type={type} id={id} placeholder={placeholder} autoComplete="off" className="w-full border border-[#DED2D9] text-[#525252] rounded-sm pl-3 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
    );
};

export default InputField;