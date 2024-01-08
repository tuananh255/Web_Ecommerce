import React from 'react';

const CustomInput = (props) => {
    const {type,name,placeholder,className} = props
    return (
        <div className="">
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder}
                className={`form-control ${className}`} />
        </div>
    );
}

export default CustomInput;
