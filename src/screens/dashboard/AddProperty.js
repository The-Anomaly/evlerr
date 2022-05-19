import React, { useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
import CustomInput from '../../utils/CustomInput'
import Loading from '../../utils/Loading'
import '../../assets/style/SubmissionStyles.css';
import SimpleMap from '../../utils/Map';
import CustomButton from '../../utils/CustomButton';
import Dropdown from '../../utils/Dropdown';
import CustomUploadInput from '../../utils/CustomUploadInput';
import { MdDone } from 'react-icons/md';
import { connect } from 'react-redux';
import { uploadProperties } from '../../redux/actions/PropertiesAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddProperty = (props) => {

    const [state, setState] = useState({
        loading: false, dryer: false, fridge: false, barbeque: false, air: false, tv: false, washer: false, sauna: false, wifi: false,
        propertyTitle: "", propertyType: "", propertyDescription: "", propertyId: "", parentProperty: "",
        status: "For Rent", label: "", material: "", rooms: "", bed: "", bath: "", garage: "", yearBuilt: "", homeArea: "", energyClass: "",
        energyIndex: "", price: "", pricePrefix: "", priceSuffix: "", priceCustom: "", region: "", friendlyAddress: "", mapLocation: "", longtitude: "", latitude: "",
        featuredImage: [], gallery: [], attachment: [], videoLink: "", amenities: [], facilities: [], valuation: [], floors: []
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
    const handleParentProperty = (val) => {
        setState({ ...state, parentProperty: val })
    }
    const handleStatus = (val) => {
        setState({ ...state, status: val })
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
    const handleEnergyClass = (val) => {
        setState({ ...state, energyClass: val })
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
    const handleRegion = (val) => {
        setState({ ...state, region: val })
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
    const onChangeVideoLink = (e) => {
        setState({ ...state, videoLink: e.target.value })
    }


    const renderLoading = () => {
        if (state.loading) {
            return (
                <Loading />
            )
        }
    }

    const delUpload = (index, where) => {
        setState((prevState) => ({ ...prevState, [where]: prevState[where].filter((val,id) => id !== index) }))
    }


    const toggleAir = () => {
        let str = 'air conditioning'
        if (state.air) {
            setState((prevState) => ({ ...prevState, air: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, air: true, amenities: [ ...prevState.amenities, str ] }))
        }
    }


    const toggleFridge = () => {
        let str = 'fridge'
        if (state.fridge) {
            setState((prevState) => ({ ...prevState, fridge: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, fridge: true, amenities: [ ...prevState.amenities, str ] }))
        }
    }

    const toggleDryer = () => {
        let str = 'dryer'
        if (state.dryer) {
            setState((prevState) => ({ ...prevState, dryer: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, dryer: true, amenities: [ ...prevState.amenities, str ] }))
        }
    }


    const toggleBarbeque = () => {
        let str = 'barbeque'
        if (state.barbeque) {
            setState((prevState) => ({ ...prevState, barbeque: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, barbeque: true, amenities: [ ...prevState.amenities, str ] }))
        }
    }

    const toggleTV = () => {
        let str = 'tv'
        if (state.tv) {
            setState((prevState) => ({ ...prevState, tv: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, tv: true, amenities: [ ...prevState.amenities, str ] }))
        }
    }

    const toggleWasher = () => {
        let str = 'washer'
        if (state.washer) {
            setState((prevState) => ({ ...prevState, washer: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, washer: true, amenities: [ ...prevState.amenities, str ] }))
        }
    }

    const toggleSauna = () => {
        let str = 'sauna'
        if (state.sauna) {
            setState((prevState) => ({ ...prevState, sauna: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, sauna: true, amenities: [ ...prevState.amenities, str ] }))
        }
    }

    const toggleWifi = () => {
        let str = 'wifi'
        if (state.wifi) {
            setState((prevState) => ({ ...prevState, wifi: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, wifi: true, amenities: [ ...prevState.amenities, str ] }))
        }
    }

    const submit = async (e) => {
        e.preventDefault()
        const { propertyTitle, propertyType, propertyDescription, propertyId, parentProperty, status, label, material, rooms, bed, bath, garage, yearBuilt, homeArea, energyClass, energyIndex, price, pricePrefix, priceSuffix, priceCustom, region, friendlyAddress, mapLocation, longtitude, latitude, featuredImage, gallery, attachment, videoLink, amenities, facilities, valuation, floors } = state
        let fImage = featuredImage[0]

        const formData = { propertyTitle, propertyType, propertyDescription, propertyId, parentProperty, status, label, material, rooms, bed, bath, garage, yearBuilt, homeArea, energyClass, energyIndex, price, pricePrefix, priceSuffix, priceCustom, region, friendlyAddress, mapLocation, longtitude, latitude, fImage, gallery, attachment, videoLink, amenities, facilities, valuation, floors }

        if (!propertyTitle) {
            toast.error('Property title cannot be empty', {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        } else if (!propertyDescription) {
            toast.error('Property description cannot be empty', {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        console.log(formData)
        
        try{
            const res = await props.uploadProperties(formData)
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
                            <CustomInput label={'Property Title *'} value={state.propertyTitle} onChange={onChangePropertyTitle} name={'propertyTitle'} />
                            <CustomInput label={'Type'} value={state.propertyType} onChange={onChangePropertyType} name={'propertyType'} />
                            <CustomInput label={'Property Description *'} customStyle={{ height: '200px' }} value={state.propertyDescription} onChange={onChangePropertyDescription} name={'propertyDescription'} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Additional</p>

                        <div className='packagesGrid'>
                            <CustomInput label={'Property ID'} value={state.propertyId} onChange={onChangePropertyId} name={'propertyId'} />
                            
                            <Dropdown label={'Parent property'} curSelect={state.parentProperty} options={['Diamond Manor Apartment', 'Quality House For Sale']} setSelect={handleParentProperty} />

                            <Dropdown label={'Status'} curSelect={state.status} options={['For Rent', 'For Sale']} setSelect={handleStatus} />


                            <CustomInput label={'Label'} value={state.value} onChange={onChangeLabel} name={'label'} />
                            <CustomInput label={'Materials'} value={state.material} onChange={onChangeMaterial} name={'material'} />
                            <CustomInput label={'Rooms'} type={'number'} value={state.rooms} onChange={onChangeRooms} name={'rooms'} />
                            <CustomInput label={'Beds'} type={'number'} value={state.bed} onChange={onChangeBed} name={'bed'} />
                            <CustomInput label={'Baths'} type={'number'} value={state.bath} onChange={onChangeBath} name={'bath'} />
                            <CustomInput label={'Garages'} type={'number'} value={state.garage} onChange={onChangeGarage} name={'garage'} />
                            <CustomInput label={'Year built'} type={'number'} value={state.yearBuilt} onChange={onChangeYear} name={'yearBuilt'} />
                            <CustomInput label={'Home area (sqft)'} value={state.homeArea} onChange={onChangeArea} name={'homeArea'} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Select Energy Class</p>

                        <div className='packagesGrid'>
                        <Dropdown label={'Energy Class'} curSelect={state.energyClass} options={['A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']} setSelect={handleEnergyClass} />
                        <CustomInput label={'Energy Index in kWh/m2a'} value={state.energyIndex} onChange={onChangeEnergyIndex} name={'energyIndex'} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Price</p>

                        <div className='packagesGrid'>
                            <CustomInput label={'Price ($)'} value={state.price} onChange={onChangePrice} name={'price'} />
                            <CustomInput label={'Price Prefix'} value={state.pricePrefix} onChange={onChangePricePrefix} name={'pricePrefix'} subtitle={'Any text shown before price (for example: from).'} />
                            <CustomInput label={'Price Suffix'} subtitle={'Any text shown after price (for example: per night).'} value={state.priceSuffix} onChange={onChangePriceSuffix} name={'priceSuffix'} />
                            <CustomInput label={'Price Custom'} subtitle={'Any text instead of price (for example: by agreement). Prefix and Suffix will be ignored.'} value={state.priceCustom} onChange={onChangePriceCustom} name={'priceCustom'} />

                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Location</p>

                        <div>
                        <Dropdown label={'Regions'} curSelect={state.region} options={['Atlanta', 'Florida', 'Los Angeles', 'Miami', 'New York', 'Orlando']} setSelect={handleRegion} />

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
                            { state.featuredImage &&  state.featuredImage.map((val, index) => 
                            <span key={index} className={'fileUploadContainer'}>
                                <button className={'fileDelBtn'} onClick={() => delUpload(index, 'featuredImage')}>x</button>    
                                <img id={index} src={val.url} alt={''} style={{ maxWidth: '100%', height: '100%' }} />
                            </span> 
                            ) }
                            <CustomUploadInput fileState={state} handleState={setState} inputName={'featuredImage'} />
                        </div>


                        <div className={'pb30'}>
                            <p className={'f18 boldText headerColor pb10'}>Gallery</p>
                            { state.gallery &&  state.gallery.map((val, index) => 
                            <span key={index} className={'fileUploadContainer'}>
                                <button className={'fileDelBtn'} onClick={() => delUpload(index, 'gallery')}>x</button>    
                                <img id={index} src={val.url} alt={''} style={{ maxWidth: '100%', height: '100%' }} />
                            </span> 
                            ) }
                            <CustomUploadInput fileState={state} handleState={setState} multi={true} inputName={'gallery'} />
                        </div>


                        <div className={'pb30'}>
                            <p className={'f18 boldText headerColor pb10'}>Attachments</p>
                            { state.attachment &&  state.attachment.map((val, index) => 
                            <span key={index} className={'fileUploadContainer'}>
                                <button className={'fileDelBtn'} onClick={() => delUpload(index, 'attachment')}>x</button>    
                                <img id={index} src={val.url} alt={''} style={{ maxWidth: '100%', height: '100%' }} />
                            </span> 
                            ) }
                            <CustomUploadInput fileState={state} handleState={setState} multi={true} inputName={'attachment'} />
                        </div>

                        <div>
                            <CustomInput label={'Video Link'} value={state.videoLink} onChange={onChangeVideoLink} name={'bed'} />
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