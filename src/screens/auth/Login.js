import { CloseOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import CustomInput from '../../utils/CustomInput';
import '../../assets/style/AuthStyles.css';
import AuthHero from '../../assets/images/bg-login.jpeg';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CustomButton from '../../utils/CustomButton';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/AuthActions';



const Login = (props) => {


    const [auth, setAuth] = useState({
        email: '', password: '',
    })

    const onChangeEmail = (e) => {
        setAuth({ ...auth, email: e.target.value })
    }
    const onChangePassword = (e) => {
        setAuth({ ...auth, password: e.target.value })
    }


    const submit = async (e) => {

        e.preventDefault();
        setAuth({ ...auth, })
        const { email, password, } = auth
        const obj = { email, password }
        try {
            const res = await props.login(obj)
            console.log(res);
        } catch (error) {
            console.log('catched error ', error)
            //    returnError(error)

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
                            <h3 className={'f18, boldText'}>Login</h3>
                            <CloseOutlined sx={{ fontSize: '18px' }} className={'boldText'} />
                        </div>
                        <form>
                            <CustomInput placeholder={'Enter email'}
                                icon={<AiOutlineUser className='authIcon' />}
                                type={'email'} onChange={onChangeEmail} value={auth.email} name={'email'}
                            />
                            <CustomInput placeholder={'Password'} type={'password'}
                                icon={<FiLock className='authIcon' />} onChange={onChangePassword} name={'password'}
                                value={auth.password} />

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

                                <CustomButton title={'Login'} customStyle={{ backgroundColor: '#ff5a5f', marginTop: '20px' }}
                                    color={'#fff'} onClick={submit} />


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

export default connect(null, { login })(Login)