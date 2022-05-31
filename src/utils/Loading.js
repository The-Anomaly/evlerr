import React from 'react';
import logo from '../assets/images/logo2.svg'
import './Utils.css';

const Loading = () => {
    return (
        <section className='loadingContainer'>
            <img src={logo} className='loader' style={{ width: '150px' }} alt="logo loader" />
        </section>
    )
}

export default Loading
