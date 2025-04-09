const Button = ({
    name,
    type = "button",
    onClick = () => { },
    style = { padding: '6px 24px' },
    className = "bg-teal-600 hover:bg-teal-700 text-white"
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-max text-sm rounded cursor-pointer transition-all duration-300 ${className}`}
            style={style}
        >
            {name}
        </button>
    );
};

export default Button;