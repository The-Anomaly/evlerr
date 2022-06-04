import React, { useState } from 'react'
import http from '../../Utils'
import CustomButton from '../../utils/CustomButton'
import CustomInput from '../../utils/CustomInput'
import { toast } from 'react-toastify';

const ChangePassword = () => {

    const [state, setState] = useState({ oldPass: '', newPass: '', rePass: '', loading: false })

    const onChangeOldPass = (e) => {
        setState({ ...state, oldPass: e.target.value })
    }

    const onChangeNewPass = (e) => {
        setState({ ...state, newPass: e.target.value })
    }

    const onChangeRePass = (e) => {
        setState({ ...state, rePass: e.target.value })
    }


    const submit = async (e) => {
        e.preventDefault()
        const obj = { oldPassword: state.oldPass, newPassword: state.newPass, confirmPassword: state.rePass }

        setState({ ...state, loading: true })
        try {
            const res = await http.patch('user/update-password', obj)
            setState({ ...state, loading: false })
            toast.success('Success', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log('change password: ', res.data)
        } catch (error) {
            console.log(error)
            setState({ ...state, loading: false })
            toast.error(error[1].data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }


    return (
        <main className={'dashBg pl15 pr15 pt40 h100'}>
            <div className={'pb30'}>
                <h2 className={'f34 boldText headerColor'}>Change Password</h2>
            </div>
            <section className='membersCard respWidth'>
                <CustomInput label={'Old password'} value={state.oldPass} onChange={onChangeOldPass} /> <br />

                <CustomInput label={'New password'} value={state.newPass} onChange={onChangeNewPass} /> <br />

                <CustomInput label={'Retype password'} value={state.rePass} onChange={onChangeRePass} /> <br />

                <div>
                    <CustomButton title={'Change Password'} loading={state.loading} color={'#fff'} onClick={submit} customStyle={{ color: '#fff', marginTop: '15px', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '150px' }} />
                </div>
            </section>

        </main >
    )
}

export default ChangePassword