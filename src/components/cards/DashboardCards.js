import React from 'react';
import './Cards.css';

const DashboardCards = ({ children, customStyles }) => {
    return (
        <>
            <section className='dashBCardsContainer' style={customStyles}>
                {children}
            </section>
        </>
    )
}

export default DashboardCards