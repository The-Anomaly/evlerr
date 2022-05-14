import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import CustomButton from '../../utils/CustomButton'
import http from "../../Utils";

const VerifiedPage = () => {

    const [token, setToken] = useSearchParams()
    console.log(token.get('token'))

    const verify = async () => {
        try {
            const res = await http.get(`auth/verfity-token?token=${token.get('token')}`)
            const data = res.data
            console.log('Verification response: ', data)
            // dispatch({ type: PROPERTIES_SUCCESS, payload: data });
            // storeCurrencies(data)
            // resolve(data);
        } catch (error) {
            console.log("email verification err: ", error)
            // dispatch({ type: PROPERTIES_FAIL, payload: error });
            // reject(error);
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