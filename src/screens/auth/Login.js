import { CloseOutlined } from '@mui/icons-material';
import React from 'react';
import CustomInput from '../../utils/CustomInput';
import '../../assets/style/AuthStyles.css';
import AuthHero from '../../assets/images/bg-login.jpeg';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CustomButton from '../../utils/CustomButton';



const Login = () => {
    return (
        <>
            <section className='containerBackground'>
                <section className='authContainer'>
                    <div>
                        <img src={AuthHero} alt='hero' />
                    </div>
                    <div className='authFormContainer'>
                        <div className='authHeader'>
                            <h3 className={'f18, boldText'}>Login</h3>
                            <CloseOutlined sx={{ fontSize: '18px' }} className={'boldText'} />
                        </div>
                        <form>
                            <CustomInput placeholder={'Enter username or email'}
                                icon={<AiOutlineUser className='authIcon' />}
                                type={'text'}
                            />
                            <CustomInput placeholder={'Password'} type={'password'}
                                icon={<FiLock className='authIcon' />} />

                            <div className='recoveryContainer'>
                                <div className='rememberMe'>
                                    <input type={'checkbox'} prefix='jello' id='checkbox' />
                                    <label htmlFor='checkbox' className={'f14 regularText'}>Keep me signed in</label>
                                </div>
                                <Link to={'/'} className='forgotPassword'>
                                    <p className={'f14 regularText'}>Lost Your Password?</p>
                                </Link>
                            </div>

                            <div>
                                <Link to={'/dashboard'}>
                                    <CustomButton title={'Login'} customStyle={{ backgroundColor: '#ff5a5f', marginTop: '20px' }}
                                        color={'#fff'} />
                                </Link>

                            </div>
                        </form>
                        <div className='authFooter'>
                            <p className={'f16 regularText'}>Don't have an account? <span className={'boldText'}>
                                <Link to={'/signup'} className='redirectSignUp'>
                                    Register
                                </Link>
                            </span></p>

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Login