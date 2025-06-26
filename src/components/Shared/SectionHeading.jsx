const SectionHeading = (props) => {
    const {title,description} = props || {};
    return (
        <div className="mt-14 mb-10">
            <h2 className="text-3xl font-medium text-blue-950">{title}</h2>
            <p className="text-[#66789cc6] font-[480px]">{description}</p>
        </div>
    );
};

export default SectionHeading;