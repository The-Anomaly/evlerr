import React from 'react'

const CustomTextArea = ({ type, disabled, name, value, onChange, subtitle, icon, customStyle, color, placeholder, label, onIconClick }) => {
    return (
        <>
            <section>
                {label && <p className={'f16 boldText black pb10'}>{label}</p>}
                <div className='inputContainer'>
                    {/* <input }
                    /> */}
                    <textarea type={type} disabled={disabled} name={name} value={value}
                        onChange={onChange} className='inputBox' style={customStyle}
                        placeholder={placeholder}></textarea>
                    {icon && <span style={{ color: color }} onClick={onIconClick}>{icon}</span>}
                </div>
                {subtitle && <span style={{ color: 'grey', }}><em>{subtitle}</em></span>}
            </section>

        </>
    )
}

export default CustomTextArea