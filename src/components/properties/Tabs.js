import React from 'react';
import '../../assets/style/PropertyStyles.css';

const Tabs = ({ title, color }) => {
    return (
        <>
            <div className='tabsCard'>
                <p className={'f14 regularText'} style={{ color: color }}>{title}</p>
            </div>
        </>
    )
}

export default Tabs