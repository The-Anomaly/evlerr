import React from 'react';
import './Cards.css';
import '../../assets/style/GeneralStyles.css';
// import Loading from '../../utils/Loading';

const ArticlesCards = ({ background, detailsSubTitle, detailsTitle, date, agentName, agentImage, onClick, onAgentClick, custom }) => {
    return (
        <>
            <section className='cardContainer' style={custom}>
                <div className='cardImage' style={{ backgroundImage: background }}>
                    <img src={background} alt='property' loading={'eager'} />
                    <div className='cardImageOverlay'></div>
                </div>
                <div className='cardDetails'>
                    <div className='cardDetailsHeader'>
                        <p className={'regularText f14'}>{detailsTitle}</p>
                        <h2 className={'boldText f18 propertyDetailsLink'} onClick={onClick}>{detailsSubTitle}</h2>
                    </div>
                </div>
                <section className={'cardFooter pt10 pb10 flex justifyBetween alignCenter'}>
                    <div className={'flex alignCenter'}>
                        <div className='cardFooterImage'>
                            <img src={agentImage} alt='poster' style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div>
                            <p className={'f14 regularText headerColor propertyDetailsLink'} onClick={onAgentClick}>{agentName}</p>
                        </div>
                    </div>
                    <div>
                        <p className={'f14 regularText headerColor'}>{date}</p>
                    </div>
                </section>
            </section>

        </>
    )
}

export default ArticlesCards