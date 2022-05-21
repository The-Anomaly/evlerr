import React, { useState } from 'react'
import ImagePicker from '../../components/dashboard/ImagePicker'
import CustomButton from '../../utils/CustomButton'
import CustomInput from '../../utils/CustomInput'
import CustomInputDrop from '../../utils/CustomInputDrop'
import SimpleMap from '../../utils/Map'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import http from '../../Utils'
import Dropdown from '../../utils/Dropdown'
import { toast } from 'react-toastify';
import { UPDATE_USER } from '../../redux/Types'

const Profile = () => {

    const [state, setState] = useState({
        url: 'https://www.demoapus-wp1.com/homeo/agent/agent-yassine/', edit: false, data: null, fullScreen: false, loading: false, menuDrop: false
    })

    const user = useSelector((state) => state.auth.userInfo)

    const [formData, setFormData] = useState({ location: 'Select Country', username: user.username, fullName: user.fullName, socials: [{name: 'Select Social', url: ''}] })
    const dispatch = useDispatch()
    
    

    const showEdit = () => {
        setState((prevState) => ({ ...prevState, edit: true }))
    }
    const closeEdit = () => {
        setState((prevState) => ({ ...prevState, edit: false }))
    }

    const newNetwork = () => {
        setFormData({ ...formData, socials: [ ...formData.socials, { name: 'Select Social', url: '' } ] })
    }

    const deleteNetwork = (index) => {
        setFormData({ ...formData, socials: formData.socials.filter((val, ind) => ind !== index) })
    }

    
    const handleSocialName = (val, index) => {
        console.log('first')
        const newSocial = formData.socials.slice()
        newSocial[index] = { ...newSocial[index], name: val }
        setFormData({ ...formData, socials: newSocial })
    }

    const handleSocialUrl = (val, index = 0) => {
        console.log('first')
        const newSocial = formData.socials.slice()
        newSocial[index] = { ...newSocial[index], url: val }
        setFormData({ ...formData, socials: newSocial })
    }

    const handleLocation = (val) => {
        setFormData({ ...formData, location: val })
    }

    const uploadProfileImage = async (file) => {
        try {
            const res = await http.uploadFile('user/photo-uploader', file)
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
    }

    const submit = async (e) => {
        e.preventDefault()

        const { socials, fullName, location, username } = formData
        const sArray = []
        socials.map((val) => {
            sArray.push(val.url)
        })

        const fd = { sArray, fullName, location, username }
        // console.log(fd)
        // return

        setState({ ...state, loading: true })
        try {
            const res = await http.patch('user/update-profile', fd)
            dispatch({ type: UPDATE_USER, payload: res.data })
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            setState({ ...state, loading: false })
            toast.success('Saved', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log('profile update: ',res)
        } catch (error) {
            console.log(error)
            setState({ ...state, loading: false })
            toast.error('Something went wrong', {
                position: toast.POSITION.TOP_RIGHT
            });
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
                        <p className={'f14 boldText headerColor pb40'}>Featured Image</p>
                        <div>
                            <ImagePicker uploader={uploadProfileImage} />
                        </div>
                    </div>

                    <div className={'pt30'}>

                        <div>
                            <CustomInput label={'Full Name'} onChange={(e) => {setFormData({ ...formData, fullName: e.target.value })}} value={formData.fullName} />
                        </div>

                        <div>
                            <CustomInput label={'Username'} onChange={(e) => {setFormData({ ...formData, username: e.target.value })}} value={formData.username} />
                        </div>

                        <div>
                            <CustomInput label={'Description'} value={'Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.'} />
                        </div>

                        <div>
                            <CustomInput label={'Job'} value={'Marketing'} />
                        </div>
                        <div>
                            <CustomInput label={'E-mail'} value={user.email} />
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

                        <Dropdown label={'Location'} curSelect={formData.location} options={['Atlanta', 'Florida', 'Los Angeles', 'Miami', 'New York', 'Orlando']} setSelect={handleLocation} />
                    </div>

                    <div className={'pt30'}>
                        <p className={'f14 boldText headerColor pb20'}>Socials</p>
                        { formData.socials.map((val, index) => 
                            <CustomInputDrop placeholder={`Network ${index+1}`} inputValue={formData.socials[index]} changeUrl={handleSocialUrl} changeName={handleSocialName} index={index} delNetwork={deleteNetwork} icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                color={'#484848'}></CustomInputDrop>

                        ) }
                        <div className='addNetwork' style={{ marginBottom: '20px' }}>
                            <p onClick={newNetwork} className={'f14 regularText white'}>Add Another Network</p>
                        </div>
                    </div>

                    <div>
                        <CustomButton onClick={submit} title={'Save Profile'} loading={state.loading} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '100px' }} />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile





