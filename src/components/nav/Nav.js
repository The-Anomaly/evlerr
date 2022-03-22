import React from 'react';
import Logo from '../../assets/images/logo2.svg';
import CustomButton from '../../utils/CustomButton';
import './Nav.css';
import '../../assets/style/GeneralStyles.css';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

const NavBar = () => {
    return (
        <>
            <nav className='navContainer'>
                <div className='logoContainer'>
                    <img src={Logo} alt='logo' style={{ width: '100px', height: '50px' }} />
                </div>
                <div>
                    <ul>
                        <li className={'regularText f16'}>Home</li>
                        <li className={'regularText f16'}>Properties</li>
                        <li className={'regularText f16'}>Members</li>
                        <li className={'regularText f16'}>Pages</li>
                        <li className={'regularText f16'}>Contact</li>
                    </ul>
                </div>
                <div className='divider' />
                <div>
                    <ul id='authLinks'>
                        <li >
                            <AiOutlineUser size={24} color={'#046971'} style={{ marginRight: '5px' }} />
                        </li>
                        <li className={'regularText f16'}>
                            login
                        </li>
                        <li className={'regularText f16'} style={{ margin: '0 5px' }}>
                            /
                        </li>
                        <li className={'regularText f16'}>
                            Register
                        </li>
                    </ul>
                </div>

                <div>
                    <CustomButton title={'Submit Property'}
                        customStyle={{ backgroundColor: '#0c304a', borderRadius: '50px', color: '#fff', padding: '10px 16px', }}
                        icon={<BsPlusLg size={16} />}
                    />
                </div>

            </nav>
        </>
    )
}

export default NavBar