import React from 'react'

const CustomInput = ({ type, disabled, name, value, onChange, icon, customStyle, color, placeholder }) => {
    return (
        <>
            <div className='inputContainer'>
                <input type={type} disabled={disabled} name={name} value={value}
                    onChange={onChange} className='inputBox' style={customStyle}
                    placeholder={placeholder}
                />
                {icon && <span style={{ color: color }}>{icon}</span>}
            </div>
        </>
    )
}

export default CustomInput