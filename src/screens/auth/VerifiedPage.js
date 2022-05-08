import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../utils/CustomButton'

const VerifiedPage = () => {
    return (
        <section className='containerBackground'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 className={'f60 boldText headerColor'}>Account Verified Successfully</h1>
                <Link to={'/login'}>
                    <CustomButton title={'Login'} customStyle={{ backgroundColor: '#ff5a5f', marginTop: '20px', }}
                        color={'#fff'} />
                </Link>
            </div>
        </section>
    )
}

export default VerifiedPage