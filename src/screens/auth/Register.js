import { ArrowBackIos } from '@mui/icons-material';
import React, { useState } from 'react';
import CustomInput from '../../utils/CustomInput';
import '../../assets/style/AuthStyles.css';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../utils/CustomButton';
import { signup } from '../../redux/actions/AuthActions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Dropdown from '../../utils/Dropdown';

const Register = (props) => {

    // const dispatch = useDispatch()
    const [auth, setAuth] = useState({
        username: '', email: '', password: '', dropDown: false, confirmPassword: '', role: 'Role', roles: [{ id: 1, roleType: 'Agent' }, { id: 2, roleType: 'Agency' }, { id: 3, roleType: 'user' },],
        loading: false, showPassword: false, showConfirmPassword: false,
    })

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    const onChangeUserName = (e) => {
        setAuth({ ...auth, username: e.target.value })
    }
    const onChangeEmail = (e) => {
        setAuth({ ...auth, email: e.target.value })
    }
    const onChangePassword = (e) => {
        setAuth({ ...auth, password: e.target.value })
    }
    const onChangeConfirmPassword = (e) => {
        setAuth({ ...auth, confirmPassword: e.target.value })
    }

    const togglePassword = () => {
        if (auth.showPassword) {
            setAuth((prevState) => ({ ...prevState, showPassword: false }))
        } else {
            setAuth((prevState) => ({ ...prevState, showPassword: true }))
        }
    }

    const toggleConfirmPassword = () => {
        if (auth.showConfirmPassword) {
            setAuth((prevState) => ({ ...prevState, showConfirmPassword: false }))
        } else {
            setAuth((prevState) => ({ ...prevState, showConfirmPassword: true }))
        }
    }

    const handleRole = (val) => {
        setAuth({ ...auth, role: val })
    }

    const checkPassword = () => {
        const { password, confirmPassword } = auth

        if (password !== confirmPassword) {
            // setAuth({ ...auth, enablePass })
            return true
        }
        return false
    }


    const submit = async (e) => {

        e.preventDefault();
        if (checkPassword()) {
            toast.error("Passwords do not match !", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            const { email, username, role, password, confirmPassword } = auth
            const obj = { email: email.trim(), username: username.trim(), role, password, confirmPassword }
            setAuth({ ...auth, loading: true })
            try {
                const res = await props.signup(obj)
                if (res) {
                    toast.success('SuccessFul, Verification Link Sent to mail', {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    navigate('/login')
                }
                console.log(res);
                setAuth({ ...auth, loading: false })
            } catch (error) {
                console.log('catched error ', error)
                toast.error(error[1].data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                setAuth({ ...auth, loading: false })
            }
        }

    }


    return (
        <>

            <section className='containerBackground'>
                <div className='backArrow' title='Go to HomePage' onClick={goToHomePage}>
                    <ArrowBackIos />
                </div>
                <section className='authContainer'>
                    <div className='authFormContainer'>
                        <div className='authHeader'>
                            <h3 className={'f18, boldText'}>Register</h3>
                            {/* <CloseOutlined sx={{ fontSize: '18px' }} className={'boldText'} /> */}
                        </div>
                        <form>

                            <div style={{ marginBottom: '16px' }}>
                                <CustomInput placeholder={'User Name'}
                                    icon={<AiOutlineUser className='authIcon' />}
                                    type={'text'} onChange={onChangeUserName} value={auth.username} name={'username'}

                                />

                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <CustomInput placeholder={'Email'}
                                    icon={<AiOutlineMail className='authIcon' />}
                                    type={'text'} onChange={onChangeEmail} value={auth.email} name={'email'}
                                />
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <CustomInput placeholder={'Password'} type={auth.showPassword ? 'password' : 'text'}
                                    icon={auth.showPassword ? <AiOutlineEyeInvisible className='authIcon' /> : <AiOutlineEye className='authIcon' />} onChange={onChangePassword} name={'password'}
                                    value={auth.password} onIconClick={togglePassword}
                                />
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <CustomInput placeholder={'Re-enter Password'} type={auth.showConfirmPassword ? 'password' : 'text'}
                                    icon={auth.showConfirmPassword ? <AiOutlineEyeInvisible className='authIcon' /> : <AiOutlineEye className='authIcon' />} onChange={onChangeConfirmPassword} name={'confirmPassword'}
                                    value={auth.confirmPassword} onIconClick={toggleConfirmPassword}
                                />

                            </div>

                            <Dropdown curSelect={auth.role} textColor={'#555'} options={['agency', 'agent']} setSelect={handleRole} />


                            <div>
                                <CustomButton title={'Register'} customStyle={{ backgroundColor: '#ff5a5f', marginTop: '20px' }}
                                    color={'#fff'} onClick={submit} loading={auth.loading} />
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

export default connect(null, { signup })(Register)