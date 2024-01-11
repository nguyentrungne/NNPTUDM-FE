import React from "react";
import { WrapperInputStyle } from "./style";

const InputFormComponent = ( props ) =>{
    const handleOnchangeInput = (e) => {
        props.onChange(e.target.value);
    }
    const {placeholder= 'Nhập text', ...rests } = props
    return(
        <WrapperInputStyle placeholder= {placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />

    )
}

export default InputFormComponent