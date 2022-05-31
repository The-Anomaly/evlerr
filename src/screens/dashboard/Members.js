import React, { useState } from 'react'
import MembersRow from '../../components/dashboard/MembersRow';
import Agent from '../../assets/images/agent.jpeg';
import CustomInput from '../../utils/CustomInput';
import CustomButton from '../../utils/CustomButton';
import http from '../../Utils';
import { HiOutlineUserAdd } from 'react-icons/hi'
import defaultAvatar from '../../assets/images/defAvatar.jpg'
import { toast } from 'react-toastify';

const Members = () => {

    const [state, setState] = useState({ query: '', loading: false, addAgentLoading: false, fetchedMembers: {}, showSearchModal: false })

    const onChangeQuery = (e) => {
        setState({...state, query: e.target.value})
    }

    const searchAgent = async(e) => {
        e.preventDefault()
        setState({...state, loading: true})
        const {query} = state
        const obj = {name: query}
        // console.log(obj)
        try {
            const res = await http.get(`agency/search-members`,obj)
            console.log(res)
            setState({ ...state, fetchedMembers: res.data, showSearchModal: true, loading: false })
        } catch (error) {
            console.log(error)
            // alert('request failed')
            setState({...state, loading: false})
        }

    }

    const addAgent = async(memId) => {
        setState({...state, addAgentLoading: true})
        const obj = {memberId: memId}
        // console.log(obj)
        try {
            const res = await http.post(`agency/add-member`, obj)
            console.log(res)
            setState({ ...state, addAgentLoading: false })
            toast.success('Member Added successfully', {
                position: toast.POSITION.TOP_RIGHT
            })
        } catch (error) {
            console.log(error)
            setState({...state, addAgentLoading: false})
            toast.error('Sorry, something went wrong', {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }

    const searchResult = !Object.keys(state.fetchedMembers).length ? (<p>No member found</p>) : state.fetchedMembers.map((member, index)   => {
        const {profilePicture, fullName, email, friendlyAddress, username, _id} = member
        return (
            <section key={index} className={'flex justifyBetween whiteBg alignCenter pt20 pl20 pr20 pb20 borderBt'} style={{ flexWrap: 'wrap' }}>
                <div className={'flex alignCenter'}>
                    <div className='memberImage'>
                        <img src={profilePicture ? profilePicture : defaultAvatar} alt='agent' style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
                    </div>
                    <div>
                        <p className={'f20 boldText headerColor pb10'}>{fullName ? fullName : username}</p>
                        <p className={'f14 regularText headerColor'}>{friendlyAddress}</p>
                    </div>
                </div>
                <div>
                    {/* <div className={'flex'}>
                        <p className={'f14 regularText headerColor pb10'}>{agentNumber}</p>
                        <span>Show</span>
                    </div> */}
                    <div>
                        <p className={'f14 regularText headerColor'}>{email}</p>
                    </div>
                </div>
                <CustomButton loading={state.addAgentLoading} title={<HiOutlineUserAdd />} onClick={() => {addAgent(_id)}} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f' }} color={'#fff'} />
            </section>
        )
    })
    
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
            <section className='membersCard' style={{ marginTop: '20px', position: 'relative' }}>
                <div>
                    <p className={'f20 boldText headerColor pb20'}>Add Member</p>
                </div>
                <form action="" onSubmit={searchAgent}>
                    <div>
                        <CustomInput placeholder={'Search...'} onChange={onChangeQuery} name={'name'}/>
                    </div>
                    <div>
                        <CustomButton loading={state.loading} title={'Add Agent'} onClick={searchAgent} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '80px', marginTop: '10px' }} color={'#fff'} />
                    </div>
                </form>
                {state.showSearchModal || state.loading ? 
                    <>
                        <div className="modal" style={{ background: 'transparent' }} onClick={() => {setState({...state, showSearchModal: false})}}></div>
                        <div className="searchDropdown" id='searchModal' style={{ top: '200px', width: '90%', zIndex: 100 }}>
                            <div>
                                {state.loading && <p>Loading...</p>}
                                {state.loading ? '' : searchResult}
                            </div>
                        </div> 
                    </> : ''}
            </section>
        </main >
    )
}

export default Members