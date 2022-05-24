import React, { useState } from 'react';
import Logo from '../../assets/images/logo2.svg';
import './Nav.css';
import '../../assets/style/GeneralStyles.css';
import { BsPlusLg } from 'react-icons/bs';
import { Link, useNavigate, } from 'react-router-dom';
import CustomIconButton from '../../utils/CustomIconButton';
import CustomLink from './CustomLink';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';
import agentiMG from '../../assets/images/agent.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/AuthActions';
import { toast } from 'react-toastify';
import Loading from '../../utils/Loading';
import ResponsiveSideNav from '../modals/ResponsiveSideNav';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';


const NavBar = ({ boxShadow, logo, sideBar }) => {

    const [state, setState] = useState({ showResponsiveNav: false })
    const [logoutLoading, setLogoutLoading] = useState(false)
    const user = useSelector((state) => state.auth.userInfo)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutUser = async () => {
        setLogoutLoading(true)
        try {
            const res = await dispatch(logout())
            setLogoutLoading(false)
            if(res.success){
                toast.success("You've been logged out successfully", {
                    position: toast.POSITION.TOP_RIGHT
                })
                navigate('/')
            }
            console.log('logout resp: ',res)
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
            <nav className='navContainer' style={{ boxShadow: boxShadow }}>
                {/* <RiMenu4Line className='f30 pr10 navItemResponsive' onClick={toggleShowNav} /> */}
                <HiOutlineMenuAlt2 className='f30 pr10 navItemResponsive' onClick={toggleShowNav} />
                {logo &&
                    <div className='logoContainer'>
                        <CustomLink to={'/'}>
                            <img src={Logo} alt='logo' style={{ width: '100px', height: '50px' }} />
                        </CustomLink>
                    </div>}
                <div className='navItems'>
                    <ul>
                        <li className={'regularText f16'} id='forSale'>
                            <p className={'flex alignCenter'}>
                                For Sale  <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                            </p>
                            <div className='navDropDownContentContainer' >

                                <ul className={'flex justifyBetween alignCenter'} style={{ width: '100%', height: '100%' }}>
                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Property</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>


                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Land</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>
                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Commercial</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>
                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Projects</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>

                                </ul>
                            </div>

                        </li>
                        <li className={'regularText f16'} id='properties'>
                            <p className={'flex alignCenter'}>
                                To Rent <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                            </p>
                            <div className='navDropDownContentContainer' >

                                <ul className={'flex justifyBetween alignCenter'} style={{ width: '100%', height: '100%' }}>
                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Property</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>


                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Land</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>
                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Commercial</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>
                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Projects</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className={'regularText f16'} style={{ position: 'relative' }} id='forProjects'>
                            <p className={'flex alignCenter'}>
                                Projects <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                            </p>
                            <div className='navDropDownContentContainer' >

                                <ul className={'flex justifyBetween alignCenter'} style={{ width: '100%', height: '100%' }}>
                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Property</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>


                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Land</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>
                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Commercial</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>
                                    <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <p className={'pb10 semiBoldText headerColor'} style={{ textAlign: 'left' }}>Projects</p>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                    </li>

                                </ul>
                            </div>

                        </li>
                    </ul>
                </div >
                <div className='divider' />
                { user ? 
                <div id='agentdropdown'>
                    <div>
                        <img src={agentiMG} alt={'agent avatar'} className={'agent-avatar'} />
                    </div>
                    <p className={'flex alignCenter navItems'} style={{ padding: '8px' }}>
                        {user.username} 
                    </p>
                    <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                    <div className='agentDropDownContentContainer' >
                        <ul className={'flex justifyBetween alignCenter'} style={{ height: '100%' }}>
                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <CustomLink to={'/dashboard'}>Dashboard</CustomLink>
                                <CustomLink to={'/profile'}>Profile</CustomLink>
                                <CustomLink to={'/reviews'}>Reviews</CustomLink>
                                <CustomLink to={'/message'}>Message</CustomLink>
                                <CustomLink to={'/myProperties'}>My Properties</CustomLink>
                                <CustomLink to={'/favorites'}>My Favorite</CustomLink>
                                <CustomLink to={'/savedSearch'}>Saved Search</CustomLink>
                                <CustomLink to={'#'} onClick={logoutUser}>Log out {logoutLoading && <Loading />} </CustomLink>
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
                    <Link to={'submission'}>
                        <CustomIconButton title={'Submit Property'}
                            customStyle={{ backgroundColor: '#0c304a', borderRadius: '50px', color: '#fff', padding: '10px 16px', }}
                            icon={<BsPlusLg size={16} />}
                        />
                    </Link>

                </div>

            </nav >
            <ResponsiveSideNav closeModal={toggleShowNav} visible={state.showResponsiveNav} />

        </>
    )
}

export default NavBar