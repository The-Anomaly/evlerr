import React from 'react';
import Logo from '../../assets/images/logo2.svg';
import './Nav.css';
import '../../assets/style/GeneralStyles.css';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineCaretDown } from 'react-icons/ai';
import { Link, } from 'react-router-dom';
import CustomIconButton from '../../utils/CustomIconButton';
import CustomLink from './CustomLink';
import { IoMdArrowDropdown } from 'react-icons/io';
import agentiMG from '../../assets/images/agent.jpeg'


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
                <div id='agentdropdown'>
                    <div>
                        <img src={agentiMG} className={'agent-avatar'} />
                    </div>
                    <p className={'flex alignCenter'} style={{ padding: '8px' }}>
                        Agent pakulla <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                    </p>
                    <div className='agentDropDownContentContainer' >
                        <ul className={'flex justifyBetween alignCenter'} style={{ height: '100%' }}>
                            <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <CustomLink to={'/properties'}>Dashboard</CustomLink>
                                <CustomLink to={'/properties'}>Profile</CustomLink>
                                <CustomLink to={'/properties'}>Reviews</CustomLink>
                                <CustomLink to={'/properties'}>Message</CustomLink>
                                <CustomLink to={'/properties'}>My Properties</CustomLink>
                                <CustomLink to={'/properties'}>My Favorite</CustomLink>
                                <CustomLink to={'/properties'}>Saved Search</CustomLink>
                            </li>
                        </ul>
                    </div>
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