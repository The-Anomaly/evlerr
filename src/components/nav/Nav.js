import React, { useState } from 'react';
import Logo from '../../assets/images/logo2.svg';
import './Nav.css';
import '../../assets/style/GeneralStyles.css';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CustomIconButton from '../../utils/CustomIconButton';
import HoverCard from '../cards/HoverCard';

const NavBar = () => {

    const [state, setState] = useState({
        membersDrop: false,
    })

    const showMembersDrop = () => {
        if (state.membersDrop) {
            setState((prevState) => ({ ...prevState, membersDrop: false }))
        } else {
            setState((prevState) => ({ ...prevState, membersDrop: true }))
        }

    }
    return (
        <>
            <nav className='navContainer'>
                <div className='logoContainer'>
                    <img src={Logo} alt='logo' style={{ width: '100px', height: '50px' }} />
                </div>
                <div>
                    <ul>
                        <li className={'regularText f16'}>
                            <Link to={'/'} className={'selected'}>
                                Home
                            </Link>
                        </li>
                        <li className={'regularText f16'}>
                            <Link to={'properties'} className={'selected'}>
                                Properties
                            </Link>
                        </li>
                        <li className={'regularText f16'} style={{ position: 'relative' }}>
                            <Link to={'properties'} className={'selected'}>
                                Members
                            </Link>
                        </li>
                        <li className={'regularText f16'}>
                            <Link to={'/'}>
                                Pages
                            </Link>
                        </li>
                        <li className={'regularText f16'}>
                            <Link to={'/'}>
                                Contact
                            </Link>
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
                            <Link to={'login'}>
                                login
                            </Link>
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