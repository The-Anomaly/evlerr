import React, { useState, useCallback, useEffect } from 'react';
import Logo from '../../assets/images/logo2.svg';
import './Nav.css';
import '../../assets/style/GeneralStyles.css';
import { BsPlusLg } from 'react-icons/bs';
import { Link, useNavigate, } from 'react-router-dom';
import CustomIconButton from '../../utils/CustomIconButton';
import CustomLink from './CustomLink';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';
import defaultAvatar from '../../assets/images/defAvatar.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/AuthActions';
import { toast } from 'react-toastify';
import Loading from '../../utils/Loading';
import ResponsiveSideNav from '../modals/ResponsiveSideNav';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { SiGoogletranslate } from 'react-icons/si';


const NavBar = ({ boxShadow, logo }) => {

    const [state, setState] = useState({ showResponsiveNav: false, showGT: false, saleHover: false, rentHover: false, projectHover: false, isMobile: false, showAgentDropdwn: false })
    const [logoutLoading, setLogoutLoading] = useState(false)
    const user = useSelector((state) => state.auth.userInfo)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const updateDimensions = useCallback(() => {
        const width = window.innerWidth
        const isMobile = width < 1023
        setState((prevState) => ({ ...prevState, isMobile: isMobile }))
        // console.log(isMobile)
    }, [])
    useEffect(() => {
        updateDimensions()
        window.addEventListener("resize", updateDimensions)

        return () =>
            window.addEventListener("resize", updateDimensions)

    }, [updateDimensions])

    const handleSaleHover = (value) => {
        setState({ ...state, rentHover: false, projectHover: false, saleHover: value })
    }

    const handleRentHover = (value) => {
        setState({ ...state, rentHover: value, projectHover: false, saleHover: false })
    }

    const handleProjectHover = (value) => {
        setState({ ...state, rentHover: false, projectHover: value, saleHover: false })
    }

    const closeSubMenus = () => {
        setState({ ...state, saleHover: false, rentHover: false, projectHover: false })
    }

    const toggleAvatarModal = () => {
        setState({ ...state, showAgentDropdwn: !state.showAgentDropdwn })
    }

    const handleGT = () => {
        setState({...state, showGT: !state.showGT})
    }


    const logoutUser = async () => {
        setLogoutLoading(true)
        try {
            const res = await dispatch(logout())
            setLogoutLoading(false)
            if (res.success) {
                toast.success("You've been logged out successfully", {
                    position: toast.POSITION.TOP_RIGHT
                })
                navigate('/')
            }
            console.log('logout resp: ', res)
        } catch (error) {
            setLogoutLoading(false)
            toast.error("Something went wrong, please try again", {
                position: toast.POSITION.TOP_RIGHT
            })
            console.log(error)
        }
    }

    const toggleShowNav = () => {
        setState({ ...state, showResponsiveNav: !state.showResponsiveNav })
    }



    return (
        <>
            <nav style={{ boxShadow: boxShadow, marginLeft: !logo ? !state.isMobile ? '-300px' : 0 : 0 }} className='navContainer'>
                {/* <RiMenu4Line className='f30 pr10 navItemResponsive' onClick={toggleShowNav} /> */}
                <div className='logoContainer' style={{ display: 'flex', alignItems: 'center' }}>
                    <HiOutlineMenuAlt2 className='pr10 navItemResponsive' style={{ height: '20px', width: '20px' }} onClick={toggleShowNav} />
                    {logo &&
                        <CustomLink to={'/'}>
                            <img src={Logo} alt='logo' style={{ width: '100px', height: '50px' }} />
                        </CustomLink>}
                </div>
                <section className={'pale'}>
                    <div className='navItems propNavWidth'>
                        <ul className='navStyle'>
                            <li className={'regularText f16'} id='allProperties' onMouseLeave={closeSubMenus}>
                                <p className={'flex alignCenter cPointer'}>
                                    Properties  <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                                </p>
                                <div className={'agentDropDownContentContainer pl10 pr10 pb10 pt10'}>

                                    <ul style={{ height: '100%', flexDirection: 'column' }}>

                                        <li className={'regularText f16'} onMouseEnter={() => { handleSaleHover(true) }} style={{ justifyContent: 'flex-start', padding: '10px' }}>
                                            <p className='flex alignCenter'>
                                                For sale <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                                            </p>
                                        </li>

                                        <li className={'regularText f16'} onMouseEnter={() => { handleRentHover(true) }} style={{ justifyContent: 'flex-start', padding: '10px' }}>
                                            <p className='flex alignCenter'>
                                                For Rent <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                                            </p>
                                        </li>

                                        <li className={'regularText f16'} onMouseEnter={() => { handleProjectHover(true) }} style={{ justifyContent: 'flex-start', padding: '10px' }}>
                                            <p className='flex alignCenter'>
                                                Projects <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                                            </p>
                                        </li>

                                        <li className={'regularText f16'} onMouseEnter={closeSubMenus} style={{ justifyContent: 'flex-start', padding: '10px' }}>
                                            <Link to={'/properties'} className='flex alignCenter'>
                                                All Projects
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {state.saleHover &&
                                    <div className='subDropdown' id='saleSubDropDown'>
                                        <ul className={'flex justifyBetween alignCenter'} style={{ width: '100%', height: '100%' }}>
                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Property</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>


                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Land</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>
                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Commercial</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>
                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Projects</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>

                                        </ul>
                                    </div>}
                                {state.rentHover &&
                                    <div className='subDropdown' style={{ top: '150px' }} id='rentSubDropDown'>
                                        <ul className={'flex justifyBetween alignCenter'} style={{ width: '100%', height: '100%' }}>
                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Property</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>


                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Land</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>
                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Commercial</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>
                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Projects</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>

                                        </ul>
                                    </div>}
                                {state.projectHover &&
                                    <div className='subDropdown' style={{ top: '190px' }} id='projectSubDropDown'>
                                        <ul className={'flex justifyBetween alignCenter'} style={{ width: '100%', height: '100%' }}>
                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Property</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>


                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Land</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>
                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Commercial</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>
                                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Projects</p>
                                                <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                                <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                                <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                                <CustomLink to={'/properties'}>Iskele</CustomLink>
                                                <CustomLink to={'/properties'}>Lefke</CustomLink>
                                                <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                            </li>

                                        </ul>
                                    </div>}
                            </li>
                            <li>
                                <Link to={'/agents-display'}>Agents</Link>
                            </li>
                            <li>
                                <Link to={'/agencies-display'}>Agencies</Link>
                            </li>
                        </ul>
                    </div >
                    {/* {!state.isMobile && <div id="google_translate_element"></div>} */}
                    {user ?
                        <div id='agentdropdown' onClick={toggleAvatarModal}>
                            <div className='pl10'>
                                <img src={user.profilePicture ? user.profilePicture.url : defaultAvatar} alt={'agent avatar'} className={'agent-avatar'} />
                            </div>
                            <p className={'flex alignCenter navItems'} style={{ padding: '8px' }}>
                                {user.username}
                            </p>
                            <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                            <div style={state.isMobile ? !state.showAgentDropdwn ? { display: 'none' } : {} : {}} className={user.role === 'user' ? 'agentDropDownContentContainer userAgent top80' : 'agentDropDownContentContainer top80'}>
                                <ul className={'flex justifyBetween alignCenter'} style={{ height: '100%' }}>
                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        {user.role !== 'user' ?
                                            <>
                                                <CustomLink to={'/dashboard'}>Dashboard</CustomLink>
                                                <CustomLink to={'/profile'}>Profile</CustomLink>
                                                {user.role === 'agency' ? <CustomLink to={'/members'}>Members</CustomLink> : ''}
                                                <CustomLink to={'/myProperties'}>My Properties</CustomLink>
                                            </> : ''
                                        }
                                        <CustomLink to={'#'} style={{color: '#484848'}} onClick={logoutUser}>Log out {logoutLoading && <Loading />} </CustomLink>
                                    </li>
                                </ul>
                            </div>
                        </div> :
                        <div>
                            <ul id='authLinks'>
                                <li >
                                    <AiOutlineUser size={24} color={'#046971'} style={{ marginRight: '5px' }} />
                                </li>
                                <li className={'regularText f16'}>
                                    <CustomLink to={'/login'}>
                                        Login
                                    </CustomLink>
                                </li>
                                <li className={'regularText f16'} style={{ margin: '0 5px' }}>
                                    /
                                </li>
                                <li className={'regularText f16'}>
                                    <Link to={'signup'}>
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>}
                    

                    <div className='navItems'>
                        <Link to={'/submission'}>
                            <CustomIconButton title={'Submit Property'}
                                customStyle={{ backgroundColor: '#0c304a', fontSize: '0.7rem', borderRadius: '50px', color: '#fff', padding: '10px 12px', width: '150px' }}
                                icon={<BsPlusLg size={16} />}
                            />
                        </Link>

                    </div>

                </section>

            </nav >
            {/* {state.isMobile && <div className='pl20' id="google_translate_element"></div>} */}
            {<div id="google_translate_element" style={state.showGT ? { visibility: 'visible' } : { visibility: 'hidden' }}></div>}
            <div className='translateContainer' onClick={handleGT}>
                <SiGoogletranslate className='f30' />
            </div>
            <ResponsiveSideNav closeModal={toggleShowNav} visible={state.showResponsiveNav} />

        </>
    )
}

export default NavBar