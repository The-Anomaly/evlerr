import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import './Cards.css';
import '../../assets/style/GeneralStyles.css';
import { GrLocation } from 'react-icons/gr'

const PropertyCards = ({ background, price, leaseType, type, baths, beds, detailsSubTitle, detailsTitle, location, sqft }) => {
    return (
        <>
            <section className='cardContainer'>
                <div className='cardImage' style={{ backgroundImage: background }}>
                    <img src={background} alt='property' />
                    <div className='cardImageOverlay'>
                        <div className='cardTagContainer'>
                            {leaseType &&
                                <div className='cardLeaseTag'>
                                    <p className={'semiBoldText white f14'}>{leaseType}</p>
                                </div>}
                            {type &&
                                <div className='cardTypeTag'>
                                    <p className={'semiBoldText white f14'}>{type}</p>
                                </div>}
                        </div>
                        <div className='cardControlsContainer'>
                            <h2 className={'BoldText white f16'}>{price}</h2>
                            <div className='cardControls'>
                                <span>
                                    <FavoriteBorderIcon />
                                </span>
                                <span>
                                    <SyncAltIcon />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cardDetails'>
                    <div className='cardDetailsHeader'>
                        <p className={'regularText f14'}>{detailsTitle}</p>
                        <h2 className={'boldText f18'}>{detailsSubTitle}</h2>
                    </div>
                    <div className='cardDetailsLocation'>
                        <p className={'regularText f12'}>
                            <span style={{ marginRight: '10px' }}><GrLocation /></span>
                            {location}
                        </p>
                    </div>
                    <div className='cardPropertyDetails'>
                        <ul>
                            <li className={'regularText f12'}>Beds: {beds}</li>
                            <li className={'regularText f12'}>Baths: {baths}</li>
                            <li className={'regularText f12'}>Sqft: {sqft}</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PropertyCards