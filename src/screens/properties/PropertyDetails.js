import React, { useEffect, useState } from 'react';
import RenderNav from '../../components/nav/RenderNav';
import { AiOutlineDownload, AiOutlineFilePdf, AiOutlinePrinter, AiOutlineShareAlt } from 'react-icons/ai';
import PropertyDetailsSlider from '../../components/properties/PropertyDetailsSlider';
import Tabs from '../../components/properties/Tabs';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdDone } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr'
import SimpleMap from '../../utils/Map';
import PropertyGridCards from '../../components/cards/PropertyGridCards';
import Home from '../../assets/images/home.jpeg';
import HomeTwo from '../../assets/images/slide2.jpeg';
import HomeThree from '../../assets/images/slider3.jpeg';
import Agent from '../../assets/images/agent.jpeg';
import CustomInput from '../../utils/CustomInput';
import CustomButton from '../../utils/CustomButton';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import CustomInputDrop from '../../utils/CustomInputDrop';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import Loading from '../../utils/Loading';
import http from '../../Utils';
import { getProperties } from '../../redux/actions/PropertiesAction';
// import { getProperties } from '../../redux/actions/PropertiesAction';
import { ImageGroup, Image } from 'react-fullscreen-image';


const PropertyDetails = () => {

    const [state, setState] = useState({
        value: 10, menuDrop: false, priceValue: { min: 0, max: 8000 }, loading: false, title: '', price: '', description: '',
        address: '', images: null,
    })
    //     friendlyAddress: "Lapta, Kyrenia, Kyrenia"
    // gallery: (7) ["'https://velesproperty.com/wp-content/uploads/2022/03/Velesproperty-SA-2811-1-1170x600.jpg'", " 'https://velesproperty.com/wp-content/uploads/2022/03/Velesproperty-SA-2813-1-1170x600.jpg'", " 'https://velesproperty.com/wp-content/uploads/2022/03/Velesproperty-SA-2814-1-1170x600.jpg'", " 'https://velesproperty.com/wp-content/uploads/2022/03/Velesproperty-SA-2815-1-1170x600.jpg'", " 'https://velesproperty.com/wp-content/uploads/2022/03/Velesproperty-SA-2816-1-1170x600.jpg'", " 'https://velesproperty.com/wp-content/uploads/2022/03/Velesproperty-SA-2817-1-1170x600.jpg'", " 'https://velesproperty.com/wp-content/uploads/2022/03/Velesproperty-SA-2818-1-1170x600.jpg'"]
    // price: "1.500 Â£/m2"
    // propertyDescription: "Description\n\nShopping area in Lapta is a super opportunity for those who are used to investing in non-residential fund! If you are interested in the option of investing in Northern CyprusÂ stores, then this offer will definitely interest you! And also, if you are considering investing in commercial real estate in Northern Cyprus, you should definitely take a closer look at this store.\nIt should be noted that the cost of commercial real estate for rent is high. In addition, the payback of such real estate is 10 years. Therefore, investing in commercial real estate in Northern Cyprus is a long-term project. Moreover, this option is perfect for different types of commercial delivery.\nIf you want to deal with flowers, open a pharmacy, office, travel agency, this option is very good. Or do you dream of opening a cafe, restaurant, shop, etc.\nThe retail space is located in a complex in Lapta in the suburbs of Kyrenia. The complex consists of three blocks of buildings. However, the complex has apartments 2 + 1 and 1 + 1 to choose from. In addition, on the ground floor there are shops for sale.\nSo, the shopping area in Lapta is waiting for you!\nWhen purchasing this area â Veles Property provides assistance not only in obtaining a residence permit, but a bank account, driverâs license and health insurance in Northern Cyprus!\nYou can find our videos onÂ YOUTUBE VELES.\nSubscribe to our TELEGRAM and INSTAGRAM and be the first to receive information about new objects, services, changes in legislation."
    // propertyTitle: "SC-011 Shopping area in Lapta"
    // region: "Kyrenia"

    const property = useLocation()
    console.log(property?.state.propertyId);
    const propertyId = property?.state.propertyId

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




    const getPropertyDetails = async () => {
        setState((prevState) => ({ ...prevState, loading: true }))
        try {
            // https://evlerr-api.herokuapp.com/api/v1/
            const res = await http.get(`user/view-property/${propertyId}`)
            const data = res.data
            console.log('Wallet activities ', res)
            setState((prevState) => ({
                ...prevState, loading: false, address: data.friendlyAddress, price: data.price,
                title: data.propertyTitle, description: data.propertyDescription, images: data.gallery
            }))
        } catch (error) {
            console.log('Error ', error)
            setState((prevState) => ({ ...prevState, loading: false }))
        }
        setState((prevState) => ({ ...prevState, loading: false }))
    }

    useEffect(() => {
        getPropertyDetails()
    }, [propertyId])

    return (
        <>
            <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
                {renderLoading()}
                <main>
                    <section className={'pt40 pb40 flex justifyBetween alignCenter pl70 pr70 flexResponsive paddingResponsive flexStart'}>
                        <div className={'pl50 paddingResponsive'}>
                            <p className={'f32 headerColor boldText pb10'}>{state.title}</p>
                            <p className={'f14 headerColor regularText'}>{state.address}</p>
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
                                <p className={'f32 headerColor boldText '}>{state.price}</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <ImageGroup>
                            <ul className="images">
                                {state.images && state.images.map(i => (
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
                    </section>

                    <section className='propertyDetailsLayout'>
                        <section>
                            <div className={'membersCard'}>
                                <div className={'flex alignCenter'}>
                                    <Tabs title={'Apartment'} color={'#ff5a5f'} />
                                    <Tabs title={'Beds: 3'} color={'#484848'} />
                                    <Tabs title={'Baths: 2'} color={'#484848'} />
                                    <Tabs title={'110 sqft'} color={'#484848'} />
                                </div>
                                <article>
                                    <p className={'f20 headerColor boldText pl10 pt30 pb30'}>Overview</p>
                                    <p className={'f14 headerColor mediumText pb30 pl10'}>
                                        {state.description}
                                    </p>

                                </article>
                                <hr />
                                <div>
                                    <p className={'f20 headerColor boldText pl10 pt30 pb30'}>Details</p>
                                    <ul className='doubleGridTemplate'>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Property ID:
                                            <span className={'boldText'}>
                                                HZ89
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Lot Area:
                                            <span className={'boldText'}>
                                                110 sqft
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Home Area:
                                            <span className={'boldText'}>
                                                90 sqft
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Lot dimensions:
                                            <span className={'boldText'}>
                                                5x25x15
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Rooms:
                                            <span className={'boldText'}>
                                                5
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Beds:
                                            <span className={'boldText'}>
                                                3
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Baths:
                                            <span className={'boldText'}>
                                                2
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Price:
                                            <span className={'boldText'}>
                                                $1200/mo
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Year built:
                                            <span className={'boldText'}>
                                                2018
                                            </span>
                                        </li>
                                        <li className={'flex justifyBetween alignCenter f14 headerColor regularText'}>
                                            Property Status:
                                            <span className={'boldText'}>
                                                For Rent
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                                <hr />
                                <div>
                                    <p className={'f20 headerColor boldText pl10 pt30 pb30'}>Attachments</p>
                                    <div className='doubleGridTemplate'>
                                        <div className={'flex alignCenter'}>
                                            <div className='attachmentIcon'>
                                                <AiOutlineFilePdf />
                                            </div>
                                            <div className={'flex alignCenter'}>
                                                <AiOutlineDownload color='#ff5a5f' className={'pr10'} />
                                                <p className={'f14 regularText headerColor'}>test_property.pdf</p>
                                            </div>
                                        </div>
                                        <div className={'flex alignCenter'}>
                                            <div className='attachmentIcon'>
                                                <IoDocumentTextOutline />
                                            </div>
                                            <div className={'flex alignCenter'}>
                                                <AiOutlineDownload color='#ff5a5f' className={'pr10'} />
                                                <p className={'f14 regularText headerColor'}>test_property.docx</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'membersCard '} style={{ margin: '30px 0' }}>
                                <p className={'f20 headerColor boldText pl10  pb30'}>Amenities</p>
                                <ul className='tripleGridTemplate'>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        <MdDone color='#ff5a5f' className={'pr10'} />
                                        Air Conditioning
                                    </li>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        <MdDone color='#ff5a5f' className={'pr10'} />
                                        Barbeque
                                    </li>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        <MdDone color='#ff5a5f' className={'pr10'} />
                                        Dryer
                                    </li>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        <MdDone color='#ff5a5f' className={'pr10'} />
                                        Refrigerator
                                    </li>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        <MdDone color='#ff5a5f' className={'pr10'} />
                                        Sauna
                                    </li>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        <MdDone color='#ff5a5f' className={'pr10'} />
                                        TV Cable
                                    </li>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        <MdDone color='#ff5a5f' className={'pr10'} />
                                        Washer
                                    </li>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        <MdDone color='#ff5a5f' className={'pr10'} />
                                        WiFi
                                    </li>
                                </ul>
                            </div>

                            <div className={'membersCard '} style={{ margin: '30px 0' }}>
                                <div className={'flex justifyBetween alignCenter pb30'}>
                                    <p className={'f20 headerColor boldText'}>Location</p>
                                    <p className={'f16 headerColor regularText flex alignCenter'}><span><GrLocation /></span>  318 E 84th St, New York</p>
                                </div>
                                <div style={{ height: '400px' }}>
                                    <SimpleMap />
                                </div>
                            </div>

                            <div className={'membersCard '} style={{ margin: '30px 0' }}>
                                <p className={'f20 headerColor boldText pl10  pb30'}>Facilities</p>
                                <ul className='tripleGridTemplate'>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        City center
                                        <span className={'boldText pl10'}>4km</span>
                                    </li>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        Hospital
                                        <span className={'boldText pl10'}>2km</span>
                                    </li>
                                    <li className={'f14 regularText headerColor flex alignCenter'}>
                                        Shop
                                        <span className={'boldText pl10'}>1.5km</span>
                                    </li>
                                </ul>
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
                                <p className={'f20 headerColor boldText  pb20'}>Contact Tom Wilson</p>
                                <div className={'flex alignCenter'}>
                                    <div className='agentImageContainer'>
                                        <img src={Agent} alt='agent' style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                                    </div>
                                    <div className={'pl10'}>
                                        <p className={'f14 boldText headerColor'}>Tom Wilson</p>
                                        <p className={'f14 regularText headerColor'}>91 456 9874</p>
                                        <p className={'f14 regularText headerColor'}>tomwilson@apus.com</p>
                                    </div>
                                </div>
                                <div className={'pt30'}>
                                    <CustomInput value={'Name'} />
                                    <CustomInput value={'E-mail'} />
                                    <CustomInput value={'Phone'} />
                                    <CustomInput value={'Message'} />
                                    <div>
                                        <CustomButton title={'Send Message'} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', }} />
                                    </div>
                                </div>
                            </div>
                            <div className={'membersCard'} style={{ margin: '30px 0' }}>
                                <p className={'f20 headerColor boldText  pb20'}>Advanced Search</p>
                                <section>
                                    <div>
                                        <CustomInput placeholder={'Keyword'} icon={<AiOutlineSearch color={'#484848'} size={22} />} />
                                    </div>
                                    <div >
                                        <CustomInput placeholder={'Location'} icon={<BiCurrentLocation color={'#484848'} size={22} />} />
                                    </div>

                                    <div className={'pt20'}>
                                        <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                            color={'#484848'} placeholder={'Region'}
                                        >

                                        </CustomInputDrop>
                                    </div>

                                    <div>
                                        <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                            color={'#484848'} placeholder={'Status'}
                                        >

                                        </CustomInputDrop>
                                    </div>

                                    <div>
                                        <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                            color={'#484848'} placeholder={'Type'}
                                        >

                                        </CustomInputDrop>
                                    </div>

                                    <div>
                                        <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                            color={'#484848'} placeholder={'Beds'}
                                        >

                                        </CustomInputDrop>
                                    </div>

                                    <div>
                                        <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                            color={'#484848'} placeholder={'Baths'}
                                        >

                                        </CustomInputDrop>
                                    </div>

                                    <div>
                                        <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                            color={'#484848'} placeholder={'Garages'}
                                        >

                                        </CustomInputDrop>
                                    </div>
                                    <div>
                                        <p className={'f14 regularText headerColor pb10'} style={{ textAlign: 'center' }}>From $ {state.priceValue.min} to $ {state.priceValue.max}</p>

                                        <InputRange
                                            maxValue={8000}
                                            minValue={0}
                                            value={state.priceValue}
                                            onChange={priceValue => setState({ priceValue })} />
                                    </div>

                                    <div className={'pt20'}>
                                        <CustomButton title={'Find Property'} customStyle={{ backgroundColor: '#f53c41' }} color={'#fff'} />
                                    </div>
                                </section>
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