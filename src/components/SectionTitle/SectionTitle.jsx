const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-3/12 text-center mx-auto">
            <i className="text-yellow-600 font-light " >---{subHeading}---</i>
            <h2 className="text-3xl uppercase border-y-4 py-4 mt-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;