import React, { Suspense, useEffect, useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
// import Breadcrumbs from '../../utils/Breadcrumb'
import '../../assets/style/PropertyStyles.css';
import Home from '../../assets/images/home.jpeg';
import SortCard from '../../components/cards/SortCard';
import FilterModal from '../../components/modals/FilterModal';
import PropertyGridCards from '../../components/cards/PropertyGridCards';
import Agent from '../../assets/images/agent.jpeg';
// import Agency from '../../assets/images/agencyImage.jpeg';
import '../../assets/style/MemberStyles.css';
// import AgencyDetailsCard from '../../components/cards/AgencyDetailsCard';
import styled from 'styled-components';
import AgencyAgentCard from '../../components/cards/AgencyAgentsCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AgentDisplayCard from '../../utils/AgentDisplayCard';
import { SELECT_USER } from '../../redux/Types';


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
        sortItem: [{ id: 1, name: 'Default' }, { id: 2, name: 'Newest' }, { id: 3, name: 'Oldest' },
        { id: 4, name: 'Lowest Price' }, { id: 5, name: 'Highest Price' }, { id: 6, name: 'Random' }], filter: 'All', filterDrop: false,
        selected: 'Default', visible: false, filterItem: [{ id: 1, name: 'All' }, { id: 2, name: 'Rent' }, { id: 2, name: 'Sale' },],
    })
    const member = useSelector((state) => state.auth.selectedUser)
    const [active, setActive] = useState(types[0]);
    const [data, setData] = useState({
        _id: ''
    })
    console.log(data)
    const { properties } = useSelector(state => state.properties)
    const dispatch = useDispatch()

    useEffect(() => {
    
      return () => {
        dispatch({type: SELECT_USER, payload: {}})
      }
    }, [dispatch])
    

    const showSortDropDown = () => {
        if (state.sortDrop) {
            setState((prevState) => ({ ...prevState, sortDrop: false }))
        } else {
            setState((prevState) => ({ ...prevState, sortDrop: true }))
        }
    }

    const showFilterDropDown = () => {
        if (state.filterDrop) {
            setState((prevState) => ({ ...prevState, filterDrop: false }))
        } else {
            setState((prevState) => ({ ...prevState, filterDrop: true }))
        }
    }


    function selectSortType(val) {
        setState((prevState) => ({ ...prevState, selected: val.name, sortDrop: false }))
        // console.log(val)
    }
    function selectFilterType(val) {
        setState((prevState) => ({ ...prevState, filter: val.name, filterDrop: false }))
        // console.log(val)
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
    const goToAgentDetails = () => {
        navigate('/agent-details')
    }

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
                                    {active === 'Properties' &&
                                        <div className={'pt20 animate__animated animate__fadeIn'}>
                                            <SortCard result={'14'} onClick={showSortDropDown} dropDown={state.sortDrop} value={state.selected} onClickFilter={showFilterDropDown}
                                                filterValue={state.filter} filterDropDown={state.filterDrop} filterList={state.filterItem}
                                                selectFilterType={selectFilterType} sortList={state.sortItem} selectSortType={selectSortType}
                                            >
                                                {/* <div className={'pt10 pb10 pl10 pr10 bgWhite dropContent animate__animated animate__fadeIn'}>
                                                {state.filterItem.map((item) =>
                                                    <p key={item.id} className={'f14 regularText headerColor pb10'} onClick={() => selectFilterType(item)}>{item.name}</p>
                                                )}
                                            </div>
                                            <div>
                                                {state.sortItem.map((item) =>
                                                    <p key={item.id} className={'f14 regularText headerColor pb10'} onClick={() => selectSortType(item)}>{item.name}</p>
                                                )}
                                            </div> */}

                                            </SortCard>
                                        </div>}
                                </div>
                            </section>
                            <section className={'membersCard'}>
                                <ButtonGroup>
                                {types.map(type => {
                                    if (type === 'Agents' && member.role !== 'agency') {
                                        return false
                                    }
                                    return (
                                        <Tab
                                            key={type}
                                            active={active === type}
                                            onClick={() => setActive(type)}
                                            className={' headerColor semiBoldText'}
                                        >
                                            {type}
                                        </Tab>
                                    )})}
                                </ButtonGroup>
                                {active === 'Overview' && <section className={'pt40'}>
                                    <article>

                                        <p className={'f14 headerColor mediumText pb30 pl10'}>
                                            {member.description ? member.description : 'No description'}
                                        </p>
                                        {/* <p className={'f14 headerColor mediumText pb30 pl10'}>
                                            Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6.
                                            The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows.
                                            Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room.
                                            The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.
                                        </p>
                                        <p className={'f14 headerColor mediumText pb30 pl10'}>
                                            The second bedroom is a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area.
                                            Other features include rich herringbone floors, crown moldings and coffered ceilings throughout the apartment.
                                            1049 5th Avenue is a classic pre-war building located across from Central Park, the reservoir and The Metropolitan Museum.
                                            Elegant lobby and 24 hours doorman. This is a pet-friendly building.
                                        </p> */}
                                    </article>
                                </section>}
                                {active === 'Properties' && <section className={'pt40'}>

                                    <Suspense fallback={'Loading...'}>

                                        {state.filter === 'All' &&

                                            <section className='propertiesGridFull'>

                                                {properties.map((item) => (
                                                    <div key={item._id}>
                                                        <PropertyGridCards
                                                            type={'Featured'} leaseType={'For Rent'} price={item.price} background={item.gallery[2]}
                                                            sqft={'480'} baths={'4'} beds={'4'} location={item.friendlyAddress} detailsSubTitle={item.propertyTitle}
                                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onClick={() => selectResourceType(item)}
                                                            onAgentClick={goToAgentDetails}
                                                        />
                                                    </div>
                                                ))}

                                            </section>}
                                        {state.filter === 'Rent' &&

                                            <section className='propertiesGridFull'>
                                                {properties.map((item) => (
                                                    <div key={item._id}>
                                                        <PropertyGridCards
                                                            type={'Featured'} leaseType={'For Rent'} price={item.price} background={item.gallery[1]}
                                                            sqft={'480'} baths={'4'} beds={'4'} location={item.friendlyAddress} detailsSubTitle={item.propertyTitle}
                                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onClick={() => selectResourceType(item)}
                                                            onAgentClick={goToAgentDetails}
                                                        />
                                                    </div>
                                                ))}
                                            </section>}
                                        {state.filter === 'Sale' &&

                                            <section className='propertiesGridFull'>

                                                {properties.map((item) => (
                                                    <div key={item._id}>
                                                        <PropertyGridCards
                                                            type={'Featured'} leaseType={'For Rent'} price={item.price} background={item.gallery[0]}
                                                            sqft={'480'} baths={'4'} beds={'4'} location={item.friendlyAddress} detailsSubTitle={item.propertyTitle}
                                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onClick={() => selectResourceType(item)}
                                                            onAgentClick={goToAgentDetails}
                                                        />
                                                    </div>

                                                ))}
                                            </section>}


                                    </Suspense>

                                </section>}
                                {active === 'Agents' && <section className={'pt40 agentsGridTemplate'}>
                                    <AgencyAgentCard agentImage={Agent} agentName={'James Miller'} department={'Marketing'} phoneNumber={'938392911'} email={'jamesmiller@mail.com'} />
                                    <AgencyAgentCard agentImage={Agent} agentName={'James Miller'} department={'Marketing'} phoneNumber={'938392911'} email={'jamesmiller@mail.com'} />
                                    <AgencyAgentCard agentImage={Agent} agentName={'James Miller'} department={'Marketing'} phoneNumber={'938392911'} email={'jamesmiller@mail.com'} />
                                    <AgencyAgentCard agentImage={Agent} agentName={'James Miller'} department={'Marketing'} phoneNumber={'938392911'} email={'jamesmiller@mail.com'} />
                                    <AgencyAgentCard agentImage={Agent} agentName={'James Miller'} department={'Marketing'} phoneNumber={'938392911'} email={'jamesmiller@mail.com'} />
                                    <AgencyAgentCard agentImage={Agent} agentName={'James Miller'} department={'Marketing'} phoneNumber={'938392911'} email={'jamesmiller@mail.com'} />
                                    <AgencyAgentCard agentImage={Agent} agentName={'James Miller'} department={'Marketing'} phoneNumber={'938392911'} email={'jamesmiller@mail.com'} />

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