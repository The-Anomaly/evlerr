import React from 'react'

const CustomInput = ({ type, noMarginBt, disabled, name, value, onChange, subtitle, icon, customStyle, color, placeholder, label, onIconClick }) => {
    return (
        <>
            <section>
                {label && <p className={'f16 boldText black pb10'}>{label}</p>}
                <div className={ subtitle || noMarginBt ? 'inputContainer' : 'inputContainer inputSpacing'}>
                    <input type={type} disabled={disabled} name={name} value={value}
                        onChange={onChange} className='inputBox' style={customStyle}
                        placeholder={placeholder}
                    />
                    {icon && <span style={{ color: color }} onClick={onIconClick}>{icon}</span>}
                </div>
                {subtitle && <span className={'pt10 f12 regularText headerColor'}>{subtitle}</span>}
            </section>

        </>
    )
}

export default CustomInput