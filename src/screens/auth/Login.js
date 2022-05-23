import { ArrowBackIos } from '@mui/icons-material';
import React, { useState } from 'react';
import CustomInput from '../../utils/CustomInput';
import '../../assets/style/AuthStyles.css';
import AuthHero from '../../assets/images/bg-login.jpeg';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomButton from '../../utils/CustomButton';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/AuthActions';
import { toast } from 'react-toastify';



const Login = (props) => {


    const [auth, setAuth] = useState({
        email: '', password: '', loading: false, showPassword: false
    })

    const navigate = useNavigate()

    const onChangeEmail = (e) => {
        setAuth({ ...auth, email: e.target.value })
    }
    const onChangePassword = (e) => {
        setAuth({ ...auth, password: e.target.value })
    }

    const togglePassword = () => {
        if (auth.showPassword) {
            setAuth((prevState) => ({ ...prevState, showPassword: false }))
        } else {
            setAuth((prevState) => ({ ...prevState, showPassword: true }))
        }
    }

    const goToHomePage = () => {
        navigate('/')
    }

    const location = useLocation()
    const from = location.state?.from?.pathname || "/dashboard";

    const submit = async (e) => {

        e.preventDefault();
        const { email, password, } = auth
        const obj = { email, password }
        setAuth({ ...auth, loading: true })
        try {
            const res = await props.login(obj)
            if (res) {
                toast.success('SuccessFul', {
                    position: toast.POSITION.TOP_RIGHT
                })
                navigate(from, { replace: true });
            }
            console.log(res.message);
            setAuth({ ...auth, loading: false })

        } catch (error) {
            toast.error(error[1].data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log('catched error ', error)
            setAuth({ ...auth, loading: false })
        }
    }


    return (
        <>
            <section className='containerBackground'>
                <div className='backArrow' title='Go to HomePage' onClick={goToHomePage}>
                    <ArrowBackIos />
                </div>
                <section className='authContainer'>
                    <div className='authImg'>
                        <img src={AuthHero} alt='hero' loading='eager' />
                    </div>
                    <div className='authFormContainer'>
                        <div className='authHeader'>
                            <h3 className={'f18, boldText'}>Login</h3>
                            {/* <CloseOutlined sx={{ fontSize: '18px' }} className={'boldText'} /> */}
                        </div>
                        <form>
                            <div style={{ marginBottom: '16px' }}>
                                <CustomInput placeholder={'Enter email'}
                                    icon={<AiOutlineMail className='authIcon' />}
                                    type={'email'} onChange={onChangeEmail} value={auth.email} name={'email'}
                                />
                            </div>

                            <CustomInput placeholder={'Password'} type={auth.showPassword ? 'password' : 'text'}
                                icon={auth.showPassword ? <AiOutlineEyeInvisible className='authIcon' /> : <AiOutlineEye className='authIcon' />} onChange={onChangePassword} name={'password'}
                                value={auth.password} onIconClick={togglePassword}
                            />

                            <div className='recoveryContainer'>
                                <div className='rememberMe'>
                                    <input type={'checkbox'} prefix='jello' id='checkbox' />
                                    <label htmlFor='checkbox' className={'f14 regularText'}>Keep me signed in</label>
                                </div>
                                <Link to={'/forgotPassword'} className='forgotPassword'>
                                    <p className={'f14 regularText'}>Lost Your Password?</p>
                                </Link>
                            </div>

                            <div>

                                <CustomButton title={'Login'} customStyle={{ backgroundColor: '#ff5a5f', marginTop: '20px' }}
                                    color={'#fff'} onClick={submit} loading={auth.loading} />


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