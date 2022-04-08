import React from 'react';
import './Cards.css';
import '../../assets/style/GeneralStyles.css';
import { GrLocation } from 'react-icons/gr'

const PropertyListCards = ({ background, price, leaseType, type, baths, beds, detailsSubTitle, detailsTitle, location, sqft, years, agentName, agentImage, onClick, onAgentClick }) => {
    return (
        <>
            <section className={'listCardContainer flex alignCenter'}>
                <section className={'whiteBg pt10 pl10 pr10 pb10'} style={{ width: '40%' }}>
                    <div className={'cardImage'} style={{ backgroundImage: background, height: '250px' }}>
                        <img src={background} alt='property' style={{ width: '100%', height: '100%' }} />
                        <div className='cardListImageOverlay'></div>
                    </div>
                </section>
                <section className={'pl20 pr20 pt20 pb20'} style={{ width: '60%' }}>
                    <div className={'flex justifyBetween alignCenter'}>
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
                        <div>
                            <h2 className={'BoldText headerColor f16'}>{price}</h2>
                        </div>
                    </div>

                    <div className={'pt15'}>
                        <div>
                            <p className={'regularText f14 pb10 '}>{detailsTitle}</p>
                            <h2 className={'boldText f18 pb10 propertyDetailsLink'} onClick={onClick}>{detailsSubTitle}</h2>
                        </div>
                        <div className={'cardDetailsLocation pb15'}>
                            <p className={'regularText f12'}>
                                <span style={{ marginRight: '10px' }}><GrLocation /></span>
                                {location}
                            </p>
                        </div>
                        <div className='cardPropertyDetails pb10'>
                            <ul>
                                <li className={'regularText f12'}>Beds: {beds}</li>
                                <li className={'regularText f12'}>Baths: {baths}</li>
                                <li className={'regularText f12'}>Sqft: {sqft}</li>
                            </ul>
                        </div>
                    </div>
                    <section className={'pr20 pt10 flex justifyBetween alignCenter'}>
                        <div className={'flex alignCenter'}>
                            <div className='cardFooterImage'>
                                <img src={agentImage} alt='poster' style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div>
                                <p className={'f14 regularText headerColor propertyDetailsLink'} onClick={onAgentClick}>{agentName}</p>
                            </div>
                        </div>
                        <div>
                            <p className={'f14 regularText headerColor'}>{years} years ago</p>
                        </div>
                    </section>
                </section>

            </section>

        </>
    )
}

export default PropertyListCards