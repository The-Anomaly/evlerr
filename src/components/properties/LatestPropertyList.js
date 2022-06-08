import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getProperties } from '../../redux/actions/PropertiesAction'
import defaultPropImage from '../../assets/images/home.jpeg';

const LatestPropertyList = ({customStyle}) => {

    const [state, setState] = useState({ loading: false })
    const properties = useSelector((state) => state.properties.properties)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function selectResourceType(propId) {
        if (propId) {
            navigate('/properties-details', { state: { propertyId: propId } })
        }

    }

    
    useEffect(() => {
        (async () => {
            if (!Object.keys(properties).length) {
                // submit()
                try {
                    const propsResponse = await dispatch(getProperties())
                    console.log('fetch props', propsResponse)
                } catch (error) {
                    toast.error('Sorry, could not gets latest properties', {
                        position: toast.POSITION.TOP_RIGHT
                    })    
                    console.log(error)
                }
                // console.log('im empty')
                setState((prevState) => ({...prevState, loading: false}))
            }
        })()
    }, [dispatch, properties])
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className={'membersCard'} style={customStyle}>
                <p className={'f20 headerColor boldText  pb20'}>Latest Properties</p>
                <ul>
                    {Object.keys(properties).length !== 0 && properties.docs.map((property, index) => {
                        const { propertyTitle, price, bed, bath, homeArea, featuredImage, _id } = property

                        if (index < 4) {
                            return (
                                <li key={index} onClick={() => {selectResourceType(_id)}} className={'flex alignCenter pb20'}>
                                    <div className='latestPropertiesImage cPointer'>
                                        <img src={featuredImage ? featuredImage.url !== 'string' ? featuredImage.url : defaultPropImage : defaultPropImage} alt='home' style={{ width: '100%', height: '100%', borderRadius: '6px' }} />
                                    </div>
                                    <div>
                                        <p className={'f16 headerColor boldText cPointer pb10'} onClick={() => {selectResourceType(_id)}}>{propertyTitle}</p>
                                        <p className={'f16 boldText  pb10 redText'}>{price}</p>
                                        <ul className={'flex alignCenter'}>
                                            <li className={'f14 headerColor boldText  pr10'}>Beds: {bed}</li>
                                            <li className={'f14 headerColor boldText  pr10'}>Baths: {bath}</li>
                                            <li className={'f14 headerColor boldText'}>sqft: {homeArea}</li>
                                        </ul>
                                    </div>
                                </li>

                            )
                        }
                        return false
                    })}
                </ul>                                

            </div>
            { state.loading && <p style={{background: '#FFE089', opacity: '0.7', padding: '15px', borderRadius: '7px'}} className={'f14 regularText'}>Loading...</p> }
        </>
    )
}

export default LatestPropertyList