import React from 'react'
import MembersRow from '../../components/dashboard/MembersRow';
import Agent from '../../assets/images/agent.jpeg';
import CustomInput from '../../utils/CustomInput';
import CustomButton from '../../utils/CustomButton';

const Members = () => {
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
            <section className='membersCard'>
                <div>
                    <p className={'f20 boldText headerColor pb20'}>Add Member</p>
                </div>
                <div>
                    <CustomInput placeholder={'Search...'} />
                </div>
                <div>
                    <CustomButton title={'Add Agent'} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '80px' }} />
                </div>
            </section>
        </main >
    )
}

export default Members