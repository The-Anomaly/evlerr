import React from 'react';
import './Cards.css';
import '../../assets/style/GeneralStyles.css';
import { GrLocation } from 'react-icons/gr'
import { DateTime } from "luxon";

const PropertyGridCards = ({ background, price, leaseType, type, baths, beds, detailsSubTitle, detailsTitle, location, sqft, years, agentName, agentImage, onClick, onAgentClick }) => {

    const date = DateTime.fromISO(years)
    const now = DateTime.now().toLocal()
    const dateDiff = now.diff(date, ['years','months','days', 'hours', 'minutes'])
    
    const formatDate = () => {
        if (dateDiff.years) {
            return dateDiff.years === 1 ? 'Last year' : dateDiff.years+' years ago'
        } else if (dateDiff.months) {
            return dateDiff.months === 1 ? 'Last month' : dateDiff.months+' months ago'
        } else if (dateDiff.days) {
            return dateDiff.days === 1 ? 'Yesterday' : dateDiff.days+' days ago'
        } else if (dateDiff.hours) {
            return dateDiff.hours === 1 ? 'An hour ago' : dateDiff.hours+' hours ago'
        } else {
            return 'Just now'
        }

    }

    return (
        <>
            <section className='listCardContainer capitalize animate__animated animate__fadeIn'>
                <section className={'whiteBg pt10 pl10 pr10'}>
                    <div className={'cardImage'} style={{ backgroundImage: background, }}>
                        <img src={`${background}`} alt='property' loading={'eager'} />
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
                            </div>
                        </div>
                    </div>
                </section>
                <section className={'pl20 pr20'}>
                    <div className={'cardDetails'}>
                        <div className='cardDetailsHeader'>
                            <p className={'regularText f14'}>{detailsTitle}</p>
                            <h2 className={'boldText f18 propertyDetailsLink'} onClick={onClick}>{detailsSubTitle}</h2>
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
                <section className={'cardFooter pl20 pr20 pt10 pb10 flex justifyBetween alignCenter'}>
                    <div className={'flex alignCenter'}>
                        <div className='cardFooterImage'>
                            <img src={agentImage} alt='poster' style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div>
                            <p className={'f14 regularText headerColor propertyDetailsLink'} onClick={onAgentClick}>{agentName}</p>
                        </div>
                    </div>
                    <div>
                        <p className={'f14 regularText headerColor'}>{formatDate()}</p>
                    </div>
                </section>
            </section>

        </>
    )
}

export default PropertyGridCards