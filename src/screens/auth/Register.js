import { ArrowBackIos, CloseOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import CustomInput from '../../utils/CustomInput';
import '../../assets/style/AuthStyles.css';
import AuthHero from '../../assets/images/bg-register.jpeg';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../utils/CustomButton';
import CustomInputDrop from '../../utils/CustomInputDrop';
import { signup } from '../../redux/actions/AuthActions';
import { useDispatch, connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const Register = (props) => {

    const dispatch = useDispatch()
    const [auth, setAuth] = useState({
        username: '', email: '', password: '', dropDown: false, role: '', confirmPassword: '', roles: [{ id: 1, roleType: 'Agent' }, { id: 2, roleType: 'Agency' }, { id: 3, roleType: 'user' },]
    })

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    const onChangeUserName = (e) => {
        setAuth({ ...auth, username: e.target.value })
    }
    const onChangeRole = (e) => {
        setAuth({ ...auth, role: e.target.value })
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

    const showRoles = () => {
        if (auth.dropDown) {
            setAuth((prevState) => ({ ...prevState, dropDown: false }))
        } else {
            setAuth((prevState) => ({ ...prevState, dropDown: true }))
        }
    }

    function selectResourceType(val) {
        console.log(val.id)
        setAuth((prevState) => ({ ...prevState, role: val.roleType, dropDown: false }))
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
            setAuth({ ...auth, })
            const { email, username, role, password, confirmPassword } = auth
            const obj = { email: email.trim(), username: username.trim(), role, password, confirmPassword }
            try {
                const res = await props.signup(obj)
                if (res) {
                    toast.success('SuccessFul, Verification Link Sent to mail', {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    navigate('login')
                }
                console.log(res);
            } catch (error) {
                console.log('catched error ', error)
                toast.error(error[1].data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
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
                    <div>
                        <img src={AuthHero} alt='hero' loading='eager' />
                    </div>
                    <div className='authFormContainer'>
                        <div className='authHeader'>
                            <h3 className={'f18, boldText'}>Register</h3>
                            {/* <CloseOutlined sx={{ fontSize: '18px' }} className={'boldText'} /> */}
                        </div>
                        <form>

                            <CustomInput placeholder={'User Name'}
                                icon={<AiOutlineUser className='authIcon' />}
                                type={'text'} onChange={onChangeUserName} value={auth.username} name={'username'}

                            />

                            <CustomInput placeholder={'Email'}
                                icon={<AiOutlineUser className='authIcon' />}
                                type={'text'} onChange={onChangeEmail} value={auth.email} name={'email'}
                            />

                            <CustomInput placeholder={'Password'} type={'password'}
                                icon={<FiLock className='authIcon' />} onChange={onChangePassword} name={'password'}
                                value={auth.password}
                            />

                            <CustomInput placeholder={'Re-enter Password'} type={'password'}
                                icon={<FiLock className='authIcon' />} onChange={onChangeConfirmPassword} name={'confirmPassword'}
                                value={auth.confirmPassword}
                            />


                            <CustomInputDrop onChange={onChangeRole} menuDrop={auth.dropDown} onClick={showRoles} placeholder={'Roles'} icon={<AiOutlineUser className='authIcon' />}
                                value={auth.role} name={'role'}
                            >
                                {auth.roles && auth.roles.map((item, index) => (
                                    <li className={'f14 regularText headerColor pb10'} key={item.id} onClick={() => selectResourceType(item)}>{item.roleType}</li>
                                ))}
                            </CustomInputDrop>

                            <div>
                                <CustomButton title={'Register'} customStyle={{ backgroundColor: '#ff5a5f', marginTop: '20px' }}
                                    color={'#fff'} onClick={submit} />
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