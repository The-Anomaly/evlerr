import React from 'react'

const AlteCitiesCard = ({ propertyAmount, city, cityImage }) => {
    return (
        <section className='alteCardContainer'>
            <div className='alteCardImage' style={{ backgroundImage: cityImage }}></div>
            <div className='alteCardText'>
                <p className={'boldText f16 white'} style={{ paddingBottom: '10px', textAlign: 'center' }}>{city}</p>
                <p className={'semiBoldText f14 '} >{propertyAmount} Property</p>
            </div>
        </section>
    )
}

export default AlteCitiesCard