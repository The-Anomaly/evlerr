import React from 'react'
import CustomButton from '../../utils/CustomButton'
import CustomInput from '../../utils/CustomInput'

const ChangePassword = () => {
    return (
        <main className={'dashBg pl15 pr15 pt40 h100'}>
            <div className={'pb30'}>
                <h2 className={'f34 boldText headerColor'}>Change Password</h2>
            </div>
            <section className='membersCard' style={{ width: '50%' }}>
                <CustomInput label={'Old password'} />

                <CustomInput label={'New password'} />

                <CustomInput label={'Retype password'} />

                <div>
                    <CustomButton title={'Change Password'} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '150px' }} />
                </div>
            </section>

        </main >
    )
}

export default ChangePassword