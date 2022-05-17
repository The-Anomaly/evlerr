import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CustomButton from '../../utils/CustomButton'
import http from "../../Utils";
import { toast } from 'react-toastify';

const VerifiedPage = () => {

    const [token] = useSearchParams()
    const navigate = useNavigate()
    console.log(token.get('token'))

    const verify = async () => {
        try {
            const res = await http.get(`auth/verfity-token?token=${token.get('token')}`)
            const data = res.data
            if (data) {
                console.log('Verification response: ', data)
                toast.success('SuccessFul', {
                    position: toast.POSITION.TOP_RIGHT
                })
                navigate('/login')
            }
            console.log('Verification response: ', data)
            toast.success('SuccessFul', {
                position: toast.POSITION.TOP_RIGHT
            })
            navigate('/login')
        } catch (error) {
            console.log("email verification err: ", error)
        }
    }

    return (
        <section className='containerBackground'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <h1 className={'f60 boldText headerColor'}>Account Verified Successfully</h1> */}
                <CustomButton title={'click to verify'} onClick={verify} customStyle={{ backgroundColor: '#ff5a5f', marginTop: '20px', }}
                    color={'#fff'} />
            </div>
        </section>
    )
}

export default VerifiedPage