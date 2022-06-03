import React, { useEffect, useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
import CustomInput from '../../utils/CustomInput'
// import Loading from '../../utils/Loading'
import '../../assets/style/SubmissionStyles.css';
import CustomButton from '../../utils/CustomButton';
import Dropdown from '../../utils/Dropdown';
import CustomUploadInput from '../../utils/CustomUploadInput';
import { MdDone } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { editProperties } from '../../redux/actions/PropertiesAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CustomTextArea from '../../utils/CustomTextarea';
import { SELECT_PROPERTY } from '../../redux/Types';
import http from '../../Utils';
import ImagePicker from '../../components/dashboard/ImagePicker';


const EditProperty = () => {

    const property = useSelector((state) => state.properties.selectedProperty)
    const dispatch = useDispatch()
    const price = property.price.match(/\d+/)[0]
    const cur = property.price.match(/\D+/)[0]
    const [state, setState] = useState({
        loading: false, uploadImageLoading: false,
        dryer: property.amenities.some(val => val === 'dryer'), 
        fridge: property.amenities.some(val => val === 'fridge'), 
        barbeque: property.amenities.some(val => val === 'barbeque'), 
        air: property.amenities.some(val => val === 'air conditioning'), 
        tv: property.amenities.some(val => val === 'tv'), 
        washer: property.amenities.some(val => val === 'washer'), 
        sauna: property.amenities.some(val => val === 'sauna'), 
        wifi: property.amenities.some(val => val === 'wifi'),
        propertyTitle: property.propertyTitle, propertyType: property.propertyType, propertyDescription: property.propertyDescription, status: property.status, rooms: property.rooms, bed: property.bed, bath: property.bath, garage: property.garage, yearBuilt: property.yearBuilt, homeArea: property.homeArea, price: price, currency: cur, pricePrefix: property.pricePrefix, priceSuffix: property.priceSuffix, priceCustom: property.pricecustom, featuredImage: [], gallery: [...property.gallery], attachment: [...property.attachment], videoLink: "", amenities: [...property.amenities]
    })

    useEffect(() => {
        return () => {
            dispatch({type: SELECT_PROPERTY, payload: {}})
        }
    }, [dispatch])
    

    const navigate = useNavigate()

    const onChangePropertyTitle = (e) => {
        setState({ ...state, propertyTitle: e.target.value })
    }
    const handlePropertyType = (val) => {
        setState({ ...state, propertyType: val })
    }
    const onChangePropertyDescription = (e) => {
        setState({ ...state, propertyDescription: e.target.value })
    }
    const handleCurrency = (val) => {
        setState({ ...state, currency: val })
    }
    const handleStatus = (val) => {
        setState({ ...state, status: val })
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
    const onChangeVideoLink = (e) => {
        setState({ ...state, videoLink: e.target.value })
    }


    const delUpload = (index, where) => {
        setState((prevState) => ({ ...prevState, [where]: prevState[where].filter((val, id) => id !== index) }))
    }


    const toggleAir = () => {
        let str = 'air conditioning'
        if (state.air) {
            setState((prevState) => ({ ...prevState, air: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, air: true, amenities: [...prevState.amenities, str] }))
        }
    }


    const toggleFridge = () => {
        let str = 'fridge'
        if (state.fridge) {
            setState((prevState) => ({ ...prevState, fridge: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, fridge: true, amenities: [...prevState.amenities, str] }))
        }
    }

    const toggleDryer = () => {
        let str = 'dryer'
        if (state.dryer) {
            setState((prevState) => ({ ...prevState, dryer: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, dryer: true, amenities: [...prevState.amenities, str] }))
        }
    }


    const toggleBarbeque = () => {
        let str = 'barbeque'
        if (state.barbeque) {
            setState((prevState) => ({ ...prevState, barbeque: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, barbeque: true, amenities: [...prevState.amenities, str] }))
        }
    }

    const toggleTV = () => {
        let str = 'tv'
        if (state.tv) {
            setState((prevState) => ({ ...prevState, tv: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, tv: true, amenities: [...prevState.amenities, str] }))
        }
    }

    const toggleWasher = () => {
        let str = 'washer'
        if (state.washer) {
            setState((prevState) => ({ ...prevState, washer: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, washer: true, amenities: [...prevState.amenities, str] }))
        }
    }

    const toggleSauna = () => {
        let str = 'sauna'
        if (state.sauna) {
            setState((prevState) => ({ ...prevState, sauna: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, sauna: true, amenities: [...prevState.amenities, str] }))
        }
    }

    const toggleWifi = () => {
        let str = 'wifi'
        if (state.wifi) {
            setState((prevState) => ({ ...prevState, wifi: false, amenities: prevState.amenities.filter(amn => amn !== str) }))
        } else {
            setState((prevState) => ({ ...prevState, wifi: true, amenities: [...prevState.amenities, str] }))
        }
    }

    const uploadProfileImage = async (file) => {
        const fData = {photo: file, propertyField: 'featuredImage', id: property._id}
        // console.log(fData)
        // return
        setState({...state, uploadImageLoading: true})
        try {
            const res = await http.post('user/media-upload', fData, false)
            // dispatch({ type: UPDATE_USER, payload: res.data })
            // localStorage.setItem('userInfo', JSON.stringify(res.data))
            toast.success('Profile image uploaded', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log('profile image update: ', res.data)
        } catch (error) {
            console.log(error)
            toast.error('Unable to upload image', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        setState({...state, uploadImageLoading: false})
    }

    const submit = async (e) => {
        e.preventDefault()
        // return
        const { propertyTitle, propertyType, propertyDescription, status, rooms, bed, bath, garage, yearBuilt, homeArea, price, currency, pricePrefix,
            priceSuffix, priceCustom, videoLink, amenities } = state

        // let fImage = featuredImage[0]
        let newPrice = `${price} ${currency}`

        const formData = {
            propertyTitle, propertyType, propertyDescription,
         status, rooms, bed, bath, garage, yearBuilt,
            homeArea, price: newPrice, pricePrefix, priceSuffix, priceCustom,
            videoLink, amenities,
        }

        if (price === '' || propertyDescription === '' || rooms === '' 
            || bed === '' || garage === '' || bath === '' || garage === '' || yearBuilt === '' ||
            homeArea === '' || propertyTitle === '' || propertyType === '') {
            toast.error('All required fields cannot be empty', {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            // console.log('submitting')
            // return
            setState({...state, loading: true})
            try {
                const res = await dispatch(editProperties(property._id, formData))
                if (res) {
                    toast.success('Property updated succesfully', {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    navigate(-1);
                }
                console.log(res.message);
            } catch (error) {
                toast.error('Something went wrong, could not update property', {
                    position: toast.POSITION.TOP_RIGHT
                });
                console.log('Upload failed: ', error)
            }
            setState({...state, loading: false})
        }


    }


    return (
        <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
            {/* {renderLoading()} */}
            <main className='submissionContainer'>

                <section>
                    <div>
                        <h2 className={'f30 headerColor boldText pb30'}>Edit Property</h2>
                    </div>
                    <section className={'membersCard'} >
                        <p className={'f22 boldText headerColor pb30'}>Basic Information</p>
                        <div>
                            <div>
                                <CustomInput label={'Property Title'} value={state.propertyTitle} onChange={onChangePropertyTitle} name={'propertyTitle'} />
                            </div>
                            <div className={'pb30'}>
                                <Dropdown label={'Type'} curSelect={state.propertyType} options={['Residential', 'Commercial', 'Project']} setSelect={handlePropertyType} />
                            </div>
                            <CustomTextArea label={'Property Description'} customStyle={{ height: '200px', textAlign: "start" }} value={state.propertyDescription} onChange={onChangePropertyDescription}
                                name={'propertyDescription'} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Additional</p>

                        <div className='packagesGrid'>
                            {/* <CustomInput label={'Property ID'} value={state.propertyId} onChange={onChangePropertyId} name={'propertyId'} /> */}

                            <Dropdown label={'Status'} curSelect={state.status} options={['For Rent', 'For Sale', 'Short Stay']} setSelect={handleStatus} />

                            <CustomInput label={'Rooms'} type={'number'} value={state.rooms} onChange={onChangeRooms} name={'rooms'} />
                            <CustomInput label={'Beds'} type={'number'} value={state.bed} onChange={onChangeBed} name={'bed'} />
                            <CustomInput label={'Baths'} type={'number'} value={state.bath} onChange={onChangeBath} name={'bath'} />
                            <CustomInput label={'Garages'} type={'number'} value={state.garage} onChange={onChangeGarage} name={'garage'} />
                            <CustomInput label={'Year built'} type={'number'} value={state.yearBuilt} onChange={onChangeYear} name={'yearBuilt'} />
                            <CustomInput label={'Home area (sqft)'} value={state.homeArea} onChange={onChangeArea} name={'homeArea'} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Price</p>

                        <div className='packagesGrid'>
                            <CustomInput label={'Price'} type={'number'} value={state.price} onChange={onChangePrice} name={'price'} />
                            <Dropdown label={'Currency'} curSelect={state.currency} options={['USD', 'EUR', 'CAD', 'TRY']} setSelect={handleCurrency} />
                            <CustomInput label={'Price Prefix'} value={state.pricePrefix} onChange={onChangePricePrefix} name={'pricePrefix'} subtitle={'Any text shown before price (for example: from).'} />
                            <CustomInput label={'Price Suffix'} subtitle={'Any text shown after price (for example: per night).'} value={state.priceSuffix} onChange={onChangePriceSuffix} name={'priceSuffix'} />
                            <CustomInput label={'Price Custom'} subtitle={'Any text instead of price (for example: by agreement). Prefix and Suffix will be ignored.'} value={state.priceCustom} onChange={onChangePriceCustom} name={'priceCustom'} />

                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Media</p>


                        <div className={'pb30'}>
                            <p className={'f16 boldText black pb10'}>Featured Image</p>
                            {state.featuredImage && state.featuredImage.map((val, index) =>
                                <span key={index} className={'fileUploadContainer'}>
                                    <button className={'fileDelBtn'} onClick={() => delUpload(index, 'featuredImage')}>x</button>
                                    <img id={index} src={val.url} alt={''} style={{ maxWidth: '100%', height: '100%' }} />
                                </span>
                            )}
                            <ImagePicker uploader={uploadProfileImage} uploadLoading={state.uploadImageLoading} defImage={property.featuredImage ? {data_url: property.featuredImage.url} : ''} />
                        </div>


                        <div className={'pb30'}>
                            <p className={'f16 boldText black pb10'}>Gallery</p>
                            {state.gallery && state.gallery.map((val, index) =>
                                <span key={index} className={'fileUploadContainer'}>
                                    <button className={'fileDelBtn'} onClick={() => delUpload(index, 'gallery')}>x</button>
                                    <img id={index} src={val.url} alt={''} style={{ maxWidth: '100%', height: '100%' }} />
                                </span>
                            )}
                            <CustomUploadInput fileState={state} handleState={setState} multi={true} inputName={'gallery'} />
                        </div>


                        <div className={'pb30'}>
                            <p className={'f16 boldText black pb10'}>Attachments</p>
                            {state.attachment && state.attachment.map((val, index) =>
                                <span key={index} className={'fileUploadContainer'}>
                                    <button className={'fileDelBtn'} onClick={() => delUpload(index, 'attachment')}>x</button>
                                    <img id={index} src={val.url} alt={''} style={{ maxWidth: '100%', height: '100%' }} />
                                </span>
                            )}
                            <CustomUploadInput fileState={state} handleState={setState} multi={true} inputName={'attachment'} />
                        </div>

                        <div>
                            <CustomInput label={'Video Link'} value={state.videoLink} onChange={onChangeVideoLink} name={'videoLink'} />
                            {/* <CustomTextArea label={'Virtual Tour'} customStyle={{ height: '200px' }} value={state.bed} onChange={onChangeBed} name={'bed'} /> */}
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
                    <CustomButton title={'Save & Preview'} loading={state.loading} onClick={submit} color={'#fff'} customStyle={{ backgroundColor: '#ff5a5f', width: '120px', }} />
                </div>
            </main>
        </RenderNav>
    )
}

// export default EditProperty
export default EditProperty