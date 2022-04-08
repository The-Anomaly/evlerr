import React from 'react';
import Logo from '../../assets/images/logo2.svg';
import './Nav.css';
import '../../assets/style/GeneralStyles.css';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { Link, } from 'react-router-dom';
import CustomIconButton from '../../utils/CustomIconButton';
import CustomLink from './CustomLink';
import { IoMdArrowDropdown } from 'react-icons/io';


const NavBar = ({ boxShadow, logo }) => {

    // const [state, setState] = useState({
    //     membersDrop: false,
    // })

    // const showMembersDrop = () => {
    //     if (state.membersDrop) {
    //         setState((prevState) => ({ ...prevState, membersDrop: false }))
    //     } else {
    //         setState((prevState) => ({ ...prevState, membersDrop: true }))
    //     }

    // }



    return (
        <>
            <nav className='navContainer' style={{ boxShadow: boxShadow }}>
                {logo &&
                    <div className='logoContainer'>
                        <CustomLink to={'/'}>
                            <img src={Logo} alt='logo' style={{ width: '100px', height: '50px' }} />
                        </CustomLink>
                    </div>}
                <div>
                    <ul>
                        <li className={'regularText f16'} id='forSale'>
                            <CustomLink to={'/properties'} >
                                For Sale  <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                            </CustomLink>
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
                            <CustomLink to={'/properties'}>
                                To Rent <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                            </CustomLink>
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
                            <CustomLink to={'/properties'}>
                                Projects <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                            </CustomLink>
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
                </div>

                <div>
                    <CustomIconButton title={'Submit Property'}
                        customStyle={{ backgroundColor: '#0c304a', borderRadius: '50px', color: '#fff', padding: '10px 16px', }}
                        icon={<BsPlusLg size={16} />}
                    />
                </div>

            </nav >

        </>
    )
}

export default NavBar