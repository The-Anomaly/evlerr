import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../../assets/images/logo2.svg';
import { IoLayersOutline } from 'react-icons/io5';
import { AiOutlineLogout, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { GoPackage } from 'react-icons/go';
import { BsHouseDoor, } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';

const SideNav = () => {
    return (
        <>
            <nav className='sideNavContainer'>
                <div className={'pt30 pl30'}>
                    <img src={Logo} alt='logo' />
                </div>
                <ul>

                    <li>
                        <Link to={'/dashboard'} className='navLinks'>
                            <IoLayersOutline />
                            <span className={'f14 regularText white'}>Dashboard</span>
                        </Link>

                    </li>
                    <li>
                        <Link to={'/profile'} className='navLinks'>
                            <AiOutlineUser />
                            <span className={'f14 regularText white'}>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/myProperties'} className='navLinks'>
                            <BsHouseDoor />
                            <span className={'f14 regularText white'}>My Properties</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/members'} className='navLinks'>
                            <FiUsers />
                            <span className={'f14 regularText white'}>Members</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/package'} className='navLinks'>
                            <GoPackage />
                            <span className={'f14 regularText white'}>My Package</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/submission'} className='navLinks'>
                            <AiOutlinePlus />
                            <span className={'f14 regularText white'}>Submission</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/password'} className='navLinks'>
                            <RiLockPasswordLine />
                            <span className={'f14 regularText white'}>Change Password</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/logout'} className='navLinks'>
                            <AiOutlineLogout />
                            <span className={'f14 regularText white'}>Logout</span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default SideNav

