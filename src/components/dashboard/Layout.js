import React, { useEffect, useState } from 'react';
import SideNav from '../nav/SideNav';
import '../../assets/style/GeneralStyles.css';
import { Outlet } from 'react-router-dom';
import NavBar from '../nav/Nav';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { TiTimes } from 'react-icons/ti';

const Layout = ({ children }) => {


    const [state, setState] = useState({ sidebar: false, isMobile: false })

    useEffect(() => {
      updateDimensions()
      window.addEventListener("resize", updateDimensions)
    
      return () => 
        window.addEventListener("resize", updateDimensions)
      
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth
        const isMobile = width < 1023
        setState({ ...state, sidebar: isMobile, isMobile: isMobile })
        // console.log(isMobile)
    }

    const toggleSideBar = () => {
        setState({ ...state, sidebar: !state.sidebar })
    }
    

    return (
        <>
            <section className='layoutContainer'>
                { !state.sidebar ? <SideNav removeSidebar={toggleSideBar} isMobile={state.isMobile} /> : '' }
                <section className='mainContainer' style={{ width: 'auto', paddingBottom: '300px', backgroundColor: '#f7f7f7', height: '100%', marginLeft: state['isMobile'] ? '0' : '300px' }}>
                    <NavBar logo={false} style={{ backgroundColor: '#fff' }} boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'} />
                    {children}
                    <Outlet />
                </section>

                
                { state.isMobile ?
                    !state.sidebar ? 
                        <>
                            <TiTimes className='cPointer pr10 menuBtn' style={{ zIndex: 100 }} onClick={toggleSideBar} />
                            <div className="modal"></div>
                        </> 
                        : <AiOutlineUnorderedList className='cPointer pr10 menuBtn' onClick={toggleSideBar} /> 
                    : ''
                }
            </section>

        </>
    )
}

export default Layout