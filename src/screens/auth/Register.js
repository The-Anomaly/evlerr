import { CloseOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import CustomInput from '../../utils/CustomInput';
import '../../assets/style/AuthStyles.css';
import AuthHero from '../../assets/images/bg-register.jpeg';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CustomButton from '../../utils/CustomButton';
import CustomInputDrop from '../../utils/CustomInputDrop';

const Register = () => {


    const [auth, setAuth] = useState({
        username: '', email: '', password: '', dropDown: false, role: '', confirmPassword: '',
    })

    const onChangeUserName = (value) => {
        setAuth({ ...auth, username: value })
    }
    const onChangeRole = (value) => {
        setAuth({ ...auth, role: value })
    }
    const onChangeEmail = (value) => {
        setAuth({ ...auth, email: value })
    }
    const onChangePassword = (value) => {
        setAuth({ ...auth, password: value })
    }
    const onChangeConfirmPassword = (value) => {
        setAuth({ ...auth, confirmPassword: value })
    }

    const showRoles = () => {
        if (auth.dropDown) {
            setAuth((prevState) => ({ ...prevState, dropDown: false }))
        } else {
            setAuth((prevState) => ({ ...prevState, dropDown: true }))
        }
    }


    return (
        <>
            <section className='containerBackground'>
                <section className='authContainer'>
                    <div>
                        <img src={AuthHero} alt='hero' />
                    </div>
                    <div className='authFormContainer'>
                        <div className='authHeader'>
                            <h3 className={'f18, boldText'}>Register</h3>
                            <CloseOutlined sx={{ fontSize: '18px' }} className={'boldText'} />
                        </div>
                        <form>




                            <CustomInput placeholder={'User Name'}
                                icon={<AiOutlineUser className='authIcon' />}
                                type={'text'} onChange={onChangeUserName}
                            />

                            <CustomInput placeholder={'Email'}
                                icon={<AiOutlineUser className='authIcon' />}
                                type={'text'} onChange={onChangeEmail}
                            />

                            <CustomInput placeholder={'Password'} type={'password'}
                                icon={<FiLock className='authIcon' />} onChange={onChangePassword} />

                            <CustomInput placeholder={'Re-enter Password'} type={'password'}
                                icon={<FiLock className='authIcon' />} onChange={onChangeConfirmPassword} />


                            <CustomInputDrop onChange={onChangeRole} menuDrop={auth.dropDown} onClick={showRoles} placeholder={'Roles'} icon={<AiOutlineUser className='authIcon' />}>
                                <p>Hi</p>
                            </CustomInputDrop>

                            <div>
                                <CustomButton title={'Login'} customStyle={{ backgroundColor: '#ff5a5f', marginTop: '20px' }}
                                    color={'#fff'} />
                            </div>
                        </form>
                        <div className='authFooter'>
                            <p className={'f16 regularText'}>Already have an account? <span className={'boldText'}>
                                <Link to={'/login'} className='redirectSignUp'>
                                    Login
                                </Link>
                            </span></p>

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Register