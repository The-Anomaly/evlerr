import React from 'react';
import './Nav.css';
import Logo from '../../assets/images/logo2.svg';
import { Link } from "react-router-dom";
import { IoLayersOutline } from 'react-icons/io5';
import { AiOutlineLogout, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import { GoPackage, GoMail } from 'react-icons/go';
import { BsHouseDoor, } from 'react-icons/bs';
import { FaRegCommentDots, } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { RiLockPasswordLine, RiHeart2Line } from 'react-icons/ri';
import SideCustomLink from './SideNavCustomLink';

const SideNav = () => {
    return (
        <>
            <nav className='sideNavContainer'>
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
                        <SideCustomLink to={'/reviews'} className={' sideNavInactive'}>
                            <GoMail />
                            <span className={'f14 regularText '}>Reviews</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/messages'} className={' sideNavInactive'}>
                            <FaRegCommentDots />
                            <span className={'f14 regularText '}>Message</span>
                        </SideCustomLink>
                    </li>

                    <li>
                        <SideCustomLink to={'/package'} className={'  sideNavInactive'}>
                            <GoPackage />
                            <span className={'f14 regularText '}>My Package</span>
                        </SideCustomLink>
                    </li>
                    
                    <li>
                        <SideCustomLink to={'/favorites'} className={' sideNavInactive'}>
                            <RiHeart2Line />
                            <span className={'f14 regularText '}>My Favorite</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/savedSearch'} className={' sideNavInactive'}>
                            <FiSearch />
                            <span className={'f14 regularText '}>Saved Search</span>
                        </SideCustomLink>
                    </li>
                    
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

