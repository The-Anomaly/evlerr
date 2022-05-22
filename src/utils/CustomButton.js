import React from 'react';
import './Utils.css';
import '../assets/style/GeneralStyles.css';
import { SpinnerDotted } from 'spinners-react';


const CustomButton = ({ icon, title, customStyle, color, onClick, loading }) => {
    return (
        <>
            <div className='btnContainer cPointer' style={customStyle} onClick={onClick}>
                {loading && loading ? <SpinnerDotted color={color} size={'20px'} /> :
                    <p className={'semiBoldText f16'} style={{ color: color }}>{title}</p>}
            </div>
        </>
    )
}

export default CustomButton