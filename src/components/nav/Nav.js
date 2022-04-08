import React from 'react';
import Logo from '../../assets/images/logo2.svg';
import './Nav.css';
import '../../assets/style/GeneralStyles.css';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { Link, } from 'react-router-dom';
import CustomIconButton from '../../utils/CustomIconButton';
import CustomLink from './CustomLink';
import { IoMdArrowDropdown, IoMdArrowDropright, IoMdArrowDropup } from 'react-icons/io';


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
                        <li className={'regularText f16'}>
                            <CustomLink to={'/'} >
                                For Sale
                            </CustomLink>
                        </li>
                        <li className={'regularText f16'} id='properties'>
                            <CustomLink to={'/properties'}>
                                To Rent <span style={{ marginTop: '5px' }}> <IoMdArrowDropdown size={16} /></span>
                            </CustomLink>
                            <div className='navDropDownContentContainer' >
                                <IoMdArrowDropup size={32} color={'#FFF'} className='dropArrow' />
                                <div className={'borderBottom f16 menuItemColor pb10'} >
                                    <CustomLink to={'/properties'}>
                                        Properties-List
                                        <IoMdArrowDropright size={20} />
                                    </CustomLink>
                                </div>

                                <div className={'borderBottom f16 menuItemColor pb10 pt20'} >
                                    <CustomLink to={'/properties-map'}>
                                        Properties-Map
                                        <IoMdArrowDropright size={20} />
                                    </CustomLink>
                                </div>

                                <div className={'borderBottom f16 menuItemColor pb10 pt20'} >
                                    <CustomLink to={'/properties-details'}>
                                        Properties-Details
                                        <IoMdArrowDropright size={20} />
                                    </CustomLink>
                                </div>
                            </div>
                        </li>
                        <li className={'regularText f16'} style={{ position: 'relative' }}>

                            Projects

                        </li>
                        <li className={'regularText f16'}>

                            Pages

                        </li>
                        <li className={'regularText f16'}>

                            Contact

                        </li>

                    </ul>
                </div>
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

            </nav>

        </>
    )
}

export default NavBar