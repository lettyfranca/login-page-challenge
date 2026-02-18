const Divider = ({ text }) => {
    return (
        <div className="flex justify-center my-6">
      <span className="mx-4 text-[#A1A1A1] text-sm whitespace-nowrap">
        ------------- {text} -------------
      </span>
    </div>
    );
};

export default Divider;