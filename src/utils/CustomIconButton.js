import React from 'react';
import './Utils.css';
import '../assets/style/GeneralStyles.css'

const CustomIconButton = ({ icon, title, customStyle }) => {
    return (
        <>
            <div className='btnContainer' style={customStyle}>
                <span style={{
                    marginRight: '10px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center'
                }}>{icon}</span>
                <p className={'semiBoldText f16'}>{title}</p>
            </div>
        </>
    )
}

export default CustomIconButton