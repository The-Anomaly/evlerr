import React, { useEffect, useState } from 'react'
import CustomButton from '../../utils/CustomButton'
import CustomInput from '../../utils/CustomInput'
import CustomInputDrop from '../../utils/CustomInputDrop'
import SimpleMap from '../../utils/Map'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import http from '../../Utils'
import { toast } from 'react-toastify';
import { UPDATE_USER } from '../../redux/Types'
import defaultAvatar from '../../assets/images/defAvatar.jpg'
import CustomTextArea from '../../utils/CustomTextarea'
import CustomUploadInput from '../../utils/CustomUploadInput'

const Profile = () => {

    const [state, setState] = useState({
        url: 'https://www.demoapus-wp1.com/homeo/agent/agent-yassine/', edit: false, data: null, fullScreen: false, loading: false, menuDrop: false, uploadImageLoading: false
    })

    const user = useSelector((state) => state.auth.userInfo)
    
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()
    
    useEffect(() => {
      const userSocials = user.socials ? user.socials : []
      setFormData({ username: user.username, fullName: user.fullName, email: user.email, description: user.description, job: user.job, web: user.web, phone: user.phone, fax: user.fax, friendlyAddress: user.friendlyAddress, mapLocation: user.mapLocation, location: user.location, socials: [...userSocials]})
    }, [user])
    
    

    // const showEdit = () => {
    //     setState((prevState) => ({ ...prevState, edit: true }))
    // }
    // const closeEdit = () => {
    //     setState((prevState) => ({ ...prevState, edit: false }))
    // }

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

    const handleInput = (e) => {
        switch (e.target.name) {
            case 'fullName':
            setFormData({ ...formData, fullName: e.target.value});
            break;
            
            case 'username':
            setFormData({ ...formData, username: e.target.value});
            break;
            
            case 'description':
            setFormData({ ...formData, description: e.target.value});
            break;
            
            case 'job':
            setFormData({ ...formData, job: e.target.value});
            break;
            
            case 'email':
            setFormData({ ...formData, email: e.target.value});
            break;
            
            case 'web':
            setFormData({ ...formData, web: e.target.value});
            break;
            
            case 'phone':
            setFormData({ ...formData, phone: e.target.value});
            break;
            
            case 'fax':
            setFormData({ ...formData, fax: e.target.value});
            break;
            
            case 'friendlyAddress':
            setFormData({ ...formData, friendlyAddress: e.target.value});
            break;
            
            case 'mapLocation':
            setFormData({ ...formData, map: e.target.value});
            break;
            
            
            default:
            alert('sorry, unknown field');
            break;
        }
    }


    const uploadProfileImage = async (e) => {
        let images = [...e.target.files]

        const fData = {photo: images[0]}
        console.log(fData)
        // return
        setState({...state, uploadImageLoading: true})
        try {
            const res = await http.post('user/photo-uploader', fData, false)
            dispatch({ type: UPDATE_USER, payload: res.data })
            localStorage.setItem('userInfo', JSON.stringify(res.data))
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
        // exclude socials till endpointed is fixed to accept object
        const obj = Object.fromEntries(Object.entries(formData).filter(([key, val]) => val !== undefined))
        // console.log(fd)
        // return

        setState({ ...state, loading: true })
        try {

            console.log(obj)
            const res = await http.patch('user/update-profile', obj)
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            dispatch({ type: UPDATE_USER, payload: res.data })
            setState({ ...state, loading: false })
            toast.success('Profile updated', {
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
                    {/* <div>
                        <p className={'f14 boldText headerColor pb20'}>Profile Url</p>
                        <p className={'f14 regularText headerColor'}>{state.url} <span style={{ color: 'red' }} onClick={showEdit}>Edit</span></p>
                        {state.edit &&
                            <div className={'pt20'}>
                                <CustomInput value={state.url} disabled={true} />
                                <CustomButton title={'Save'} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '80px' }}
                                    onClick={closeEdit}
                                />
                            </div>
                        }
                    </div> */}

                    <div className={'pt30'}>
                    <p className={'f16 boldText black pb10 mb10'}>Featured Image</p>
                        <div>
                            {/* <ImagePicker uploader={uploadProfileImage} uploadLoading={state.uploadImageLoading} defImage={user.profilePicture ? {data_url: user.profilePicture.url} : {data_url: defaultAvatar}} /> */}
                            { Object.keys(user).length ? (
                                <span className={'fileUploadContainer mb10'}>
                                    <button className={'fileDelBtn'}>x</button>
                                    <img src={user.profilePicture ? user.profilePicture.url : defaultAvatar} alt='user avatar' style={{ maxWidth: '100%', height: '100%' }} />
                                </span>
                            ) : ''}
                            <CustomUploadInput title={'Upload file'} restrict='image/*' id={'featuredImage'} onChange={uploadProfileImage} customStyle={{ backgroundColor: '#f7f7f7', border: '1px solid #ebebeb', width: '150px' }} uploadLoading={state.uploadImageLoading} />
                        </div>
                    </div>

                    <div className={'pt30'}>

                        <div>
                            <CustomInput label={'Full Name'} name={'fullName'} onChange={handleInput} value={formData.fullName} />
                        </div>

                        <div>
                            <CustomInput label={'Username'} name={'username'} onChange={handleInput} value={formData.username} />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <CustomTextArea label={'Description'} customStyle={{ height: '200px', textAlign: "start" }} value={formData.description} onChange={handleInput}
                                name={'description'} />
                        </div>

                        {user.role === 'agent' &&
                        <div>
                            <CustomInput label={'Job'} name={'job'} onChange={handleInput} value={formData.job} />
                        </div>
                        }
                        <div>
                            <CustomInput label={'E-mail'} type={'email'} name={'email'} onChange={handleInput} value={formData.email} />
                        </div>
                        <div>
                            <CustomInput label={'Web'} name={'web'} onChange={handleInput} value={formData.web} />
                        </div>
                        <div>
                            <CustomInput label={'Phone'} name={'phone'} onChange={handleInput} value={formData.phone} />
                        </div>
                        <div>
                            <CustomInput label={'Fax'} name={'fax'} onChange={handleInput} value={formData.fax} />
                        </div>
                        <div>
                            <CustomInput label={'Friendly Address'} name={'friendlyAddress'} onChange={handleInput} value={formData.friendlyAddress} />
                        </div>
                        <div>
                            <CustomInput label={'Map Location'} name={'mapLocation'} onChange={handleInput} value={formData.mapLocation} />
                            <div style={{ height: '400px' }}>
                                <SimpleMap />
                            </div>
                            <div className={'flex pt20 pb20'}>
                                <div style={{ marginRight: '10px' }}>
                                    <CustomInput value={'40.723101'} disabled={true} />
                                </div>
                                <CustomInput value={'-73.952876'} disabled={true} />
                            </div>
                        </div>
                    </div>

                    <div className={'pt30'}>
                        <p className={'f16 boldText black pb10'}>Socials</p>
                        {formData.socials && formData.socials.map((val, index) => 
                            <CustomInputDrop key={index} placeholder={`Network ${index+1}`} inputValue={formData.socials[index]} changeUrl={handleSocialUrl} changeName={handleSocialName} index={index} delNetwork={deleteNetwork} icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                color={'#484848'}></CustomInputDrop>

                        ) }
                        <div className='addNetwork cPointer' style={{ marginBottom: '20px' }}>
                            <p onClick={newNetwork} className={'f14 regularText white'}>Add Another Network</p>
                        </div>
                    </div>

                    <div>
                        <CustomButton onClick={submit} color={'#fff'} title={'Save Profile'} loading={state.loading} customStyle={{ color: '#fff', backgroundColor: '#ff5a5f', borderColor: '#ff5a5f', width: '100px' }} />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile





