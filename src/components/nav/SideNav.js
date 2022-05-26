import React from 'react';
import './Nav.css';
import Logo from '../../assets/images/logo2.svg';
import { Link } from "react-router-dom";
import { IoLayersOutline } from 'react-icons/io5';
import { AiOutlineLogout, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { GoPackage } from 'react-icons/go';
import { BsHouseDoor, } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import SideCustomLink from './SideNavCustomLink';
import { useSelector } from 'react-redux';

const SideNav = ({ removeSidebar, isMobile }) => {

    const user = useSelector((state) => state.auth.userInfo)
    // console.log(user)
    const closeSideBar = () => {
        if (isMobile) {
            removeSidebar()
        }
    }

    return (
        <>
            <nav className='sideNavContainer' onClick={closeSideBar}>
                <div className={'pt30 pl30'}>
                    <Link to={'/'}>
                        <img src={Logo} alt='logo' />
                    </Link>
                </div>
                <ul>

                    <li>
                        <SideCustomLink to={'/dashboard'} >
                            <IoLayersOutline />
                            <span className={'f14 regularText'}>Dashboard</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/profile'} className={' sideNavInactive'}>
                            <AiOutlineUser />
                            <span className={'f14 regularText '}>Profile</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/myProperties'} className={' sideNavInactive'}>
                            <BsHouseDoor />
                            <span className={'f14 regularText '}>My Properties</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/package'} className={'  sideNavInactive'}>
                            <GoPackage />
                            <span className={'f14 regularText '}>My Package</span>
                        </SideCustomLink>
                    </li>
                    
                    { user.role === 'agency' && 
                        <li>
                            <SideCustomLink to={'/members'} className={' sideNavInactive'}>
                                <FaUsers />
                                <span className={'f14 regularText '}>Members</span>
                            </SideCustomLink>
                        </li>
                    }
                    
                    <li>
                        <SideCustomLink to={'/submission'} className={'  sideNavInactive'}>
                            <AiOutlinePlus />
                            <span className={'f14 regularText '}>Submission</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/password'} className={' sideNavInactive'}>
                            <RiLockPasswordLine />
                            <span className={'f14 regularText '}>Change Password</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/'} className={'  sideNavInactive'}>
                            <AiOutlineLogout />
                            <span className={'f14 regularText '}>Logout</span>
                        </SideCustomLink>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default SideNav

