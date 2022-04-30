import React from 'react'
import CustomButton from '../../utils/CustomButton'

const PackagesCard = ({ title, price, itemOne, itemTwo, itemThree, itemFour, custom, onClick }) => {
    return (
        <>
            <section className={'membersCard packagesCard'} style={{ boxShadow: custom }} >
                <p className={'f18 boldText headerColor textCenter'}>{title}</p>
                <h2 className={'redText boldText f28 pt10 pb40 textCenter'}>{price}</h2>
                <ul>
                    <li className={'f14 headerColor regularText pb20 textCenter'}>{itemOne}</li>
                    <li className={'f14 headerColor regularText pb20 textCenter'}>{itemTwo}</li>
                    <li className={'f14 headerColor regularText pb20 textCenter'}>{itemThree}</li>
                    <li className={'f14 headerColor regularText pb20 textCenter'}>{itemFour}</li>
                </ul>
                <CustomButton title={'Add To Cart'} color={'#ff5a5f'} customStyle={{ backgroundColor: '#fff', border: '2px solid #ff5a5f', marginTop: '30px' }} onClick={onClick} />
            </section>
        </>
    )
}

export default PackagesCard