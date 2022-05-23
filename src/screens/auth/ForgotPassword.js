import { CloseOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import CustomInput from '../../utils/CustomInput';
import '../../assets/style/AuthStyles.css';
import AuthHero from '../../assets/images/bg-login.jpeg';
import { AiOutlineUser } from 'react-icons/ai';
import CustomButton from '../../utils/CustomButton';
import { connect } from 'react-redux';
import { forgotPassword } from '../../redux/actions/AuthActions';
import { toast } from 'react-toastify';



const ForgotPassword = (props) => {


    const [auth, setAuth] = useState({
        email: '',
    })

    const onChangeEmail = (e) => {
        setAuth({ ...auth, email: e.target.value, loading: false })
    }


    const submit = async (e) => {

        e.preventDefault();
        setAuth({ ...auth, loading: true })
        const { email } = auth
        const obj = { email }
        try {
            const res = await props.forgotPassword(obj)
            setAuth({ ...auth, loading: false })
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT
            })
            console.log(obj)
            console.log(res);
        } catch (error) {
            console.log('catched error ', error)
            setAuth({ ...auth, loading: false })
            toast.error('Something went wrong, could not send email', {
                position: toast.POSITION.TOP_RIGHT
            })
            //    returnError(error)

        }
    }


    return (
        <>
            <section className='containerBackground'>
                <section className='authContainer'>
                    <div className='authImg'>
                        <img src={AuthHero} alt='hero' loading='eager' />
                    </div>
                    <div className='authFormContainer'>
                        <div className='authHeader'>
                            <h3 className={'f18, boldText'}>Forgot Password</h3>
                            <CloseOutlined sx={{ fontSize: '18px' }} className={'boldText'} />
                        </div>
                        <form>
                            <CustomInput placeholder={'Enter email'}
                                icon={<AiOutlineUser className='authIcon' />}
                                type={'email'} onChange={onChangeEmail} value={auth.email} name={'email'}
                            />
                            <div>
                                <CustomButton title={'Request Link'} loading={auth.loading} customStyle={{ backgroundColor: '#ff5a5f', marginTop: '20px' }}
                                    color={'#fff'} onClick={submit} />
                            </div>
                        </form>
                    </div>
                </section>
            </section>
        </>
    )
}

export default connect(null, { forgotPassword })(ForgotPassword)