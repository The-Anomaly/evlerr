import React, { useEffect, useState } from 'react'
import MembersRow from '../../components/dashboard/MembersRow';
import CustomInput from '../../utils/CustomInput';
import CustomButton from '../../utils/CustomButton';
import http from '../../Utils';
import { HiOutlineUserAdd } from 'react-icons/hi'
import defaultAvatar from '../../assets/images/defAvatar.jpg'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Pagination from '../../utils/Pagination';
import { SpinnerCircularFixed } from "spinners-react";

const Members = () => {

    const [state, setState] = useState({ query: '', loading: false, searchLoading: false, addAgentLoading: false, fetchedMembers: {}, showSearchModal: false, agents: [], delLoading: false, delModal: false, selectedAgent: '', agentsXtra: {} })
    const user = useSelector((state) => state.auth.userInfo)
    // console.log(user._id)

    useEffect(() => {
        (async () => {
            setState((state) => ({...state, loading: true}))
            try {
                const res = await http.get('agency/get-members?agencyId='+user._id)
                console.log('Members ', res)
                setState((state) => ({ ...state, loading: false, agents: res.data.docs, agentsXtra: res.data}))
            } catch (error) {
                toast.error('Could not fetch members', {
                    position: toast.POSITION.TOP_RIGHT
                })
                // setState((state) => ({ ...state, msg: error[0] }))
                console.log('fetch member error ', error)
                setState((state) => ({ ...state, loading: false}))
            }
        })()
    }, [user._id])
    

    const paginate = async (page) => {
        setState((state) => ({...state, loading: true}))
        try {
            const res = await http.get(`agency/get-members?agencyId=${user._id}&page=${page}`)
            // console.log('properties ', res)
            setState((state) => ({ ...state, loading: false, agents: res.data.docs, agentsXtra: res.data}))
        } catch (error) {
            // returnError(error)
            setState((state) => ({ ...state, msg: error[0] }))
            console.log('fetch property error ', error)
            setState((state) => ({ ...state, loading: false}))
        }
        
    }

    const onChangeQuery = (e) => {
        setState({...state, query: e.target.value})
    }

    const searchAgent = async(e) => {
        e.preventDefault()
        setState({...state, searchLoading: true})
        const {query} = state
        const obj = {name: query}
        // console.log(obj)
        try {
            const res = await http.get(`agency/search-members`,obj)
            console.log(res)
            setState({ ...state, fetchedMembers: res.data, showSearchModal: true, searchLoading: false })
        } catch (error) {
            console.log(error)
            // alert('request failed')
            setState({...state, searchLoading: false})
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
            paginate(1)
        } catch (error) {
            console.log(error)
            setState({...state, addAgentLoading: false})
            toast.error('Sorry, something went wrong', {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }

    const handleDelmodal = (p_id = '') => {
        setState({ ...state, selectedAgent: p_id, delModal: !state.delModal })
    }

    const handleDel = async (p_id) => {
        setState({ ...state, delLoading: true })
        try {
            const res = await http.delete(`agency/delete-member?memberId=${p_id}`)
            toast.success('Agent deleted', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(res)
            handleDelmodal('')

            // setState((state) => ({...state, loading: true}))
            try {
                const res = await http.get('agency/get-members?agencyId='+user._id)
                console.log('properties ', res)
                setState((state) => ({ ...state, loading: false, agents: res.data.docs, agentsXtra: res.data}))
            } catch (error) {
                // returnError(error)
                setState((state) => ({ ...state, msg: error[0] }))
                console.log('fetch property error ', error)
                setState((state) => ({ ...state, loading: false}))
            }
        } catch (error) {
            console.log('delete catch:', error)
            toast.error(error[0], {
                position: toast.POSITION.TOP_RIGHT
            });
            setState({ ...state, delLoading: false })
            handleDelmodal('')
            
        }
    }


    const renderLoading = () => {
        if (state.loading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <SpinnerCircularFixed size={'40px'} color="rgba(255, 90, 95, 1)" secondaryColor="rgba(172, 57, 57, 0.58)" speed={150} />
                </div>
            )
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

            {/* delete modal */}
            { state.delModal && 
            <section className='modal' id='modal'>
                <div className='animate__animated  animate__slideInDown animate__faster' style={{ background: 'white', width: 'clamp(170px, 400px, 50%)', margin: 'auto', padding: '15px', borderRadius: '5px' }} >

                    <h5>DELETE</h5>
                    <hr style={{ marginTop: '10px', marginBottom: '20px' }} />
                    <div className="pb-3 px-5">
                        <h5 className='f18' style={{ marginTop: '10px' }}>Are you sure?</h5>
                        <p className='f20' style={{ marginTop: '10px' }}>You can't undo this action</p>
                    </div>
                    <hr  style={{ marginTop: '20px', marginBottom: '10px' }} />
                    <div className="p10 flex">
                        <CustomButton title={'CANCEL'} customStyle={{ border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '3px', marginRight: '10px', background: '#EAEAEA' }} color={'#000'} onClick={() => handleDelmodal('')}  />
                        <CustomButton title={'DELETE'} customStyle={{ border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '3px', background: '#E12D2D', color: 'white' }} color={'#fff'} onClick={() => handleDel(state.selectedAgent)} loading={state.delLoading}  />
                    </div>
                </div>
            </section>}

            <div className={'pb30'}>
                <h2 className={'f34 boldText headerColor'}>Team Members</h2>
            </div>
            <section className='membersCard'>
                <div>
                    <p className={'f20 boldText headerColor pb20'}>All Members</p>
                </div>
                <section>
                    {renderLoading()}
                    {state.agents.map((agent, index) => {
                            const {profilePicture, friendlyAddress, username, phone, email, _id} = agent.memberId
                            return (
                            <MembersRow key={index} agentImage={profilePicture ? profilePicture : defaultAvatar} agentAddress={friendlyAddress} agentName={username} id={_id} toggleDelete={handleDelmodal}
                                agentNumber={phone} agent={agent.memberId} agentMail={email}
                            />)
                        }
                    )}

                    <div className="mt10">
                        <Pagination paginationObj={state.agentsXtra} paginator={paginate} />
                    </div>
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
                        <CustomButton loading={state.searchLoading} title={'Add Agent'} onClick={searchAgent} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '80px', marginTop: '10px' }} color={'#fff'} />
                    </div>
                </form>
                {state.showSearchModal || state.searchLoading ? 
                    <>
                        <div className="modal" style={{ background: 'transparent' }} onClick={() => {setState({...state, showSearchModal: false})}}></div>
                        <div className="searchDropdown memberSearch" id='searchModal' style={{ width: '90%' }}>
                            <div>
                                {state.searchLoading && <p>Loading...</p>}
                                {state.searchLoading ? '' : searchResult}
                            </div>
                        </div> 
                    </> : ''}
            </section>
        </main >
    )
}

export default Members