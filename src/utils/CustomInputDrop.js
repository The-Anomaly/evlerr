import React from 'react'

const CustomInputDrop = ({ type, disabled, name, value, onChange, icon, customStyle, color, placeholder, menuDrop, children, onClick }) => {
    return (
        <>
            <section className='dropDownContainer' >
                <div className='inputContainer' onClick={onClick}>
                    <input type={type} disabled={disabled} name={name} value={value}
                        onChange={onChange} className='inputBox' style={customStyle}
                        placeholder={placeholder}
                    />
                    {icon && <span style={{ color: color }}>{icon}</span>}
                </div>
                {menuDrop &&
                    <div className='dropDownContentContainer'>
                        {children}
                    </div>}
            </section>
        </>
    )
}

export default CustomInputDrop