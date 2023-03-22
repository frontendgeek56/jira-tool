import React from "react";
function Input(props) {
    const {type,placeholder,className,name,id,defaultValue,max,min}=props

return(
    <input type={type} placeholder={placeholder}
     className={className} id={id} 
     name={name}
     min={min}
     max={max}
     defaultValue={defaultValue}
      required/>
)
}
export default Input;