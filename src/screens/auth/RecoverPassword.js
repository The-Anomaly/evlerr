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
import { recoverPassword } from '../../redux/actions/AuthActions';



const RecoverPassword = (props) => {


    const [auth, setAuth] = useState({
        confirmPassword: '', password: '',
    })

    const onChangeConfirmPassword = (e) => {
        setAuth({ ...auth, confirmPassword: e.target.value })
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

            const res = await props.recoverPassword(obj)
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
                            <h3 className={'f18, boldText'}>Password Recovery</h3>
                            <CloseOutlined sx={{ fontSize: '18px' }} className={'boldText'} />
                        </div>
                        <form>
                            <CustomInput placeholder={'Enter New Password'}
                                icon={<AiOutlineUser className='authIcon' />}
                                type={'password'} onChange={onChangePassword} value={auth.password} name={'password'}
                            />
                            <CustomInput placeholder={'Confirm New Password'} type={'password'}
                                icon={<FiLock className='authIcon' />} onChange={onChangeConfirmPassword} name={'confirmPassword'}
                                value={auth.confirmPassword} />
                            <div>
                                <CustomButton title={'Reset Password'} customStyle={{ backgroundColor: '#ff5a5f', marginTop: '20px' }}
                                    color={'#fff'} onClick={submit} />
                            </div>
                        </form>
                    </div>
                </section>
            </section>
        </>
    )
}

export default connect(null, { recoverPassword })(RecoverPassword)