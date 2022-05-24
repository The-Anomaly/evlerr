import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoLocationOutline } from 'react-icons/io5'
import { VscTrash } from 'react-icons/vsc'
import { FaDollarSign } from 'react-icons/fa'
import Loading from '../../utils/Loading';
import { useDispatch, useSelector } from 'react-redux'
import { getProperties, deleteProperty } from "../../redux/actions/PropertiesAction";
import { toast } from 'react-toastify';
import CustomButton from '../../utils/CustomButton'

const MyPropertiesRows = () => {

    const [state, setState] = useState({ loading: false, delLoading: false, resourceId: '', selectedProperty: '', delModal: false, msg: "Loading..." })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            setState((state) => ({ ...state, loading: true, }))
            try {
                
                const res = await dispatch(getProperties())
                console.log('hey', res)
                // localStorage.setItem('properties', JSON.stringify(res))
                setState((state) => ({ ...state, loading: false, msg: "You don't have any properties yet. Start by creating new one." }))
            } catch (error) {
                // returnError(error)
                setState((state) => ({ ...state, msg: error[0] }))
                console.log('fetch property error ', error)
                setState((state) => ({ ...state, loading: false, }))
            }
        })()
    }, [dispatch])
    
    const properties = useSelector((state) => state.properties.properties)
    // console.log('first', properties)

    const renderLoading = () => {
        if (state.loading) {
            return (
                <Loading />
            )
        }
    }

    const handleDelmodal = (p_id = '') => {
        setState({ ...state, selectedProperty: p_id, delModal: !state.delModal })
    }

    const handleDel = async (p_id) => {
        setState({ ...state, delLoading: true })
        try {
            const res = await dispatch(deleteProperty(p_id))
            console.log('delete resp:', res)
            toast.success('SuccessFul', {
                position: toast.POSITION.TOP_RIGHT
            })
            setState({ ...state, delLoading: false })
            handleDelmodal('')
        } catch (error) {
            console.log('delete catch:', error)
            toast.error(error[0], {
                position: toast.POSITION.TOP_RIGHT
            });
            setState({ ...state, delLoading: false })
            handleDelmodal('')
        }
    }


    function selectResourceType(val) {
        setState((prevState) => ({ ...prevState, resourceId: val._id }))
        // console.log(state.value)÷
        // console.log(val._id)
        if (val) {
            navigate('/properties-details', { state: { propertyId: val._id } })
        }

    }

    
    window.onclick = function(event) {

        const modal = document.querySelector("#modal")

        if (event.target === modal) {
            handleDelmodal('')
        }
    }


    const propertiesList = properties.map((property, index) => {
        const { gallery, propertyTitle, friendlyAddress, createdAt, price, _id } = property
        const checkGallery = gallery[0] ? typeof gallery[0] : 'string'
        return (
            <section key={index} className={'transactionRowContainer bgWhite'} style={{ overflow: 'auto' }}>
                <ul className={'fav-container overviewGrid pb10'}>
                    <li className={'f14 headerColor'} >
                        <div onClick={() => selectResourceType(property)} className='cPointer image-wrapper'>
                            <div className="overlay"></div>
                            <span className="property-status">For sale</span>
                            <img src={ checkGallery === 'string' ? gallery[0] : gallery[0].url } alt={''}  />
                        </div>
                    </li>
                    <li className={'f14 headerColor'}>
                        <div className='flex alignCenter justifyBetween'>
                            <div>
                                <h3 onClick={() => selectResourceType(property)} className='headerColor cPointer'>{propertyTitle}</h3>
                                <div className='my20'>
                                    <IoLocationOutline />
                                    <span className='pl10'>{friendlyAddress}</span>
                                </div>
                                <div className="property-price redText"><FaDollarSign style={{ width: '0.5em' }} />{price}</div>
                            </div>
                        </div>        
                    </li>
                    <li className={'f14 redText'}>{createdAt}</li>
                    <li className={'f14 headerColor'} ><VscTrash onClick={() => handleDelmodal(_id)} className='del-btn' /></li>
                </ul>
            </section>
        )
    })




    return (
      <>
        {renderLoading()}

        {/* delete modal */}
        { state.delModal && 
            <section className='modal' id='modal'>
                <div className='animate__animated  animate__slideInDown animate__faster' style={{ background: 'white', width: 'clamp(170px, 400px, 50%)', margin: 'auto', padding: '15px', borderRadius: '5px' }} >

                    <h5>DELETE</h5>
                    <hr style={{ marginTop: '10px', marginBottom: '20px' }} />
                    <div className="pb-3 px-5">
                        <h5 className='f18' style={{ marginTop: '10px' }}>Are you sure?</h5>
                        <p className='f20' style={{ marginTop: '10px' }}>You can't undo this action</p>
                    </div>
                    <hr  style={{ marginTop: '20px', marginBottom: '10px' }} />
                    <div className="p10 flex">
                        <CustomButton title={'CANCEL'} customStyle={{ border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '3px', marginRight: '10px', background: '#EAEAEA' }} color={'#000'} onClick={() => handleDelmodal('')}  />
                        <CustomButton title={'DELETE'} customStyle={{ border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '3px', background: '#E12D2D', color: 'white' }} color={'#fff'} onClick={() => handleDel(state.selectedProperty)} loading={state.delLoading}  />
                    </div>
                </div>
            </section>}

        { !properties.length ? 
            <div className={'infoHeader pt20 pr20 pb20 pl20'}>
                <p className={'f14 regularText'}>{state.msg}</p>
            </div> : propertiesList }
      </>
  )
}

export default MyPropertiesRows