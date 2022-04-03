import React, { useState } from 'react'
import ImagePicker from '../../components/dashboard/ImagePicker'
import CustomButton from '../../utils/CustomButton'
import CustomInput from '../../utils/CustomInput'
import CustomInputDrop from '../../utils/CustomInputDrop'
import SimpleMap from '../../utils/Map'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const Profile = () => {

    const [state, setState] = useState({
        url: 'https://www.demoapus-wp1.com/homeo/agency/324v-b-bggb/', edit: false, data: null, fullScreen: false, loading: false, menuDrop: false
    })

    const showEdit = () => {
        setState((prevState) => ({ ...prevState, edit: true }))
    }
    const closeEdit = () => {
        setState((prevState) => ({ ...prevState, edit: false }))
    }

    const showDropMenu = () => {
        if (state.menuDrop) {
            setState((prevState) => ({ ...prevState, menuDrop: false }))
        } else {
            setState((prevState) => ({ ...prevState, menuDrop: true }))
        }

    }

    return (
        <>
            <main className={'dashBg pl15 pr15 pt40 h100'}>
                <div className={'pb30'}>
                    <h2 className={'f34 boldText headerColor'}>Edit Profile</h2>
                </div>

                <section className={'membersCard'}>
                    <div>
                        <p className={'f14 boldText headerColor pb20'}>Profile Url</p>
                        <p className={'f14 regularText headerColor'}>{state.url} <span style={{ color: 'red' }} onClick={showEdit}>Edit</span></p>
                        {state.edit &&
                            <div className={'pt20'}>
                                <CustomInput value={state.url} />
                                <CustomButton title={'Save'} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '80px' }}
                                    onClick={closeEdit}
                                />
                            </div>
                        }
                    </div>

                    <div className={'pt30'}>
                        <p className={'f14 boldText headerColor pb40'}>Feature Image</p>
                        <div>
                            <ImagePicker />
                        </div>
                    </div>

                    <div className={'pt30'}>

                        <div>
                            <CustomInput label={'Full Name'} value={'Agency House'} />
                        </div>

                        <div>
                            <CustomInput label={'Description'} value={'Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.'} />
                        </div>

                        <div>
                            <CustomInput label={'E-mail'} value={'agency@apus.com'} />
                        </div>
                        <div>
                            <CustomInput label={'Web'} value={'apusthemes.com'} />
                        </div>
                        <div>
                            <CustomInput label={'Phone'} value={'081 123 456'} />
                        </div>
                        <div>
                            <CustomInput label={'Fax'} value={''} />
                        </div>
                        <div>
                            <CustomInput label={'Friendly Address'} value={'49 Nassau Ave Brooklyn, NY'} />
                        </div>
                        <div>
                            <CustomInput label={'Map Location'} value={'49 Nassau Ave Brooklyn, NY'} />
                            <div style={{ height: '400px' }}>
                                <SimpleMap />
                            </div>
                            <div className={'flex pt20 pb20 justifyBetween'} style={{ width: '450px' }}>
                                <CustomInput value={'40.723101'} />
                                <CustomInput value={'-73.952876'} />
                            </div>
                        </div>
                    </div>

                    <div className={'pt30'}>
                        <p className={'f14 boldText headerColor pb20'}>Socials</p>
                        <CustomInputDrop placeholder={'Network 1'} onClick={showDropMenu} menuDrop={state.menuDrop}
                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                            color={'#484848'}></CustomInputDrop>
                        <CustomInputDrop placeholder={'Network 1'} onClick={showDropMenu} menuDrop={state.menuDrop}
                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                            color={'#484848'}></CustomInputDrop>
                        <CustomInputDrop placeholder={'Network 1'} onClick={showDropMenu} menuDrop={state.menuDrop}
                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                            color={'#484848'}></CustomInputDrop>
                        <CustomInputDrop placeholder={'Network 1'} onClick={showDropMenu} menuDrop={state.menuDrop}
                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                            color={'#484848'}></CustomInputDrop>
                        <div className='addNetwork'>
                            <p className={'f14 regularText white'}>Add Another Network</p>
                        </div>
                    </div>
                    <div className={'pt30'}>
                        <p className={'f14 boldText headerColor pb20'}>Location</p>
                        <CustomInputDrop placeholder={'Select Country'} onClick={showDropMenu} menuDrop={state.menuDrop}
                            icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                            color={'#484848'}></CustomInputDrop>
                    </div>

                    <div>
                        <CustomButton title={'Save Profile'} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '100px' }} />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile





