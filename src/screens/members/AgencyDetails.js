import React, { Suspense, useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
// import Breadcrumbs from '../../utils/Breadcrumb'
import '../../assets/style/PropertyStyles.css';
import FilterModal from '../../components/modals/FilterModal';
import Agent from '../../assets/images/agent.jpeg';
// import Agency from '../../assets/images/agencyImage.jpeg';
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
import { GrLocation } from 'react-icons/gr'
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
`;
const types = ['Overview', 'Properties', 'Agents'];



const AgencyDetails = () => {


    const [state, setState] = useState({
        sortDrop: false,
        properties: [], agents: [], propertiesLoading: false,
        sortItem: [{ id: 1, name: 'Default' }, { id: 2, name: 'Newest' }, { id: 3, name: 'Oldest' },
        { id: 4, name: 'Lowest Price' }, { id: 5, name: 'Highest Price' }, { id: 6, name: 'Random' }], filter: 'All', filterDrop: false,
        selected: 'Default', visible: false, filterItem: [{ id: 1, name: 'All' }, { id: 2, name: 'Rent' }, { id: 2, name: 'Sale' },],
    })
    const member = useSelector((state) => state.auth.selectedUser)
    const [active, setActive] = useState(types[0]);
    const [setData] = useState({
        _id: ''
    })
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
            // returnError(error)
            setState((state) => ({ ...state, msg: error[0] }))
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
            // returnError(error)
            setState((state) => ({ ...state, msg: error[0] }))
            console.log('fetch property error ', error)
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
        setData((prevState) => ({ ...prevState, _id: val._id }))
        // console.log(state.value)÷
        console.log(val._id)
        if (val) {
            navigate('/properties-details', { replace: true, state: { propertyId: val._id } })
        }

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
                                <h1 className='f30 headerColor boldText' style={{ marginBottom: '30px' }}>{member.fullName??member.username}</h1>
                                <div>
                                    <div className={'flex justifyBetween alignCenter pb40'}>
                                        {/* <AgencyDetailsCard agentImage={Agency} agentName={'James Fallen'} department={'Sales'} phoneNumber={'932323432'}
                                            email={'jamesfallen@mail.com'} agencyAddress={'333 NW 26th St, Miami'} /> */}
                                        <AgentDisplayCard customStyle={{ width: '100%' }} name={member.username} phone={member.phone} fax={member.fax} email={member.email} photo={member.profilePicture} />
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
                                                <section key={index} style={{ maxHeight: '237' }} className='listCardContainer flex animate__animated animate__fadeIn'>
                                                <section className={'whiteBg pt10 pl10 pr10'} style={{ width: '250px' }}>
                                                    <div className={'cardImage'}>
                                                        <img alt='property' src={item.gallery[0].url} loading={'eager'} />
                                                        <div className='cardImageOverlay'>
                                                            <div className='cardTagContainer'>
                                                                {/* {leaseType &&
                                                                    <div className='cardLeaseTag'>
                                                                        <p className={'semiBoldText white f14'}>{leaseType}</p>
                                                                    </div>}
                                                                {type &&
                                                                    <div className='cardTypeTag'>
                                                                        <p className={'semiBoldText white f14'}>{type}</p>
                                                                    </div>} */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                <section style={{ width: 'calc(100% - 250px)' }} className={'pl20 pr20'}>
                                                    <div className={'cardDetails'}>
                                                        <div className='cardDetailsHeader'>
                                                            <div className="flex justifyBetween">
                                                                <span style={{ background: '#3E4C66', fontSize: '16px', padding: '1px 8px', color: 'white', borderRadius: '3px' }}>{item.status}</span>
                                                                <div className="property-price">{item.price}</div>
                                                                
                                                            </div>
                                                            <p className={'regularText mt10 f14'}>{item.propertyType}</p>
                                                            <h2 className={'boldText f18 propertyDetailsLink'} >{item.propertyTitle}</h2>
                                                        </div>
                                                        <div className='cardDetailsLocation'>
                                                            <p className={'regularText f14'}>
                                                                <span style={{ marginRight: '10px' }}>
                                                                    <GrLocation />
                                                                </span>
                                                                {item.friendlyAddress}
                                                            </p>
                                                        </div>
                                                        <div className='cardPropertyDetails'>
                                                                <ul>
                                                                <li className={'regularText f14'}>Beds: {item.bed}</li>
                                                                <li className={'regularText f14'}>Baths: {item.bath}</li>
                                                                <li className={'regularText f14'}>Sqft: {item.homeArea}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* <section className={'cardFooter pl20 pr20 pt10 pb10 flex justifyBetween alignCenter'}>
                                                        <div className={'flex alignCenter'}>
                                                            <div className='cardFooterImage'>
                                                                <img src={Agent} alt='poster' style={{ width: '100%', height: '100%' }} />
                                                            </div>
                                                            <div>
                                                                <p className={'f14 regularText headerColor propertyDetailsLink'}>dsfkdfs</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className={'f14 regularText headerColor'}>32 years ago</p>
                                                        </div>
                                                    </section> */}
                                                </section>
                                            </section>

                                            ))}
                                            
                                        </section>


                                    </Suspense>

                                </section>}
                                {active === 'Agents' && 
                                <section className={'pt40 agentsGridTemplate'}>
                                    {state.propertiesLoading ? <p style={{background: '#FFE089', opacity: '0.7', padding: '15px', borderRadius: '7px'}} className={'f14 regularText'}>Loading...</p> : 
                                            state.agents.docs.length === 0 ? <p style={{background: '#FFE089', opacity: '0.7', padding: '15px', borderRadius: '7px'}} className={'f14 regularText'}>Agency has no members yet</p> : 
                                            state.agents.docs.map((item, index) => (
                                                <AgencyAgentCard key={index} agentImage={Agent} agentName={item.memberId.username} department={item.memberId.job} phoneNumber={item.memberId.phone} email={item.memberId.email} />
                                            ))}
                                </section>}
                            </section>
                        </section>

                        <section className='latest'>
                            <div className={'membersCard'}>
                                <p className={'f20 headerColor boldText  pb20'}>Latest Properties</p>
                                <ul>
                                    {Object.keys(properties).length !== 0 && properties.docs.map((property, index) => {
                                        const { propertyTitle, price, bed, bath, homeArea, gallery, _id } = property

                                        if (index < 4) {
                                            return (
                                                <li key={index} onClick={() => {selectResourceType(_id)}} className={'flex alignCenter pb20'}>
                                                    <div className='latestPropertiesImage cPointer'>
                                                        <img src={gallery[0]} alt='home' style={{ width: '100%', height: '100%', borderRadius: '6px' }} />
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