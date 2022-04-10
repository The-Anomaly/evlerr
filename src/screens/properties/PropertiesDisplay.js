import React, { Suspense, useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
// import Breadcrumbs from '../../utils/Breadcrumb'
import '../../assets/style/PropertyStyles.css';
import Home from '../../assets/images/home.jpeg';
import SortCard from '../../components/cards/SortCard';
import FilterModal from '../../components/modals/FilterModal';
import PropertyGridCards from '../../components/cards/PropertyGridCards';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PropertiesDisplay = () => {


    const [state, setState] = useState({
        sortDrop: false,
        sortItem: [{ id: 1, name: 'Default' }, { id: 2, name: 'Newest' }, { id: 3, name: 'Oldest' },
        { id: 4, name: 'Lowest Price' }, { id: 5, name: 'Highest Price' }, { id: 6, name: 'Random' }], filter: 'All', filterDrop: false,
        selected: 'Default', visible: false, filterItem: [{ id: 1, name: 'All' }, { id: 2, name: 'Rent' }, { id: 2, name: 'Sale' },],
    })
    const { properties } = useSelector(state => state.properties)
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
                            </div>
                        </div>
                    </section>
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

                </section>

            </RenderNav >
            <FilterModal visible={state.visible} closeModal={closeFilterModal} />

        </>
    )
}

export default PropertiesDisplay