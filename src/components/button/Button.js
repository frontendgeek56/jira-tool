
function Button({children,type,className,onClick,title},props) {


return(
    <button className={className} type={type} onClick={onClick} title={title}>
        {children}
    </button>
)
}
export default Button;
