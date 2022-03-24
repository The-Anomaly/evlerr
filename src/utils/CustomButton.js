import React from 'react';
import './Utils.css';
import '../assets/style/GeneralStyles.css'

const CustomButton = ({ icon, title, customStyle, color }) => {
    return (
        <>
            <div className='btnContainer' style={customStyle}>
                <p className={'semiBoldText f16'} style={{ color: color }}>{title}</p>
            </div>
        </>
    )
}

export default CustomButton