import React, { Suspense, useState, useEffect } from 'react'
import RenderNav from '../../components/nav/RenderNav'
// import Breadcrumbs from '../../utils/Breadcrumb'
import '../../assets/style/PropertyStyles.css';
import SortCard from '../../components/cards/SortCard';
import FilterModal from '../../components/modals/FilterModal';
import PropertyGridCards from '../../components/cards/PropertyGridCards';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Pagination from '../../utils/Pagination';
import { SpinnerCircularFixed } from 'spinners-react';
import http from '../../Utils';
import avatar from "../../assets/images/defAvatar.jpg";
import { toast } from 'react-toastify';


const PropertiesDisplay = () => {


    const [state, setState] = useState({
        sortDrop: false, propertyList: [], propertiesXtra: {}, loading: false,
        sortItem: [{ id: 1, name: 'Default' }, { id: 2, name: 'Newest' }, { id: 3, name: 'Oldest' },
        { id: 4, name: 'Lowest Price' }, { id: 5, name: 'Highest Price' }, { id: 6, name: 'Random' }], filter: 'All', filterDrop: false,
        selected: 'Default', visible: false, filterItem: [{ id: 1, name: 'All' }, { id: 2, name: 'Rent' }, { id: 2, name: 'Sale' },],
    })
    // const { properties } = useSelector(state => state.properties)

    
    const paginate = async (page) => {
        setState((state) => ({ ...state, loading: true }))
        const order = state.selected === 'Default' ? 'newest' : state.selected
        const obj = { page: page, orderBy: order, status: state.filter }
        try {
            const res = await http.get(`user/properties`, obj)
            const data = res.data
            setState({...state, propertyList: data.docs, propertiesXtra: data})
            console.log('resp: ', data)
        } catch (error) {
            toast.error('Sorry, could not gets properties', {
                position: toast.POSITION.TOP_RIGHT
            })
            console.log('catched error ', error)
        }
        setState((state) => ({ ...state, loading: false }))
    }


    useEffect(() => {
        (async () => {
            setState((state) => ({ ...state, loading: true }))
            const order = state.selected === 'Default' ? 'newest' : state.selected
            const obj = { page: 1, orderBy: order, status: state.filter }
            try {
                const res = await http.get(`user/properties`, obj)
                const data = res.data
                setState((state) => ({...state, propertyList: data.docs, propertiesXtra: data}))
                console.log('resp: ', data)
            } catch (error) {
                toast.error('Sorry, could not gets properties', {
                    position: toast.POSITION.TOP_RIGHT
                })
                console.log('catched error ', error)
            }
            setState((state) => ({ ...state, loading: false }))
        })()
    }, [state.selected, state.filter])
    
    // console.log(properties);
    const [data, setData] = useState({
        _id: ''
    })
    console.log(data)

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

    const navigate = useNavigate()

    // const goToPropertyDetails = () => {
    //     navigate('/properties-details')
    // }

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

    const renderLoading = () => {
        if (state.loading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <SpinnerCircularFixed size={'40px'} color="rgba(255, 90, 95, 1)" secondaryColor="rgba(172, 57, 57, 0.58)" speed={150} />
                </div>
            )
        }
    }



    return (
        // <Breadcrumbs />
        <>
            <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
                <section className='propertiesHomeContainer'>
                    <section >
                        <div>
                            <div className={'flex justifyBetween alignCenter pb40'}>
                                <div>
                                    <p className={'f30 headerColor boldText'}>Properties</p>
                                </div>
                                {/* <div className={'flex alignCenter'}>
                                    <div>
                                        <p className={'flex alignCenter saveLink headerColor f14'}>
                                            <span style={{ marginRight: '5px' }}><FavoriteBorderIcon /></span>
                                            Save Search
                                        </p>
                                    </div>
                                    <div>
                                        <ShowFilterButton onClick={showFilterModal} />
                                    </div>
                                </div> */}
                            </div>
                            <div className={'pt20'}>
                                <SortCard listCountOffset={(state.propertiesXtra.page*state.propertiesXtra.limit)-(state.propertiesXtra.limit-1)} listCount={state.propertyList.length} result={state.propertiesXtra.totalDocs} onClick={showSortDropDown} dropDown={state.sortDrop} value={state.selected} onClickFilter={showFilterDropDown}
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
                            </div>
                        </div>
                    </section>
                    <Suspense fallback={'Loading...'}>
                        <section className='propertiesGridFull'>
                            {!state.loading && state.propertyList.map((item) => (
                                <div key={item._id}>
                                    <PropertyGridCards
                                        type={'Featured'} leaseType={item.status} price={item.price} background={item.featuredImage && item.featuredImage.url}
                                        sqft={item.homeArea} baths={item.bath} beds={item.bed} location={item.friendlyAddress} detailsSubTitle={item.propertyTitle}
                                        detailsTitle={item.propertyType} years={'2'} agentImage={item.agentId.profilePicture ? item.agentId.profilePicture.url : avatar} agentName={item.agentId.username} onClick={() => selectResourceType(item)}
                                        onAgentClick={goToAgentDetails}
                                    />
                                </div>
                            ))}
                        </section>
                        
                    </Suspense>

                    {renderLoading()}
                    <div className="mt10">
                        <Pagination paginationObj={state.propertiesXtra} paginator={paginate} />
                    </div>

                </section>

            </RenderNav >
            <FilterModal visible={state.visible} closeModal={closeFilterModal} />

        </>
    )
}

export default PropertiesDisplay