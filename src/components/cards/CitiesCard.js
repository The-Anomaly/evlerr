import React from 'react';
import '../../assets/style/GeneralStyles.css';
import './Cards.css';

const CitiesCard = ({ cityImage, propertyAmount, city, custom }) => {
    return (
        <>
            <section className='citiesCardContainer' style={custom}>
                <div className='citiesCardImage' style={{ backgroundImage: cityImage }}>
                    <div className='citiesCardOverlay'>
                        <div>
                            <p className={'boldText f16 white'} style={{ paddingBottom: '10px', textAlign: 'center' }}>{city}</p>
                            <p className={'semiBoldText f14 white'} style={{ paddingBottom: '10px', textAlign: 'center' }}>{propertyAmount} Property</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CitiesCard