import React, { useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
import CustomInput from '../../utils/CustomInput'
import Loading from '../../utils/Loading'
import '../../assets/style/SubmissionStyles.css';
import SimpleMap from '../../utils/Map';
import CustomButton from '../../utils/CustomButton';
import { MdDone } from 'react-icons/md';
import { connect } from 'react-redux';
import { uploadProperties } from '../../redux/actions/PropertiesAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddProperty = (props) => {

    const [state, setState] = useState({
        loading: false, dryer: false, fridge: false, barbeque: false, air: false, tv: false, washer: false, sauna: false, wifi: false,
        propertyTitle: "", propertyType: "", propertyDescription: "", propertyId: "", parentProperty: "",
        status: "", label: "", material: "", rooms: "", bed: "", bath: "", garage: "", yearBuilt: "", homeArea: "", energyClass: "",
        energyIndex: "", price: "", pricePrefix: "", priceSuffix: "", priceCustom: "", region: "", friendlyAddress: "", mapLocation: "", longtitude: "", latitude: "",
        featuredImage: {}, gallery: [], attachment: [], videoLink: "", amenities: [], facilities: [], valuation: [], floors: []
    })

    const navigate = useNavigate()

    const onChangePropertyTitle = (e) => {
        setState({ ...state, propertyTitle: e.target.value })
    }
    const onChangePropertyType = (e) => {
        setState({ ...state, propertyType: e.target.value })
    }
    const onChangePropertyDescription = (e) => {
        setState({ ...state, propertyDescription: e.target.value })
    }
    const onChangePropertyId = (e) => {
        setState({ ...state, propertyId: e.target.value })
    }
    const onChangeParentProperty = (e) => {
        setState({ ...state, parentProperty: e.target.value })
    }
    const onChangeStatus = (e) => {
        setState({ ...state, status: e.target.value })
    }
    const onChangeLabel = (e) => {
        setState({ ...state, label: e.target.value })
    }
    const onChangeMaterial = (e) => {
        setState({ ...state, material: e.target.value })
    }

    const onChangeRooms = (e) => {
        setState({ ...state, rooms: e.target.value })
    }

    const onChangeBed = (e) => {
        setState({ ...state, bed: e.target.value })
    }
    const onChangeBath = (e) => {
        setState({ ...state, bath: e.target.value })
    }
    const onChangeGarage = (e) => {
        setState({ ...state, garage: e.target.value })
    }
    const onChangeYear = (e) => {
        setState({ ...state, yearBuilt: e.target.value })
    }
    const onChangeArea = (e) => {
        setState({ ...state, homeArea: e.target.value })
    }
    const onChangeEnergyClass = (e) => {
        setState({ ...state, energyClass: e.target.value })
    }
    const onChangeEnergyIndex = (e) => {
        setState({ ...state, energyIndex: e.target.value })
    }
    const onChangePrice = (e) => {
        setState({ ...state, price: e.target.value })
    }
    const onChangePricePrefix = (e) => {
        setState({ ...state, pricePrefix: e.target.value })
    }
    const onChangePriceSuffix = (e) => {
        setState({ ...state, priceSuffix: e.target.value })
    }
    const onChangePriceCustom = (e) => {
        setState({ ...state, priceCustom: e.target.value })
    }
    const onChangeRegion = (e) => {
        setState({ ...state, region: e.target.value })
    }
    const onChangeAddress = (e) => {
        setState({ ...state, friendlyAddress: e.target.value })
    }
    const onChangeLocation = (e) => {
        setState({ ...state, mapLocation: e.target.value })
    }
    const onChangeLongitude = (e) => {
        setState({ ...state, longtitude: e.target.value })
    }
    const onChangeLatitude = (e) => {
        setState({ ...state, latitude: e.target.value })
    }


    const renderLoading = () => {
        if (state.loading) {
            return (
                <Loading />
            )
        }
    }

    const toggleAir = () => {
        if (state.air) {
            setState((prevState) => ({ ...prevState, air: false }))
        } else {
            setState((prevState) => ({ ...prevState, air: true }))
        }
    }


    const toggleFridge = () => {
        if (state.fridge) {
            setState((prevState) => ({ ...prevState, fridge: false }))
        } else {
            setState((prevState) => ({ ...prevState, fridge: true }))
        }
    }

    const toggleDryer = () => {
        if (state.dryer) {
            setState((prevState) => ({ ...prevState, dryer: false }))
        } else {
            setState((prevState) => ({ ...prevState, dryer: true }))
        }
    }


    const toggleBarbeque = () => {
        if (state.barbeque) {
            setState((prevState) => ({ ...prevState, barbeque: false }))
        } else {
            setState((prevState) => ({ ...prevState, barbeque: true }))
        }
    }

    const toggleTV = () => {
        if (state.tv) {
            setState((prevState) => ({ ...prevState, tv: false }))
        } else {
            setState((prevState) => ({ ...prevState, tv: true }))
        }
    }

    const toggleWasher = () => {
        if (state.washer) {
            setState((prevState) => ({ ...prevState, washer: false }))
        } else {
            setState((prevState) => ({ ...prevState, washer: true }))
        }
    }

    const toggleSauna = () => {
        if (state.sauna) {
            setState((prevState) => ({ ...prevState, sauna: false }))
        } else {
            setState((prevState) => ({ ...prevState, sauna: true }))
        }
    }

    const toggleWifi = () => {
        if (state.wifi) {
            setState((prevState) => ({ ...prevState, wifi: false }))
        } else {
            setState((prevState) => ({ ...prevState, wifi: true }))
        }
    }

    const submit = async (e) => {
        e.preventDefault()

        console.log('started')
        
        try{
            const res = await props.uploadProperties(state)
            if (res) {
                toast.success('SuccessFul', {
                    position: toast.POSITION.TOP_RIGHT
                })
                navigate('/submission');
            }
            console.log(res.message);
        } catch (error){
            toast.error(error[1].data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log('Upload failed: ', error)
        }

    }


    return (
        <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
            {renderLoading()}
            <main className='submissionContainer'>

                <section>
                    <div>
                        <h2 className={'f30 headerColor boldText pb30'}>Add New Property</h2>
                    </div>
                    <section className={'membersCard'}>
                        <p className={'f22 boldText headerColor pb30'}>Basic Information</p>
                        <div>
                            <CustomInput label={'Property Title'} value={state.propertyTitle} onChange={onChangePropertyTitle} name={'propertyTitle'} />
                            <CustomInput label={'Type'} value={state.propertyType} onChange={onChangePropertyType} name={'propertyType'} />
                            <CustomInput label={'Property Description'} customStyle={{ height: '200px' }} value={state.propertyDescription} onChange={onChangePropertyDescription} name={'propertyDescription'} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Additional</p>

                        <div className='packagesGrid'>
                            <CustomInput label={'Property ID'} value={state.propertyId} onChange={onChangePropertyId} name={'propertyId'} />
                            <CustomInput label={'Parent property'} value={state.parentProperty} onChange={onChangeParentProperty} name={'parentProperty'} />
                            <CustomInput label={'Status'} value={state.status} onChange={onChangeStatus} name={'status'} />
                            <CustomInput label={'Label'} value={state.value} onChange={onChangeLabel} name={'label'} />
                            <CustomInput label={'Materials'} value={state.material} onChange={onChangeMaterial} name={'material'} />
                            <CustomInput label={'Rooms'} value={state.rooms} onChange={onChangeRooms} name={'rooms'} />
                            <CustomInput label={'Beds'} value={state.bed} onChange={onChangeBed} name={'bed'} />
                            <CustomInput label={'Baths'} value={state.bath} onChange={onChangeBath} name={'bath'} />
                            <CustomInput label={'Garages'} value={state.garage} onChange={onChangeGarage} name={'garage'} />
                            <CustomInput label={'Year built'} value={state.yearBuilt} onChange={onChangeYear} name={'yearBuilt'} />
                            <CustomInput label={'Home area (sqft)'} value={state.homeArea} onChange={onChangeArea} name={'homeArea'} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Select Energy Class</p>

                        <div className='packagesGrid'>
                            <CustomInput label={'Energy Class'} value={state.energyClass} onChange={onChangeEnergyClass} name={'energyClass'} />
                            <CustomInput label={'Energy Index in kWh/m2a'} value={state.energyIndex} onChange={onChangeEnergyIndex} name={'energyIndex'} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Price</p>

                        <div className='packagesGrid'>
                            <CustomInput label={'Price ($)'} value={state.price} onChange={onChangePrice} name={'price'} />
                            <CustomInput label={'Price Prefix'} value={state.pricePrefix} onChange={onChangePricePrefix} name={'pricePrefix'} />
                            <CustomInput label={'Price Suffix'} value={state.priceSuffix} onChange={onChangePriceSuffix} name={'priceSuffix'} />
                            <CustomInput label={'Price Custom'} value={state.priceCustom} onChange={onChangePriceCustom} name={'priceCustom'} />

                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Location</p>

                        <div>
                            <CustomInput label={'Regions'} value={state.region} onChange={onChangeRegion} name={'region'} />
                            <CustomInput label={'Friendly Address'} value={state.friendlyAddress} onChange={onChangeAddress} name={'friendlyAddress'} />
                            <CustomInput label={'Map Location'} value={state.mapLocation} onChange={onChangeLocation} name={'mapLocation'} />
                        </div>
                        <div style={{ height: '400px' }}>
                            <SimpleMap />
                        </div>
                        <div style={{ width: '70%', marginTop: '20px' }} className={'packagesGrid'}>
                            <CustomInput placeholder={'Latitude'} value={state.latitude} onChange={onChangeLatitude} name={'latitude'} />
                            <CustomInput placeholder={'Longitude'} value={state.longtitude} onChange={onChangeLongitude} name={'longitude'} />
                        </div>
                    </section>
                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Media</p>
                        <div className={'pb30'}>
                            <p className={'f18 boldText headerColor pb10'}>Featured Image</p>
                            <CustomButton title={'Upload Files'} customStyle={{ backgroundColor: '#f7f7f7', border: '1px solid #ebebeb', width: '150px' }} />
                        </div>
                        <div className={'pb30'}>
                            <p className={'f18 boldText headerColor pb10'}>Gallery</p>
                            <CustomButton title={'Upload Files'} customStyle={{ backgroundColor: '#f7f7f7', border: '1px solid #ebebeb', width: '150px' }} />
                        </div>
                        <div className={'pb30'}>
                            <p className={'f18 boldText headerColor pb10'}>Attachments</p>
                            <CustomButton title={'Upload Files'} customStyle={{ backgroundColor: '#f7f7f7', border: '1px solid #ebebeb', width: '150px' }} />
                        </div>

                        <div>
                            <CustomInput label={'Video Link'} value={state.bed} onChange={onChangeBed} name={'bed'} />
                            <CustomInput label={'Virtual Tour'} customStyle={{ height: '200px' }} value={state.bed} onChange={onChangeBed} name={'bed'} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Amenities</p>
                        <ul className='packagesGrid'>
                            <li className={'f14 regularText headerColor flex alignCenter'} onClick={toggleAir}>
                                <span className='checkBoxBorder'>
                                    {state.air &&
                                        <MdDone color='#ff5a5f' className={'pr10'} />}
                                </span>
                                Air Conditioning
                            </li>
                            <li className={'f14 regularText headerColor flex alignCenter'} onClick={toggleBarbeque}>
                                <span className='checkBoxBorder'>
                                    {state.barbeque &&
                                        <MdDone color='#ff5a5f' className={'pr10'} />}
                                </span>
                                Barbeque
                            </li>
                            <li className={'f14 regularText headerColor flex alignCenter'} onClick={toggleDryer}>
                                <span className='checkBoxBorder'>
                                    {state.dryer &&
                                        <MdDone color='#ff5a5f' className={'pr10'} />}
                                </span>
                                Dryer
                            </li>
                            <li className={'f14 regularText headerColor flex alignCenter'} onClick={toggleFridge}>
                                <span className='checkBoxBorder'>
                                    {state.fridge &&
                                        <MdDone color='#ff5a5f' className={'pr10'} />}
                                </span>
                                Refrigerator
                            </li>
                            <li className={'f14 regularText headerColor flex alignCenter'} onClick={toggleSauna}>
                                <span className='checkBoxBorder'>
                                    {state.sauna &&
                                        <MdDone color='#ff5a5f' className={'pr10'} />}
                                </span>
                                Sauna
                            </li>
                            <li className={'f14 regularText headerColor flex alignCenter'} onClick={toggleTV}>
                                <span className='checkBoxBorder'>
                                    {state.tv &&
                                        <MdDone color='#ff5a5f' className={'pr10'} />}
                                </span>
                                TV Cable
                            </li>
                            <li className={'f14 regularText headerColor flex alignCenter'} onClick={toggleWasher}>
                                <span className='checkBoxBorder'>
                                    {state.washer &&
                                        <MdDone color='#ff5a5f' className={'pr10'} />}
                                </span>
                                Washer
                            </li>
                            <li className={'f14 regularText headerColor flex alignCenter'} onClick={toggleWifi}>
                                <span className='checkBoxBorder'>
                                    {state.wifi &&
                                        <MdDone color='#ff5a5f' className={'pr10'} />}
                                </span>
                                WiFi
                            </li>
                        </ul>
                    </section>

                </section>
                <div className={'pt40'}>
                    <CustomButton title={'Save & Preview'} onClick={submit} color={'#fff'} customStyle={{ backgroundColor: '#ff5a5f', width: '120px', }} />
                </div>
            </main>
        </RenderNav>
    )
}

// export default AddProperty
export default connect(null, { uploadProperties })(AddProperty)