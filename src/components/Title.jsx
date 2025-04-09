const Title = ({ title, className }) => {
    return (
        <h2 className={`text-xl font-semibold ${className}`}>{title}</h2>
    )
}

export default Title