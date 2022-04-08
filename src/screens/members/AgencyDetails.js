import React, { Suspense, useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
// import Breadcrumbs from '../../utils/Breadcrumb'
import '../../assets/style/PropertyStyles.css';
import Home from '../../assets/images/home.jpeg';
import SortCard from '../../components/cards/SortCard';
import FilterModal from '../../components/modals/FilterModal';
import PropertyGridCards from '../../components/cards/PropertyGridCards';
import Agent from '../../assets/images/agent.jpeg';
import Agency from '../../assets/images/agencyImage.jpeg';
import '../../assets/style/MemberStyles.css';
import AgencyDetailsCard from '../../components/cards/AgencyDetailsCard';
import styled from 'styled-components';
import AgencyAgentCard from '../../components/cards/AgencyAgentsCard';


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
    const [active, setActive] = useState(types[0]);

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

    return (
        // <Breadcrumbs />
        <>
            <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
                <section className='propertiesHomeContainer'>
                    <section >
                        <div>
                            <div className={'flex justifyBetween alignCenter pb40'}>
                                <AgencyDetailsCard agentImage={Agency} agentName={'James Fallen'} department={'Sales'} phoneNumber={'932323432'}
                                    email={'jamesfallen@mail.com'} agencyAddress={'333 NW 26th St, Miami'} />
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
                            {types.map(type => (
                                <Tab
                                    key={type}
                                    active={active === type}
                                    onClick={() => setActive(type)}
                                    className={' headerColor semiBoldText'}
                                >
                                    {type}
                                </Tab>
                            ))}
                        </ButtonGroup>
                        {active === 'Overview' && <section className={'pt40'}>
                            <article>

                                <p className={'f14 headerColor mediumText pb30 pl10'}>
                                    Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views.
                                    You need to see the views to believe them. Mint condition with new hardwood floors.
                                    Lots of closets plus washer and dryer.
                                </p>
                                <p className={'f14 headerColor mediumText pb30 pl10'}>
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
                                </p>
                            </article>
                        </section>}
                        {active === 'Properties' && <section className={'pt40'}>

                            <Suspense fallback={'Loading...'}>

                                {state.filter === 'All' &&
                                    <section className='propertiesGridFull '>

                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />

                                    </section>

                                }
                                {state.filter === 'Rent' &&

                                    <section className='propertiesGridFull'>

                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Rent'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />

                                    </section>
                                }
                                {state.filter === 'Sale' &&

                                    <section className='propertiesGridFull'>

                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />
                                        <PropertyGridCards
                                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'}
                                        />

                                    </section>

                                }
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

            </RenderNav>
            <FilterModal visible={state.visible} closeModal={closeFilterModal} />

        </>
    )
}

export default AgencyDetails