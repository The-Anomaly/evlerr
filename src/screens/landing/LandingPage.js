import React, { useState } from 'react'
import NavBar from '../../components/nav/Nav';
import '../../assets/style/LandingPageStyles.css';
import '../../assets/style/GeneralStyles.css';
import SearchComponent from '../../components/landingPage/SearchComponent';
import SearchSelector from '../../components/landingPage/SearchSelector';
import FeaturedCarousel from '../../components/landingPage/FeaturePropertiesSlider';
import Florida from '../../assets/images/new.jpeg';
import Miami from '../../assets/images/new2.jpeg';
import NewYork from '../../assets/images/new3.jpeg';
import Cali from '../../assets/images/new4.jpeg';
import Mali from '../../assets/images/new5.jpeg';
import Pali from '../../assets/images/new6.jpeg';
import CustomButton from '../../utils/CustomButton';
import PropertyCards from '../../components/cards/PropertyCards';
import Home from '../../assets/images/home.jpeg';
import Agent from '../../assets/images/agent.jpeg';
import AgentsCard from '../../components/cards/AgentsCard';
import ContactComponent from '../../components/contact/ContactComponent';
import AlteCitiesCard from '../../components/cards/AlteCitiesCard';
import 'animate.css';
import RenderNav from '../../components/nav/RenderNav';


const LandingPage = () => {


    const [state, setState] = useState({
        rentSearch: true, saleSearch: false, activeBg: '#ff5a5f', inactiveBg: '#fff'
    })

    const showRentSearchBox = () => {
        setState((prevState) => ({ ...prevState, rentSearch: true, saleSearch: false, }))
    }

    const showSaleSearchBox = () => {
        setState((prevState) => ({ ...prevState, saleSearch: true, rentSearch: false }))
    }



    return (
        <>
            <RenderNav>
                <section className='landingContainer'>
                    <section className='heroContainer'>
                        <div className='heroOverlay'>
                            <div className='heroContent'>
                                <div>
                                    <h2 className={'boldText f55 white'} style={{ paddingBottom: '10px' }}>Your property, Our priority.</h2>
                                    <p className='regularText f18 white'>From as low as $10 per day with limited time offer discounts</p>
                                </div>
                                <div className='heroSearchContainer'>
                                    <div className='selectorBox'>
                                        <SearchSelector title={'Rent'} textColor={state.rentSearch ? '#fff' : '#000'} backgroundColor={state.rentSearch ? state.activeBg : state.inactiveBg}
                                            arrowDown={state.rentSearch ? true : false} color={state.rentSearch ? state.activeBg : state.inactiveBg} size={'40px'}
                                            onClick={showRentSearchBox}
                                        />
                                        <SearchSelector title={'Sale'} backgroundColor={state.saleSearch ? state.activeBg : state.inactiveBg}
                                            arrowDown={state.saleSearch ? true : false}
                                            color={state.saleSearch ? state.activeBg : state.inactiveBg}
                                            size={'40px'} onClick={showSaleSearchBox} textColor={state.saleSearch ? '#fff' : '#000'} />
                                    </div>
                                    {state.rentSearch &&
                                        <div className="animate__animated animate__fadeIn">
                                            <SearchComponent />
                                        </div>

                                    }
                                    {state.saleSearch && <div className="animate__animated animate__fadeIn">
                                        <SearchComponent />
                                    </div>}

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='featuredPropertiesContainer'>
                        <div className='featuredPropertiesHeader'>
                            <h2 className={'boldText f30 headerColor'} style={{ margin: '15px 0' }}>Featured Properties</h2>
                            <p className={'regularText f16 headerColor'}>Handpicked properties by our team</p>
                        </div>
                        <section>
                            <FeaturedCarousel />
                        </section>
                    </section>
                    <section>
                        <div className='FindPropertiesHeader'>
                            <h2 className={'boldText f30 headerColor'} style={{ margin: '15px 0' }}>Find Properties in These Cities</h2>
                            <p className={'regularText f16 headerColor'}>Handpicked properties by our team</p>
                        </div>
                        <section className='citiesGrid'>
                            <AlteCitiesCard cityImage={`url(${Florida})`} city={'Lefkosa'} propertyAmount={'2'} />
                            <AlteCitiesCard cityImage={`url(${Miami})`} city={'Kyrenia'} propertyAmount={'2'} />
                            <AlteCitiesCard cityImage={`url(${Cali})`} city={'Lefke'} propertyAmount={'2'} />
                            <AlteCitiesCard cityImage={`url(${Pali})`} city={'Gazimagusa'} propertyAmount={'2'} />
                            <AlteCitiesCard cityImage={`url(${Mali})`} city={'Nicosia'} propertyAmount={'2'} />
                            <AlteCitiesCard cityImage={`url(${NewYork})`} city={'Iskele'} propertyAmount={'2'} />

                        </section>
                    </section>

                    <section className='searchNowContainer'>
                        <div className='searchNowOverlay'>
                            <h2 className={'boldText f30 headerColor'} style={{ margin: '15px 0' }}>
                                Search Smarter, From Anywhere
                            </h2>
                            <p className={'regularText f16 headerColor'}>
                                Power your search with our Resideo real estate platform, for timely
                                listings and a seamless experience.
                            </p>
                            <CustomButton title={'Search Now'} customStyle={{
                                backgroundColor: '#fff', color: '#484848', borderRadius: '5px',
                                padding: '22px 50px', margin: '30px',
                            }} />
                        </div>
                    </section>

                    <section className='bestPropertyContainer'>
                        <div>
                            <h2 className={'boldText f30 headerColor'} style={{ margin: '15px 0' }}>
                                Best Property Value
                            </h2>
                            <p className={'regularText f16 headerColor'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <section className='bestPropertyGrid'>
                            <PropertyCards
                                type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                                sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                detailsTitle={'Apartment'}
                            />
                            <PropertyCards
                                leaseType={'For Sale'} price={'$6500'} background={Home}
                                sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                detailsTitle={'Apartment'}
                            />
                            <PropertyCards
                                leaseType={'For Rent'} price={'$6500'} background={Home}
                                sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                                detailsTitle={'Apartment'}
                            />
                        </section>
                    </section>

                    <section className='agentsContainer'>
                        <div>
                            <h2 className={'boldText f30 headerColor'} style={{ margin: '15px 0' }}>
                                Our Agents
                            </h2>
                            <p className={'regularText f16 headerColor'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <section className='agentsGridContainer'>
                            <AgentsCard agentName={'Agent Pakulla'} agentRating={'3'} agentRole={'Marketing'} background={Agent} />
                            <AgentsCard agentName={'Agent Pakulla'} agentRating={'3'} agentRole={'Marketing'} background={Agent} />
                            <AgentsCard agentName={'Agent Pakulla'} agentRating={'3'} agentRole={'Marketing'} background={Agent} />
                            <AgentsCard agentName={'Agent Pakulla'} agentRating={'3'} agentRole={'Marketing'} background={Agent} />
                            <AgentsCard agentName={'Agent Pakulla'} agentRating={'3'} agentRole={'Marketing'} background={Agent} />
                            <AgentsCard agentName={'Agent Pakulla'} agentRating={'3'} agentRole={'Marketing'} background={Agent} />
                        </section>
                    </section>

                    <section className='contactsSection'>
                        <ContactComponent />
                    </section>
                </section>
            </RenderNav>

        </>
    )
}

export default LandingPage