import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../../assets/style/LandingPageStyles.css';
import '../../assets/style/GeneralStyles.css';


const SearchSelector = ({ title, arrowDown, onClick, color, backgroundColor, size, textColor }) => {
    return (
        <>
            <div className='selectorContainer' onClick={onClick} style={{ backgroundColor: backgroundColor }}>
                <p className={'f16 regularText'} style={{ color: textColor }}>{title}</p>
                {arrowDown && <span><ArrowDropDownIcon sx={{ color: color, fontSize: size }} /></span>}
            </div>
        </>
    )
}

export default SearchSelector