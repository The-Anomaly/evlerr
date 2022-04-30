import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import RenderNav from '../../components/nav/RenderNav'
import CustomButton from '../../utils/CustomButton'
import CustomInput from '../../utils/CustomInput'
import CustomInputDrop from '../../utils/CustomInputDrop'
import SimpleMap from '../../utils/Map'
import '../../assets/style/PropertyStyles.css';
import SortCardTwo from '../../components/cards/SortCardTwo'
import PropertyListCards from '../../components/cards/PropertyListCard'
import PropertyGridCards from '../../components/cards/PropertyGridCards'
import Home from '../../assets/images/home.jpeg';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import Loading from '../../utils/Loading'
import { getProperties } from '../../redux/actions/PropertiesAction'

const PropertiesMap = (props) => {


    const navigate = useNavigate()
    const [state, setState] = useState({
        menuDrop: false, grid: true, list: false, loading: false,
    })

    const { properties } = props
    const showDropMenu = () => {
        if (state.menuDrop) {
            setState((prevState) => ({ ...prevState, menuDrop: false }))
        } else {
            setState((prevState) => ({ ...prevState, menuDrop: true }))
        }

    }
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

    const showGrid = () => {
        setState((prevState) => ({ ...prevState, grid: true, list: false }))
    }

    const showList = () => {
        setState((prevState) => ({ ...prevState, grid: false, list: true }))
    }

    const goToAgentDetails = () => {
        navigate('/agent-details')
    }

    const goToPropertyDetails = () => {
        navigate('/properties-details')
    }


    return (
        <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
            {renderLoading()}
            <main className={'propertiesMapContainers'}>
                <section className='mapContainer'>
                    <SimpleMap />
                </section>
                <section className={'pt30 pr30 pb30 pl30 propertiesDisplay'}>
                    <div className='searchGridContainer'>
                        <div>
                            <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                color={'#484848'} placeholder={'Filter by...'}>

                            </CustomInputDrop>
                        </div>

                        <div>
                            <CustomInput placeholder={'Enter Keyword...'} icon={<IoMdArrowDropdown size={22} color={'#fff'} />} />
                        </div>
                        <div>
                            <CustomButton title={'Search'} customStyle={{ backgroundColor: '#f53c41', height: '26px' }} color={'#fff'} />
                        </div>
                    </div>

                    <div>
                        <SortCardTwo listClick={showList} gridClick={showGrid} result={'6'} />
                    </div>


                    {/* <PropertyListCards /> */}
                    {state.grid && <section className='columnsGrid'>

                        {properties.map((item) => (
                            <PropertyGridCards
                                type={'Featured'} leaseType={'For Sale'} price={item.price} background={item.gallery[0]}
                                sqft={'480'} baths={'4'} beds={'4'} location={item.friendlyAddress} detailsSubTitle={item.propertyTitle}
                                detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                                onClick={goToPropertyDetails}
                            />
                        ))}

                        {/* <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        />
                        <PropertyGridCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        /> */}
                    </section>}

                    {state.list && <section className='listGrid'>

                        {properties.map((item) => (
                            <PropertyListCards
                                type={'Featured'} leaseType={'For Sale'} price={item.price} background={item.gallery[0]}
                                sqft={'480'} baths={'4'} beds={'4'} location={item.friendlyAddress} detailsSubTitle={item.propertyTitle}
                                detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                                onClick={goToPropertyDetails}
                            />
                        ))}
                        {/* <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        />   <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        />   <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        />   <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        />   <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        />   <PropertyListCards
                            type={'Featured'} leaseType={'For Sale'} price={'$6500'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Diamond Manor Apartment'}
                            detailsTitle={'Apartment'} years={'2'} agentImage={Home} agentName={'BlackGik'} onAgentClick={goToAgentDetails}
                            onClick={goToPropertyDetails}
                        /> */}
                    </section>}
                </section>
            </main>
        </RenderNav>
    )
}

const mapStateToProps = state => {
    const { properties } = state.properties;
    return { properties }
}

export default connect(mapStateToProps, { getProperties })(PropertiesMap)