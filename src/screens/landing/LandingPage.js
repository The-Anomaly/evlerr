import React, { Suspense, useEffect, useState } from 'react';
import '../../assets/style/LandingPageStyles.css';
import '../../assets/style/GeneralStyles.css';
import SearchComponent from '../../components/landingPage/SearchComponent';
import SearchSelector from '../../components/landingPage/SearchSelector';
import FeaturedCarousel from '../../components/landingPage/FeaturePropertiesSlider';
// import Florida from '../../assets/images/new.jpeg';
import Miami from '../../assets/images/new2.jpeg';
import NewYork from '../../assets/images/new3.jpeg';
import Cali from '../../assets/images/new4.jpeg';
import Mali from '../../assets/images/new5.jpeg';
import Pali from '../../assets/images/new6.jpeg';
import ContactComponent from '../../components/contact/ContactComponent';
import 'animate.css';
import RenderNav from '../../components/nav/RenderNav';
import BestPropertyCarousel from '../../components/landingPage/BestPropertySlider';
import { useNavigate } from 'react-router-dom';
import FilterModal from '../../components/modals/FilterModal';
import { getProperties } from '../../redux/actions/PropertiesAction';
import { connect } from 'react-redux';
import Loading from '../../utils/Loading';
import MostViewedPropertyCarousel from '../../components/landingPage/MostViewedSlider';
import CitiesCard from '../../components/cards/CitiesCard';

import BrandOne from '../../assets/images/brand1.png';
import BrandTwo from '../../assets/images/brand2.png';
import BrandThree from '../../assets/images/brand3.png';
import BrandFour from '../../assets/images/brand4.png';
import BrandFive from '../../assets/images/brand5.png';
import ArticlesCards from '../../components/cards/ArticlesCard';

import HomeOne from '../../assets/images/home.jpeg';
import HomeTwo from '../../assets/images/hometwo.jpeg';
import HomeThree from '../../assets/images/homethree.jpeg';
// import HomeOne from '../../assets/images/homefour.jpeg';





const LandingPage = (props) => {


    const [state, setState] = useState({
        rentSearch: true, saleSearch: false, shortLease: false, activeBg: '#ff5a5f', inactiveBg: '#fff', visible: false, loading: false
    })

    const { properties } = props
    // console.log('hello', properties)

    const showRentSearchBox = () => {
        setState((prevState) => ({ ...prevState, rentSearch: true, saleSearch: false, shortLease: false }))
    }

    const showSaleSearchBox = () => {
        setState((prevState) => ({ ...prevState, saleSearch: true, rentSearch: false, shortLease: false }))
    }
    const showShortLeaseSearchBox = () => {
        setState((prevState) => ({ ...prevState, saleSearch: false, rentSearch: false, shortLease: true }))
    }


    const navigate = useNavigate()
    const goToAgentDetails = () => {
        navigate('/agent-details')
    }
    const showFilterModal = () => {
        setState((prevState) => ({ ...prevState, visible: true }))
    }
    const closeFilterModal = () => {
        setState((prevState) => ({ ...prevState, visible: false }))
    }

    // const { wallet } = useSelector((state) => state.wallet);

    const renderLoading = () => {
        if (state.loading) {
            return (
                <Loading />
            )
        }
    }

    const submit = async () => {
        setState({ ...state, loading: true, })
        try {
            const res = await props.getProperties()
            console.log('hey', res[0].gallery)
            localStorage.setItem('properties', JSON.stringify(res))
            setState({ ...state, loading: false, })
        } catch (error) {
            // returnError(error)
            console.log('catched error ', error)
        }

    }

    useEffect(() => {
        submit()
    }, [getProperties])




    return (
        <>
            <RenderNav >
                {renderLoading()}
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

                                        <SearchSelector title={'Short lease'} backgroundColor={state.shortLease ? state.activeBg : state.inactiveBg}
                                            arrowDown={state.shortLease ? true : false}
                                            color={state.shortLease ? state.activeBg : state.inactiveBg}
                                            size={'40px'} onClick={showShortLeaseSearchBox} textColor={state.shortLease ? '#fff' : '#000'} />
                                    </div>
                                    {state.rentSearch &&
                                        <div className="animate__animated animate__fadeIn">
                                            <SearchComponent advancedClick={showFilterModal} />
                                        </div>

                                    }
                                    {state.saleSearch && <div className="animate__animated animate__fadeIn">
                                        <SearchComponent advancedClick={showFilterModal} />
                                    </div>}

                                    {state.shortLease && <div className="animate__animated animate__fadeIn">
                                        <SearchComponent advancedClick={showFilterModal} />
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
                            <FeaturedCarousel properties={properties} />
                        </section>
                    </section>

                    <section className='featuredPropertiesContainer'>
                        <div className='featuredPropertiesHeader'>
                            <h2 className={'boldText f30 headerColor textCenter'} style={{ margin: '15px 0' }}>Most Viewed Properties</h2>
                            <p className={'regularText f16 headerColor textCenter'}>Properties with the highest views</p>
                        </div>
                        <section>
                            {/* <FeaturedCarousel */}
                            <MostViewedPropertyCarousel properties={properties} />
                        </section>
                    </section>

                    <section>
                        <div className='FindPropertiesHeader'>
                            <h2 className={'boldText f30 headerColor'} style={{ margin: '15px 0' }}>Find Properties in These Cities</h2>
                            <p className={'regularText f16 headerColor'}>Handpicked properties by our team</p>
                        </div>
                        <section className='citiesGrid'>
                            {/* <AlteCitiesCard cityImage={`url(${Florida})`} city={'Lefkosa'} propertyAmount={'2'} /> */}
                            <CitiesCard cityImage={`url(${Miami})`} city={'Kyrenia'} propertyAmount={'2'} custom={{ gridArea: 'first' }} />
                            <CitiesCard cityImage={`url(${Cali})`} city={'Lefke'} propertyAmount={'2'} custom={{ gridArea: 'second' }} />
                            <CitiesCard cityImage={`url(${Pali})`} city={'Gazimagusa'} propertyAmount={'2'} custom={{ gridArea: 'third' }} />
                            <CitiesCard cityImage={`url(${Mali})`} city={'Nicosia'} propertyAmount={'2'} custom={{ gridArea: 'fourth' }} />
                            <CitiesCard cityImage={`url(${NewYork})`} city={'Iskele'} propertyAmount={'2'} custom={{ gridArea: 'fifth' }} />

                        </section>
                    </section>

                    {/* <section className='searchNowContainer'>
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
                    </section> */}

                    <section className='bestPropertyContainer'>
                        <div >
                            <h2 className={'boldText f30 white textCenter'} style={{ margin: '15px 0 5px 0' }}>
                                Best Property Value
                            </h2>
                            <p className={'regularText f16 white textCenter'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <section >
                            <Suspense fallback={<Loading />}>
                                <BestPropertyCarousel properties={properties} />
                            </Suspense>
                        </section>
                    </section>

                    <section className='featuredPropertiesContainer'>
                        <div className='featuredPropertiesHeader'>
                            <h2 className={'boldText f30 headerColor textCenter'} style={{ margin: '15px 0' }}>Articles & Tips</h2>
                            <p className={'regularText f16 headerColor textCenter'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <section className='articlesGrid'>
                            <ArticlesCards background={HomeOne} agentImage={HomeOne} date={'February 28, 2022 '} detailsSubTitle={'Redfin Ranks the Most Competitive  Neighborhoods of 2022'} detailsTitle={'Family House'}
                                custom={{ maxHeight: '370px', minHeight: '300px', }} onAgentClick={goToAgentDetails}
                            />
                            <ArticlesCards detailsSubTitle={'Housing Markets That Changed the  Most This Decade'} background={HomeTwo} agentImage={HomeTwo} date={'February 28, 2022 '} detailsTitle={'Apartment'}
                                custom={{ maxHeight: '370px', minHeight: '300px', }} onAgentClick={goToAgentDetails}
                            />
                            <ArticlesCards detailsSubTitle={'Redfin Unveils the Best Canadian  Cities for Biking'} background={HomeThree} agentImage={HomeThree} date={'February 28, 2022 '} detailsTitle={'Town House'}
                                custom={{ maxHeight: '370px', minHeight: '300px', }} onAgentClick={goToAgentDetails}
                            />
                        </section>

                    </section>


                    <section className='featuredPropertiesContainer'>
                        <div className='featuredPropertiesHeader'>
                            <h2 className={'boldText f30 headerColor textCenter'} style={{ margin: '15px 0' }}>Our Partners</h2>
                            <p className={'regularText f16 headerColor textCenter'}>We only work with the best companies around the globe</p>
                        </div>

                        <section className='agentsGridContainer'>
                            {/* <AgentsCard agentName={'Agent Pakulla'} agentRating={'3'} agentRole={'Marketing'} background={Agent} agentClick={goToAgentDetails} />
                            <AgentsCard agentName={'Agent Marlen'} agentRating={'3'} agentRole={'Sales'} background={AgentThree} agentClick={goToAgentDetails} />
                            <AgentsCard agentName={'Agent Jane'} agentRating={'3'} agentRole={'Valuating'} background={AgentTwo} agentClick={goToAgentDetails} />
                            <AgentsCard agentName={'Agent Paul'} agentRating={'3'} agentRole={'Sales'} background={Agent} agentClick={goToAgentDetails} />
                            <AgentsCard agentName={'Agent Kadosh'} agentRating={'3'} agentRole={'Inspecting'} background={AgentTwo} agentClick={goToAgentDetails} />
                            <AgentsCard agentName={'Agent Prince'} agentRating={'3'} agentRole={'Marketing'} background={Agent} agentClick={goToAgentDetails} /> */}
                            <div>
                                <img src={BrandOne} alt='poster' />
                            </div>
                            <div>
                                <img src={BrandTwo} alt='poster' />
                            </div>
                            <div>
                                <img src={BrandThree} alt='poster' />
                            </div>
                            <div>
                                <img src={BrandFour} alt='poster' />
                            </div>
                            <div>
                                <img src={BrandFive} alt='poster' />
                            </div>
                        </section>
                    </section>


                </section>
                <section className='contactsSection'>
                    <ContactComponent />
                </section>
            </RenderNav>
            <FilterModal visible={state.visible} closeModal={closeFilterModal} />

        </>
    )
}
const mapStateToProps = state => {
    const { properties } = state.properties;
    return { properties }
}

export default connect(mapStateToProps, { getProperties })(LandingPage)

// export default LandingPage