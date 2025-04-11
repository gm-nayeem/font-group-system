const Button = ({
    name,
    type = "button",
    onClick = () => { },
    className = "bg-teal-600 hover:bg-teal-700 text-white py-1.5 px-6"
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-max text-sm rounded cursor-pointer transition-all duration-300 ${className}`}
        >
            {name}
        </button>
    );
};

export default Button;