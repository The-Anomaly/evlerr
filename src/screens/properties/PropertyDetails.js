import React, { useEffect, useState } from 'react';
import RenderNav from '../../components/nav/RenderNav';
import { AiOutlineDownload, AiOutlinePrinter, AiOutlineShareAlt } from 'react-icons/ai';
// import PropertyDetailsSlider from '../../components/properties/PropertyDetailsSlider';
import Tabs from '../../components/properties/Tabs';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdClose, MdDone } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr'
import SimpleMap from '../../utils/Map';
import PropertyGridCards from '../../components/cards/PropertyGridCards';
import Home from '../../assets/images/home.jpeg';
import HomeTwo from '../../assets/images/slide2.jpeg';
import HomeThree from '../../assets/images/slider3.jpeg';
import Agent from '../../assets/images/defAvatar.jpg';
import CustomButton from '../../utils/CustomButton';
import 'react-input-range/lib/css/index.css';
import { useLocation } from 'react-router-dom';
import Loading from '../../utils/Loading';
import http from '../../Utils';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { getProperties } from '../../redux/actions/PropertiesAction';
import { ImageGroup, Image } from 'react-fullscreen-image';
import { SELECT_USER } from '../../redux/Types';


const PropertyDetails = () => {

    const [state, setState] = useState({
        value: 10, menuDrop: false, priceValue: { min: 0, max: 8000 }, loading: true, showImages: false, property: {}, agent: {}
    })

    const property = useLocation()
    // console.log(property?.state.propertyId);
    const propertyId = property?.state.propertyId
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const showDropMenu = () => {
    //     if (state.menuDrop) {
    //         setState((prevState) => ({ ...prevState, menuDrop: false }))
    //     } else {
    //         setState((prevState) => ({ ...prevState, menuDrop: true }))
    //     }

    // }

    const renderLoading = () => {
        if (state.loading) {
            return (
                <Loading />
            )
        }
    }

    const toMemberDetail = (member) => {
        dispatch({type: SELECT_USER, payload: member})
        navigate('/member-details')
    }


    useEffect(() => {
        const getPropertyDetails = async () => {
            setState((prevState) => ({ ...prevState, loading: true }))
            try {
                const res = await http.get(`user/view-property/${propertyId}`)
                const data = res.data
                console.log('Wallet activities ', res)
                setState((prevState) => ({
                    ...prevState, loading: false, property: data, agent: data.agentId
                }))
            } catch (error) {
                console.log('Error ', error)
                setState((prevState) => ({ ...prevState, loading: false }))
            }
        }
        getPropertyDetails()
    }, [propertyId])


    const showImageGrid = () => {
        setState((prevState) => ({ ...prevState, showImages: true }))
    }

    const closeModal = () => {
        setState((prevState) => ({ ...prevState, showImages: false }))
    }

    return (
        <>
            <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
                {renderLoading()}
                <main>
                    <section className={'pt40 pb40 flex justifyBetween alignCenter pl70 pr70 flexResponsive paddingResponsive flexStart'}>
                        <div className={'pl50 paddingResponsive'}>
                            <p className={'f32 headerColor boldText pb10'}>{state.property.propertyTitle}</p>
                            <p className={'f14 headerColor regularText'}>{state.property.friendlyAddress}</p>
                        </div>
                        <div className={'pr50 flex alignCenter flexResponsive paddingResponsive flexStart'}>
                            <div>
                                <ul className={'flex alignCenter'}>
                                    <li className='controlTabs'>
                                        <AiOutlineShareAlt />
                                    </li>
                                    <li className='controlTabs'>
                                        <AiOutlinePrinter />
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className={'f32 headerColor boldText '}>{state.property.price}</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <section className='imagesContainerNew'>
                            <div className='imagesGrid'>
                                <img src={state.property.gallery && state.property.gallery[0]} style={{ width: '100%', height: '100%' }} alt='poster' />
                                <img src={state.property.gallery && state.property.gallery[1]} style={{ width: '100%', height: '100%' }} alt='poster' />
                                <img src={state.property.gallery && state.property.gallery[2]} style={{ width: '100%', height: '100%' }} alt='poster' />
                            </div>
                            <div className='imagesOverlayNew'>
                                <CustomButton title={'View Photos'} customStyle={{ backgroundColor: '#fff', cursor: 'pointer' }} color={'#ff5a5f'} onClick={showImageGrid} />
                            </div>
                        </section>

                        {state.showImages &&
                            <section className='modal animate__animated  animate__fadeIn'>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 0', }}>
                                    <MdClose size={32} style={{ background: '#fff', borderRadius: '6px', }} onClick={closeModal} />
                                </div>
                                <ImageGroup>
                                    <ul className="images">
                                        {state.property.gallery && state.property.gallery.map(i => (
                                            <li key={i}>
                                                <Image
                                                    src={i}
                                                    alt="nature"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </ImageGroup>


                            </section>}

                        {/*  */}
                    </section>

                    <section className='propertyDetailsLayout'>
                        <section>
                            <div className={'membersCard'}>
                                <div className={'flex alignCenter'}>
                                    <Tabs title={state.property.propertyType ? state.property.propertyType : 'Apartment'} color={'#ff5a5f'} />
                                    <Tabs title={'Beds: '+(state.property.bed ? state.property.bed : null)} color={'#484848'} />
                                    <Tabs title={'Baths: '+(state.property.bath ? state.property.bath : null)} color={'#484848'} />
                                    <Tabs title={state.property.homeArea ? state.property.homeArea+' sqft' : 'null'} color={'#484848'} />
                                </div>
                                <article>
                                    <p className={'f20 headerColor boldText pl10 pt30 pb30'}>Overview</p>
                                    <p className={'f14 headerColor mediumText pb30 pl10'}>
                                        {state.property.propertyDescription}
                                    </p>

                                </article>
                                <hr />
                                <div>
                                    <p className={'f20 headerColor boldText pl10 pt30 pb30'}>Details</p>
                                    <ul className='doubleGridTemplate'>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Property ID:
                                            <span className={'boldText'}>
                                                {state.property.propertyId}
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Home Area:
                                            <span className={'boldText'}>
                                            {state.property.homeArea}
                                            </span>
                                        </li>
                                        {/* <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Lot dimensions:
                                            <span className={'boldText'}>
                                            5x25x15
                                            </span>
                                        </li> */}
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Garages:
                                            <span className={'boldText'}>
                                            {state.property.garage}
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Rooms:
                                            <span className={'boldText'}>
                                            {state.property.rooms}
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Beds:
                                            <span className={'boldText'}>
                                            {state.property.bed}
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Baths:
                                            <span className={'boldText'}>
                                                {state.property.bath}
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Price:
                                            <span className={'boldText'}>
                                                {state.property.price}
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Year built:
                                            <span className={'boldText'}>
                                                {state.property.yearBuilt}
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Property Status:
                                            <span className={'boldText'}>
                                                {state.property.status}
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                                <hr />
                                <div>
                                    <p className={'f20 headerColor boldText pl10 pt30 pb30'}>Attachments</p>
                                    <div className='doubleGridTemplate'>
                                        {state.property.attachment && (state.property.attachment.length === 0 && 'No attachments')}
                                        {state.property.attachment && state.property.attachment.map((val, index) => 
                                            <div key={index} className={'flex alignCenter'}>
                                                <div className='attachmentIcon' title={val.url}>
                                                    <IoDocumentTextOutline />
                                                </div>
                                                <div className={'flex alignCenter'}>
                                                    <a href={val.url}>
                                                        <AiOutlineDownload color='#ff5a5f' className={'pr10'} />
                                                        <span className={'f14 regularText headerColor'}>Download file</span>
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={'membersCard '} style={{ margin: '30px 0' }}>
                                <p className={'f20 headerColor boldText pl10  pb30'}>Amenities</p>
                                <ul className='tripleGridTemplate'>

                                    {state.property.amenities && (state.property.amenities.length === 0 && 'No amenities')}
                                    {state.property.amenities && state.property.amenities.map((val, index) => 
                                        <li key={index} className={'f14 regularText headerColor flex alignCenter'}>
                                            <MdDone color='#ff5a5f' className={'pr10'} />
                                            {val}
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div className={'membersCard '} style={{ margin: '30px 0' }}>
                                <div className={'flex justifyBetween alignCenter pb30'}>
                                    <p className={'f20 headerColor boldText'}>Location</p>
                                    <p className={'f16 headerColor regularText flex alignCenter'}><span><GrLocation /></span>  {state.property.friendlyAddress}</p>
                                </div>
                                <div style={{ height: '400px' }}>
                                    <SimpleMap />
                                </div>
                            </div>

                            <div style={{ margin: '30px 0' }}>
                                <p className={'f20 headerColor boldText pl10  pb30'}>Related Properties</p>
                                <div className='columnsGrid'>
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
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className={'membersCard'}>
                                <p className={'f20 headerColor boldText  pb20'}>{state.agent.role === 'agent' ? 'Agent' : 'Agency'}</p>
                                <div className={'flex alignCenter'}>
                                    <div className='agentImageContainer'>
                                        <img src={state.agent.profilePicture ? state.agent.profilePicture.url : Agent} alt='agent' style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                                    </div>
                                    <div className={'pl10'}>
                                        <p className={'f14 boldText headerColor cPointer'} onClick={() => {toMemberDetail(state.agent)}}>{state.agent.username}</p>
                                        {state.agent.phone && <p className={'f14 regularText headerColor'}>{state.agent.phone}</p>}
                                        <p className={'f14 regularText headerColor'}>{state.agent.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'membersCard'} style={{ margin: '30px 0' }}>
                                <p className={'f20 headerColor boldText  pb20'}>Latest Properties</p>
                                <ul>
                                    <li className={'flex alignCenter pb20'}>
                                        <div className='latestPropertiesImage'>
                                            <img src={Home} alt='home' style={{ width: '100%', height: '100%', borderRadius: '6px' }} />
                                        </div>
                                        <div>
                                            <p className={'f16 headerColor boldText  pb10'}>Diamond Manor...</p>
                                            <p className={'f16 boldText  pb10 redText'}>$6500</p>
                                            <ul className={'flex alignCenter'}>
                                                <li className={'f14 headerColor boldText  pr10'}>Beds: 4</li>
                                                <li className={'f14 headerColor boldText  pr10'}>Baths: 2</li>
                                                <li className={'f14 headerColor boldText'}>sqft: 150</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className={'flex alignCenter pb20'}>
                                        <div className='latestPropertiesImage'>
                                            <img src={HomeTwo} alt='home' style={{ width: '100%', height: '100%', borderRadius: '6px' }} />
                                        </div>
                                        <div>
                                            <p className={'f16 headerColor boldText  pb10'}>Eaton Garth Penthouse</p>
                                            <p className={'f16  boldText  pb10 redText'}>$7500</p>
                                            <ul className={'flex alignCenter'}>
                                                <li className={'f14 headerColor boldText  pr10'}>Beds: 4</li>
                                                <li className={'f14 headerColor boldText  pr10'}>Baths: 1</li>
                                                <li className={'f14 headerColor boldText'}>sqft: 220</li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className={'flex alignCenter pb20'}>
                                        <div className='latestPropertiesImage'>
                                            <img src={HomeThree} alt='home' style={{ width: '100%', height: '100%', borderRadius: '6px' }} />
                                        </div>
                                        <div>
                                            <p className={'f16 headerColor boldText  pb10'}>Skyper Pool Apartment</p>
                                            <p className={'f16  boldText  pb10 redText'}>$1200<span className={'regularText'}>/mo</span></p>
                                            <ul className={'flex alignCenter'}>
                                                <li className={'f14 headerColor boldText  pr10'}>Beds: 3</li>
                                                <li className={'f14 headerColor boldText  pr10'}>Baths: 2</li>
                                                <li className={'f14 headerColor boldText'}>sqft: 110</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </section>
                </main>
            </RenderNav>
        </>
    )
}

export default PropertyDetails