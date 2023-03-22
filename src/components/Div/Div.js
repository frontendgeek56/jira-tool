// import Button from "@restart/ui/esm/Button";

function Div({children,style,className,id ,onClick,onDoubleClick},props) {


    return(
        <div className={className} id={id} style={style} onClick={onClick} onDoubleClick={onDoubleClick}>
            {children}
        </div>
    )
    }
    export default Div;