import React, { Suspense, useEffect, useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
// import Breadcrumbs from '../../utils/Breadcrumb'
import '../../assets/style/PropertyStyles.css';
import SortCard from '../../components/cards/SortCard';
import FilterModal from '../../components/modals/FilterModal';
import AgentDisplayCard from '../../utils/AgentDisplayCard';
import http from '../../Utils';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../../redux/actions/PropertiesAction';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Pagination from '../../utils/Pagination';
import { SpinnerCircularFixed } from 'spinners-react';




const AgenciesDisplay = () => {

    const [state, setState] = useState({
        sortDrop: false,
        agents: [], loading: true, agentsXtra: {},
        sortItem: [{ id: 1, name: 'Default' }, { id: 2, name: 'Newest' }, { id: 3, name: 'Oldest' }, { id: 6, name: 'Random' }], 
        filter: 'All', filterDrop: false,
        selected: 'Default', visible: false, filterItem: [{ id: 1, name: 'All' }, { id: 2, name: 'Rent' }, { id: 2, name: 'Sale' },],
    })

    const properties = useSelector((state) => state.properties.properties)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(properties)

    //fetch agents
    useEffect(() => {
        (async () => {
            const order = state.selected === 'Default' ? 'newest' : state.selected
            setState((prevState) => ({...prevState, loading: true}))
            try {
                const res = await http.get('/user/get-users', {role: 'agency', orderBy: order})
                setState((prevState) => ({...prevState, agents: res.data.docs, agentsXtra: res.data}))
                console.log(res)
            } catch (error) {
                toast.error('Sorry, could not gets agents', {
                    position: toast.POSITION.TOP_RIGHT
                })
                console.log(error)
            }
            
            
            if (!Object.keys(properties).length) {
                // submit()
                try {
                    const propsResponse = await dispatch(getProperties())
                    console.log('fetch props', propsResponse)
                } catch (error) {
                    toast.error('Sorry, could not gets latest properties', {
                        position: toast.POSITION.TOP_RIGHT
                    })    
                    console.log(error)
                }
                // console.log('im empty')
            }
            setState((prevState) => ({...prevState, loading: false}))
        })()

    }, [dispatch, properties, state.selected])
    
    const renderLoading = () => {
        if (state.loading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <SpinnerCircularFixed size={'40px'} color="rgba(255, 90, 95, 1)" secondaryColor="rgba(172, 57, 57, 0.58)" speed={150} />
                </div>
            )
        }
    }


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

    // const showFilterModal = () => {
    //     setState((prevState) => ({ ...prevState, visible: true }))
    // }
    const closeFilterModal = () => {
        setState((prevState) => ({ ...prevState, visible: false }))
    }

    function selectResourceType(propId) {
        // setState((prevState) => ({ ...prevState, resourceId: propId._id }))
        // console.log(state.propIdue)÷
        // console.log(propId._id)
        if (propId) {
            navigate('/properties-details', { state: { propertyId: propId } })
        }

    }


    const paginate = async (page) => {
        const order = state.selected === 'Default' ? 'newest' : state.selected
        setState((prevState) => ({...prevState, loading: true}))
        try {
            const res = await http.get('/user/get-users', {role: 'agency', orderBy: order, page: page})
            setState((prevState) => ({...prevState, agents: res.data.docs, agentsXtra: res.data}))
            console.log(res)
        } catch (error) {
            toast.error('Sorry, could not gets agents', {
                position: toast.POSITION.TOP_RIGHT
            })
            console.log(error)
        }
        setState((prevState) => ({...prevState, loading: false}))
    }


    return (
        // <Breadcrumbs />
        <>
            <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
                <section className='propertiesHomeContainer agentSection'>
                    <section>
                        <section >
                            <div>
                                <div className={'flex justifyBetween alignCenter pb40'}>
                                    <div>
                                        <p className={'f30 headerColor boldText'}>Agencies</p>
                                    </div>
                                </div>
                                
                            </div>
                        </section>
                        <section className='flex pt20 agentNlatest'>
                            <section className='pr20 latest'>
                                <div className={'membersCard'}>
                                    <p className={'f20 headerColor boldText  pb20'}>Latest Properties</p>
                                    <ul>
                                        {Object.keys(properties).length !== 0 && properties.docs.map((property, index) => {
                                            const { propertyTitle, price, bed, bath, homeArea, featuredImage, _id } = property

                                            if (index < 4) {
                                                return (
                                                    <li key={index} onClick={() => {selectResourceType(_id)}} className={'flex alignCenter pb20'}>
                                                        <div className='latestPropertiesImage cPointer'>
                                                            <img src={featuredImage && featuredImage.url} alt='home' style={{ width: '100%', height: '100%', borderRadius: '6px' }} />
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
                            <section className='pl20 agent'>
                                <div>
                                    <SortCard remFilterBy={true} listCountOffset={(state.agentsXtra.page*state.agentsXtra.limit)-(state.agentsXtra.limit-1)} listCount={state.agents.length} result={state.agentsXtra.totalDocs} onClick={showSortDropDown} dropDown={state.sortDrop} value={state.selected} onClickFilter={showFilterDropDown}
                                        filterValue={state.filter} filterDropDown={state.filterDrop} filterList={state.filterItem}
                                        selectFilterType={selectFilterType} sortList={state.sortItem} selectSortType={selectSortType}
                                    ></SortCard>
                                </div>
                                <Suspense fallback={'Loading...'}>
                                    {state.loading ? renderLoading() : state.agents.map((agent, index) => 
                                        <AgentDisplayCard key={index} agentId={agent._id} photo={agent.profilePicture} name={agent.username} phone={agent.phone} email={agent.email} fax={agent.fax} web={agent.web} job={agent.job} agent={agent} />
                                    )}
                                    <Pagination paginationObj={state.agentsXtra} paginator={paginate} />
                                    
                                </Suspense>
                            </section>
                        </section>

                    </section>

                </section>

            </RenderNav >
            <FilterModal visible={state.visible} closeModal={closeFilterModal} />

        </>
    )
}

export default AgenciesDisplay