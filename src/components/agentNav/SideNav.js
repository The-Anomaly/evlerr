import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../../assets/images/logo2.svg';
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
                    <img src={Logo} alt='logo' />
                </div>
                <ul>

                    <li>
                        <SideCustomLink to={'/agent-dashboard'} >
                            <IoLayersOutline />
                            <span className={'f14 regularText'}>Dashboard</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/agent-profile'} className={' sideNavInactive'}>
                            <AiOutlineUser />
                            <span className={'f14 regularText '}>Profile</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/agent-myProperties'} className={' sideNavInactive'}>
                            <BsHouseDoor />
                            <span className={'f14 regularText '}>My Properties</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/agent-reviews'} className={' sideNavInactive'}>
                            <GoMail />
                            <span className={'f14 regularText '}>Reviews</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/agent-messages'} className={' sideNavInactive'}>
                            <FaRegCommentDots />
                            <span className={'f14 regularText '}>Message</span>
                        </SideCustomLink>
                    </li>

                    <li>
                        <SideCustomLink to={'/agent-package'} className={'  sideNavInactive'}>
                            <GoPackage />
                            <span className={'f14 regularText '}>My Package</span>
                        </SideCustomLink>
                    </li>
                    
                    <li>
                        <SideCustomLink to={'/agent-favorites'} className={' sideNavInactive'}>
                            <RiHeart2Line />
                            <span className={'f14 regularText '}>My Favorite</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/agent-savedSearch'} className={' sideNavInactive'}>
                            <FiSearch />
                            <span className={'f14 regularText '}>Saved Search</span>
                        </SideCustomLink>
                    </li>
                    
                    <li>
                        <SideCustomLink to={'/agent-submission'} className={'  sideNavInactive'}>
                            <AiOutlinePlus />
                            <span className={'f14 regularText '}>Submission</span>
                        </SideCustomLink>
                    </li>
                    <li>
                        <SideCustomLink to={'/agent-password'} className={' sideNavInactive'}>
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

