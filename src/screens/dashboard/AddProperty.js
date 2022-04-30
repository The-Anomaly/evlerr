import React, { useState } from 'react'
import RenderNav from '../../components/nav/RenderNav'
import CustomInput from '../../utils/CustomInput'
import Loading from '../../utils/Loading'
import '../../assets/style/SubmissionStyles.css';
import SimpleMap from '../../utils/Map';
import CustomButton from '../../utils/CustomButton';
import { MdDone } from 'react-icons/md';


const AddProperty = () => {

    const [state, setState] = useState({ loading: false, dryer: false, fridge: false, barbeque: false, air: false, tv: false, washer: false, sauna: false, wifi: false, })

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
                            <CustomInput label={'Property Title'} />
                            <CustomInput label={'Type'} />
                            <CustomInput label={'Property Description'} customStyle={{ height: '200px' }} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Additional</p>

                        <div className='packagesGrid'>
                            <CustomInput label={'Property ID'} />
                            <CustomInput label={'Parent property'} />
                            <CustomInput label={'Status'} />
                            <CustomInput label={'Label'} />
                            <CustomInput label={'Materials'} />
                            <CustomInput label={'Rooms'} />
                            <CustomInput label={'Beds'} />
                            <CustomInput label={'Baths'} />
                            <CustomInput label={'Garages'} />
                            <CustomInput label={'Year built'} />
                            <CustomInput label={'Home area (sqft)'} />
                            <CustomInput label={'Lot dimensions'} />
                            <CustomInput label={'Lot area (sqft)'} />

                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Select Energy Class</p>

                        <div className='packagesGrid'>
                            <CustomInput label={'Energy Class'} />
                            <CustomInput label={'Energy Index in kWh/m2a'} />
                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Price</p>

                        <div className='packagesGrid'>
                            <CustomInput label={'Price ($)'} />
                            <CustomInput label={'Price Prefix'} />
                            <CustomInput label={'Price Suffix'} />
                            <CustomInput label={'Price Custom'} />

                        </div>
                    </section>

                    <section className={'membersCard'} style={{ marginTop: '30px' }}>
                        <p className={'f22 boldText headerColor pb30'}>Location</p>

                        <div>
                            <CustomInput label={'Regions'} />
                            <CustomInput label={'Friendly Address'} />
                            <CustomInput label={'Map Location'} />
                        </div>
                        <div style={{ height: '400px' }}>
                            <SimpleMap />
                        </div>
                        <div style={{ width: '70%', marginTop: '20px' }} className={'packagesGrid'}>
                            <CustomInput placeholder={'Latitude'} />
                            <CustomInput placeholder={'Longitude'} />
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
                            <CustomInput label={'Video Link'} />
                            <CustomInput label={'Virtual Tour'} customStyle={{ height: '200px' }} />
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
                    <CustomButton title={'Save & Preview'} color={'#fff'} customStyle={{ backgroundColor: '#ff5a5f', width: '120px', }} />
                </div>
            </main>
        </RenderNav>
    )
}

export default AddProperty