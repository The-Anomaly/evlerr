import React, { useState } from 'react'
import MembersRow from '../../components/dashboard/MembersRow';
import Agent from '../../assets/images/agent.jpeg';
import CustomInput from '../../utils/CustomInput';
import CustomButton from '../../utils/CustomButton';
import http from '../../Utils';

const Members = () => {

    const [state, setState] = useState({ query: '', loading: false })

    const onChangeQuery = (e) => {
        setState({...state, query: e.target.value})
    }

    const searchAgent = async() => {
        setState({...state, loading: true})
        const param = state.query
        try {
            console.log(param)
            const res = await http.get(`agency/search-members?name=${param}`)
            console.log(res)
            setState({...state, loading: false})
        } catch (error) {
            console.log(error)
            console.log(param)
            alert('request failed')
            setState({...state, loading: false})
        }
    }


    return (
        <main className={'dashBg pl15 pr15 pt40 h100'}>
            <div className={'pb30'}>
                <h2 className={'f34 boldText headerColor'}>Team Members</h2>
            </div>
            <section className='membersCard'>
                <div>
                    <p className={'f20 boldText headerColor pb20'}>All Members</p>
                </div>
                <section>
                    <MembersRow agentImage={Agent} agentAddress={'49th Ave, Long Island City, NY'} agentName={'Tom Wilson'}
                        agentNumber={'91 456 9874'} agentMail={'tomwilson@apus.com'}
                    />
                    <MembersRow agentImage={Agent} agentAddress={'49th Ave, Long Island City, NY'} agentName={'Tom Wilson'}
                        agentNumber={'91 456 9874'} agentMail={'tomwilson@apus.com'}
                    />
                    <MembersRow agentImage={Agent} agentAddress={'49th Ave, Long Island City, NY'} agentName={'Tom Wilson'}
                        agentNumber={'91 456 9874'} agentMail={'tomwilson@apus.com'}
                    />
                    <MembersRow agentImage={Agent} agentAddress={'49th Ave, Long Island City, NY'} agentName={'Tom Wilson'}
                        agentNumber={'91 456 9874'} agentMail={'tomwilson@apus.com'}
                    />
                </section>
            </section>
            <section className='membersCard' style={{ marginTop: '20px' }}>
                <div>
                    <p className={'f20 boldText headerColor pb20'}>Add Member</p>
                </div>
                <div>
                    <CustomInput placeholder={'Search...'} onChange={onChangeQuery} />
                </div>
                <div>
                    <CustomButton loading={state.loading} title={'Add Agent'} onClick={searchAgent} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '80px', marginTop: '10px' }} color={'#fff'} />
                </div>
            </section>
        </main >
    )
}

export default Members