
const SectionItem = ({header, subHeader}) => {
    return (
        <div className="w-1/2 text-center mx-auto py-5 space-y-2">
            <h5 className="text-yellow-500 textxl">{subHeader}</h5>
            <hr className="w-1/3 mx-auto" />
            <h2 className="text-3xl uppercase font-bold ">{header}</h2>
        </div>
    );
};

export default SectionItem;