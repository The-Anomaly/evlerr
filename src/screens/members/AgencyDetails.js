import React, { Suspense, useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
// import Breadcrumbs from '../../utils/Breadcrumb'
import '../../assets/style/PropertyStyles.css';
import FilterModal from '../../components/modals/FilterModal';
import Agent from '../../assets/images/defAvatar.jpg';
import Agency from '../../assets/images/agencyImage.jpeg';
import '../../assets/style/MemberStyles.css';
// import AgencyDetailsCard from '../../components/cards/AgencyDetailsCard';
import styled from 'styled-components';
import AgencyAgentCard from '../../components/cards/AgencyAgentsCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AgentDisplayCard from '../../utils/AgentDisplayCard';
// import { SELECT_USER } from '../../redux/Types';
import { getMembersProperties } from '../../redux/actions/PropertiesAction';
// import { IoLocationOutline } from "react-icons/io5";
import http from '../../Utils';
import { IoLocationOutline } from 'react-icons/io5'
import { toast } from 'react-toastify';
import { SELECT_USER } from '../../redux/Types';
// import PropertyGridCards from '../../components/cards/PropertyGridCards';


const Tab = styled.button`
  font-size: 16px;
  padding: 10px 30px;
  cursor: pointer;
  background: white;
  border: 0;
  outline: 0;
  color:#484848;
  ${({ active }) =>
        active &&
        `
    border-bottom: 1px solid #ff5a5f;
    color:#ff5a5f;

  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  border-bottom:1px solid #ebebeb;
  overflow-x: auto;
`;
const types = ['Overview', 'Properties', 'Agents'];



const AgencyDetails = () => {


    const [state, setState] = useState({
        sortDrop: false,
        properties: {docs: []}, agents: {docs: []}, propertiesLoading: false,
        sortItem: [{ id: 1, name: 'Default' }, { id: 2, name: 'Newest' }, { id: 3, name: 'Oldest' },
        { id: 4, name: 'Lowest Price' }, { id: 5, name: 'Highest Price' }, { id: 6, name: 'Random' }], filter: 'All', filterDrop: false,
        selected: 'Default', visible: false, filterItem: [{ id: 1, name: 'All' }, { id: 2, name: 'Rent' }, { id: 2, name: 'Sale' },],
    })
    const member = useSelector((state) => state.auth.selectedUser)
    const [active, setActive] = useState(types[0]);
    // const [setData] = useState({
    //     _id: ''
    // })
    // console.log(data)
    const { properties } = useSelector(state => state.properties)
    const dispatch = useDispatch()

    // useEffect(() => {
    
    //   return () => {
    //     dispatch({type: SELECT_USER, payload: {}})
    //   }
    // }, [dispatch])
    
    const fetchProperties = async (type) => {
        setState((state) => ({ ...state, propertiesLoading: true}))
        setActive(type)
        try {
            const res = await dispatch(getMembersProperties({agentId: member._id, orderBy: 'newest', page: 1}))
            console.log('properties ', res)
            setState((state) => ({ ...state, propertiesLoading: false, properties: res}))
        } catch (error) {
            toast.error(error[0], {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log('fetch property error ', error)
            setState((state) => ({ ...state, propertiesLoading: false}))
        }
    }
    
    const fetchAgents = async (type) => {
        setState((state) => ({ ...state, propertiesLoading: true}))
        setActive(type)
        try {
            const res = await http.get('agency/get-members?agencyId='+member._id)
            console.log('properties ', res)
            setState((state) => ({ ...state, propertiesLoading: false, agents: res.data}))
        } catch (error) {
            toast.error(error[0], {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log('fetch agent error ', error)
            setState((state) => ({ ...state, propertiesLoading: false}))
        }
    }

    const navigate = useNavigate()
    // const showFilterModal = () => {
    //     setState((prevState) => ({ ...prevState, visible: true }))
    // }
    const closeFilterModal = () => {
        setState((prevState) => ({ ...prevState, visible: false }))
    }

    function selectResourceType(val) {
        // setData((prevState) => ({ ...prevState, _id: val._id }))
        // console.log(state.value)÷
        // console.log(val._id)
        if (val) {
            navigate('/properties-details', { replace: true, state: { propertyId: val._id } })
        }

    }

    const redirectAgent = (member) => {
        setActive(types[0])
        dispatch({type: SELECT_USER, payload: member})
        navigate('/member-details')
    }
    // const goToAgentDetails = () => {
    //     navigate('/agent-details')
    // }

    return (
        // <Breadcrumbs />
        <>
            <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
                <section className='propertiesHomeContainer'>
                    <section className='flex agentNlatest'>
                        <section className='agent pr20'>
                            <section >
                                <h1 className='f30 headerColor boldText agentHeader' style={{ marginBottom: '30px' }}>{member.fullName??member.username}</h1>
                                <div>
                                    <div className={'flex justifyBetween alignCenter pb40'}>
                                        {/* <AgencyDetailsCard agentImage={Agency} agentName={'James Fallen'} department={'Sales'} phoneNumber={'932323432'}
                                            email={'jamesfallen@mail.com'} agencyAddress={'333 NW 26th St, Miami'} /> */}
                                        <AgentDisplayCard noRedirect={true} customStyle={{ width: '100%' }} job={member.job} web={member.web} name={member.username} phone={member.phone} fax={member.fax} email={member.email} photo={member.profilePicture} />
                                    </div>
                                </div>
                            </section>
                            <section className={'membersCard'}>
                                <ButtonGroup>
                                <Tab
                                    active={active === types[0]}
                                    onClick={() => setActive(types[0])}
                                    className={' headerColor semiBoldText'}
                                >
                                    {types[0]}
                                </Tab>
                                <Tab
                                    active={active === types[1]}
                                    onClick={() => fetchProperties(types[1])}
                                    className={' headerColor semiBoldText'}
                                >
                                    {types[1]}
                                </Tab>
                                {member.role === 'agency' && 
                                    <Tab
                                        active={active === types[2]}
                                        onClick={() => fetchAgents(types[2])}
                                        className={' headerColor semiBoldText'}
                                    >
                                        {types[2]}
                                    </Tab>
                                }
                                </ButtonGroup>
                                {active === 'Overview' && <section className={'pt40'}>
                                    <article>

                                        <p className={'f14 headerColor mediumText pb30 pl10'}>
                                            {member.description ? member.description : 'No description'}
                                        </p>
                                    </article>
                                </section>}
                                {active === 'Properties' && <section className={'pt40'}>

                                    <Suspense fallback={'Loading...'}>

                                        <section>

                                            {state.propertiesLoading ? <p style={{background: '#FFE089', opacity: '0.7', padding: '15px', borderRadius: '7px'}} className={'f14 regularText'}>Loading...</p> : 
                                            state.properties.docs.length === 0 ? <p style={{background: '#FFE089', opacity: '0.7', padding: '15px', borderRadius: '7px'}} className={'f14 regularText'}>User has not uploaded any properties yet</p> : 
                                            state.properties.docs.map((item, index) => (
                                                <section key={index} className='agentFlexCard'>
                                                    <section className='agentImg cPointer'>
                                                        <img src={item.featuredImage ? item.featuredImage.url : Agency}  onClick={() => {selectResourceType(item._id)}} style={{ width: '100%', height: '100%', borderRadius: '6px' }} alt='' />
                                                        <div className='deets deets-sm mt10 flex'>
                                                            <p className='mr10'>Bed: {item.bed}</p>
                                                            <p className='mr10'>Bath: {item.bath}</p>
                                                            <p>Sqft: {item.homeArea}</p>
                                                        </div>
                                                    </section>
                                                    <section className='agentDetails'>
                                                        <div style={{ marginBottom: '10px' }}>
                                                            <div style={{flexWrap: 'wrap-reverse'}} className="flex justifyBetween">
                                                                <div>
                                                                    <span style={{ background: '#3E4C66', fontSize: '16px', padding: '1px 8px', color: 'white', borderRadius: '3px' }}>{item.status}</span>
                                                                </div>
                                                                <div className="property-price headerColor">{item.price}</div>
                                                                
                                                            </div>
                                                        </div>
                                                        <small className='redText mt10 mb10'>{item.propertyType}</small>
                                                        <div onClick={() => {selectResourceType(item._id)}} className="property-price headerColor cPointer mb10">{item.propertyTitle}</div>
                                                        <p style={{color: '#484848'}} className='mb10 f14'>
                                                            <span className='mr10'>
                                                                <IoLocationOutline style={{color: '#484848'}} />
                                                            </span>
                                                            {item.friendlyAddress}
                                                        </p>
                                                        <div className='deets deets-lg flex'>
                                                            <p className='mr10'>Bed: {item.bed}</p>
                                                            <p className='mr10'>Bath: {item.bath}</p>
                                                            <p>Sqft: {item.homeArea}</p>
                                                        </div>
                                                    </section>
                                                </section>
                                            ))}

                                            
                                        </section>


                                    </Suspense>

                                </section>}
                                {active === 'Agents' && 
                                <section className={'pt40'}>
                                    {state.propertiesLoading ? <p style={{background: '#FFE089', opacity: '0.7', padding: '15px', borderRadius: '7px'}} className={'f14 regularText'}>Loading...</p> : 
                                            state.agents.docs.length === 0 ? <p style={{background: '#FFE089', opacity: '0.7', padding: '15px', borderRadius: '7px'}} className={'f14 regularText'}>Agency has no members yet</p> : 
                                            state.agents.docs.map((item, index) => (
                                                <AgencyAgentCard key={index} agentImage={item.memberId.profilePicture ? item.memberId.profilePicture.url : Agent} agentName={item.memberId.username} department={item.memberId.job} phoneNumber={item.memberId.phone} email={item.memberId.email} redirect={() => {redirectAgent(item.memberId)}} />
                                            ))}
                                </section>}
                            </section>
                        </section>

                        <section className='latest'>
                            <div className={'membersCard'}>
                                <p className={'f20 headerColor boldText  pb20'}>Latest Properties</p>
                                <ul>
                                    {Object.keys(properties).length !== 0 && properties.docs.map((property, index) => {
                                        const { propertyTitle, price, bed, bath, homeArea, featuredImage, _id } = property

                                        if (index < 4) {
                                            return (
                                                <li key={index} onClick={() => {selectResourceType(_id)}} className={'flex alignCenter pb20'}>
                                                    <div className='latestPropertiesImage cPointer'>
                                                        <img src={featuredImage ? featuredImage.url : Agency} alt='home' style={{ width: '100%', height: '100%', borderRadius: '6px' }} />
                                                    </div>
                                                    <div>
                                                        <p className={'f16 headerColor boldText cPointer pb10'} onClick={() => {selectResourceType(_id)}}>{propertyTitle}</p>
                                                        <p className={'f16 boldText  pb10 redText'}>{price}</p>
                                                        <ul className={'flex alignCenter'}>
                                                            <li className={'f14 headerColor boldText  pr10'}>Beds: {bed}</li>
                                                            <li className={'f14 headerColor boldText  pr10'}>Baths: {bath}</li>
                                                            <li className={'f14 headerColor boldText'}>sqft: {homeArea}</li>
                                                        </ul>
                                                    </div>
                                                </li>

                                            )
                                        }
                                        return false
                                    })}
                                </ul>
                            </div>
                            
                        </section>
                        

                    </section>









                </section>

            </RenderNav>
            <FilterModal visible={state.visible} closeModal={closeFilterModal} />

        </>
    )
}

export default AgencyDetails