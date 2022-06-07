import React, { useState } from 'react'
import '../../assets/style/LandingPageStyles.css';
import '../../assets/style/GeneralStyles.css';
import CustomButton from '../../utils/CustomButton';
import CustomInput from '../../utils/CustomInput';
import http from '../../Utils';
import { toast } from 'react-toastify';
import { IoLocationOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';

const SearchComponent = ({status}) => {

    const [state, setState] = useState({ query: '', fetchedItems: [], pageInfo: {}, loading: false, showDropdown: false })

    const onChangeQuery = (e) => {
        setState({ ...state, query: e.target.value })
    }


    const search = async (e) => {
        e.preventDefault()
        setState({ ...state, loading: true })
        try {
            const res = await http.get('search-property', { search: state.query, status: status })
            setState({ ...state, fetchedItems: res.data.docs, showDropdown: true, loading: false })
            console.log(res)
        } catch (error) {
            setState({ ...state, loading: false })
            toast.error('Sorry, could not find property', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(error)
        }

    }

    const navigate = useNavigate()
    function selectResourceType(val) {
        // console.log(val._id)
        if (val) {
            navigate('/properties-details', { state: { propertyId: val._id } })
        }

    }



    const searchResult = !state.fetchedItems.length ? (<p>No property found</p>) : state.fetchedItems.map((property, index)   => {
        const { featuredImage, propertyTitle, friendlyAddress, status, price } = property
        // const checkGallery = gallery[0] ? typeof gallery[0] : 'string'
        return (
            <section key={index} className={'transactionRowContainer'} style={{ overflow: 'auto' }}>
                <ul className={'fav-container overviewGrid pb10'} style={{ gridTemplateColumns: "130px 1fr" }}>
                    <li className={'f14 headerColor'} >
                        <div onClick={() => selectResourceType(property)} className='cPointer image-wrapper search-img'>
                            <div className="overlay"></div>
                            <span className="property-status">{status}</span>
                            <img src={featuredImage && featuredImage.url} alt={''}  />
                        </div>
                    </li>
                    <li className={'f14 headerColor'}>
                        <div className='flex alignCenter justifyBetween'>
                            <div>
                                <h3 onClick={() => selectResourceType(property)} className='headerColor cPointer'>{propertyTitle}</h3>
                                <div className='my20'>
                                    <IoLocationOutline />
                                    <span className='pl10'>{friendlyAddress}</span>
                                    <p className="property-price redText" style={{ marginTop: '4px' }}>{price}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        )
        }
    )

    window.onclick = (e) => {
        const elem = document.querySelector('#searchModal')

        if (e.target !== elem) {
            setState({ ...state, showDropdown: false })
        }
    }

    return (
        <>
            <section className='transparentContainer'>
                <form onSubmit={search}>
                    <div className='searchBox'>
                        <CustomInput noMarginBt={true} value={state.query} placeholder={'Please enter text'} onChange={onChangeQuery} name={'query'} />
                        <CustomButton onClick={search} title={'Search'} customStyle={{
                            backgroundColor: '#3E4C66', color: '#fff', padding: '10px 30px',
                            borderRadius: '6px', display: 'flex', justifyContent: 'center'
                        }} />

                        {state.showDropdown || state.loading ? 
                        <div className="searchDropdown" id='searchModal'>
                            <div>
                                {state.loading && <p>Loading...</p>}
                                {state.loading ? '' : searchResult}
                            </div>
                        </div> : ''}
                    </div>
                </form>
            </section>
        </>
    )
}

export default SearchComponent