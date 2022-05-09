import React from 'react';
import SideNav from '../../components/agentNav/SideNav';
import '../../assets/style/GeneralStyles.css';
import { Outlet } from 'react-router-dom';
import NavBar from '../agentNav/Nav';

const Layout = ({ children }) => {
    return (
        <>
            <section className='layoutContainer'>
                <SideNav />
                <section style={{ width: 'auto', marginLeft: '300px', paddingBottom: '300px', backgroundColor: '#f7f7f7', height: '100%', }}>
                    <NavBar logo={false} style={{ backgroundColor: '#fff' }} boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'} />
                    {children}
                    <Outlet />
                </section>
            </section>

        </>
    )
}

export default Layout