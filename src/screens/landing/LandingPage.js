import React from 'react'
import NavBar from '../../components/nav/Nav';
import '../../assets/style/LandingPageStyles.css';
import '../../assets/style/GeneralStyles.css';
import SearchComponent from '../../components/landingPage/SearchComponent';
import SearchSelector from '../../components/landingPage/SearchSelector';
import FeaturedPropertiesSlider from '../../components/landingPage/FeaturePropertiesSlider';
import FeaturedCarousel from '../../components/landingPage/FeaturePropertiesSlider';
import CitiesCard from '../../components/cards/CitiesCard';
import Florida from '../../assets/images/florida.jpeg';
import CustomButton from '../../utils/CustomButton';
import PropertyCards from '../../components/cards/PropertyCards';
import Home from '../../assets/images/home.jpeg';
import Agent from '../../assets/images/agent.jpeg';
import AgentsCard from '../../components/cards/AgentsCard';
import ContactComponent from '../../components/contact/ContactComponent';

const LandingPage = () => {
    return (
        <>
            <NavBar />
            <main className='landingContainer'>
                <section className='heroContainer'>
                    <div className='heroOverlay'>
                        <div className='heroContent'>
                            <div>
                                <h2 className={'boldText f55 white'} style={{ paddingBottom: '10px' }}>Your property, Our priority.</h2>
                                <p className='regularText f18 white'>From as low as $10 per day with limited time offer discounts</p>
                            </div>
                            <div className='heroSearchContainer'>
                                <div className='selectorBox'>
                                    <SearchSelector title={'Rent'} textColor={'#fff'} backgroundColor={'#ff5a5f'} arrowDown={true} color={'#ff5a5f'} size={'40px'} />
                                    <SearchSelector title={'Sale'} backgroundColor={'#fff'} arrowDown={true} color={'#fff'} size={'40px'} />
                                </div>
                                <SearchComponent />
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
                        <CitiesCard cityImage={`url(${Florida})`} city={'Miami'} propertyAmount={'2'} />
                        <CitiesCard cityImage={`url(${Florida})`} city={'Los Angeles'} propertyAmount={'2'} />
                        <CitiesCard cityImage={`url(${Florida})`} city={'New York'} propertyAmount={'9'} />
                        <CitiesCard cityImage={`url(${Florida})`} city={'Florida'} propertyAmount={'1'} />
                        <CitiesCard cityImage={`url(${Florida})`} city={'Orlando'} propertyAmount={'0'} />
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
            </main>
        </>
    )
}

export default LandingPage