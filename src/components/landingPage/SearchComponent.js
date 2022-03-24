import { MenuItem, OutlinedInput, } from '@mui/material'
import React from 'react'
import MiniDropDown from './MiniDropDown';
import '../../assets/style/LandingPageStyles.css';
import '../../assets/style/GeneralStyles.css';
import { FaEllipsisV } from 'react-icons/fa';
import CustomButton from '../../utils/CustomButton';


const SearchComponent = () => {
    return (
        <>
            <section className='transparentContainer'>
                <div className='searchBox'>
                    <OutlinedInput placeholder="Please enter text" className='f16 regularText' style={{ color: '#006C70' }} />
                    <MiniDropDown label={'Property Type'} >
                        <MenuItem value={10}>Apartment</MenuItem>
                        <MenuItem value={20}>Condo</MenuItem>
                        <MenuItem value={30}>Family House</MenuItem>
                        <MenuItem value={40}>Modern Villa</MenuItem>
                        <MenuItem value={50}>Town House</MenuItem>
                    </MiniDropDown>
                    <MiniDropDown label={'Location'} >
                        <MenuItem value={10}>Nicosia</MenuItem>
                        <MenuItem value={20}>Kyrenia</MenuItem>
                        <MenuItem value={30}>Famagusta</MenuItem>
                        <MenuItem value={40}>Guzelyurt</MenuItem>
                        <MenuItem value={50}>Lefke</MenuItem>
                        <MenuItem value={60}>Iskele</MenuItem>
                    </MiniDropDown>
                    <MiniDropDown label={'Rooms'} >
                        <MenuItem value={10}>1+</MenuItem>
                        <MenuItem value={20}>2+</MenuItem>
                        <MenuItem value={30}>3+</MenuItem>
                        <MenuItem value={40}>4+</MenuItem>
                        <MenuItem value={50}>5+</MenuItem>
                        <MenuItem value={60}>6+</MenuItem>
                    </MiniDropDown>
                    <div className='advancedDrop'>
                        <p className={'f16 semiBoldText'} style={{ color: '' }}>Advanced</p>
                        <span><FaEllipsisV /></span>
                    </div>

                    <CustomButton title={'Search'} customStyle={{
                        backgroundColor: '#3E4C66', color: '#fff', padding: '10px 30px',
                        borderRadius: '6px', display: 'flex', justifyContent: 'center'
                    }} />

                </div>
            </section>
        </>
    )
}

export default SearchComponent