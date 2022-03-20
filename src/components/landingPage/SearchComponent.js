import { TextField } from '@mui/material'
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
                    <TextField id="outlined-basic" label="Enter Keyword..." variant="outlined" />
                    <MiniDropDown label={'Property Type'} />
                    <MiniDropDown label={'Location'} />
                    <MiniDropDown label={'Rooms'} />
                    <div className='advancedDrop'>
                        <p className={'f16 semiBoldText'} style={{ color: '' }}>Advanced</p>
                        <span><FaEllipsisV /></span>
                    </div>

                    <CustomButton title={'Search'} customStyle={{
                        backgroundColor: '#3E4C66', color: '#fff', padding: '10px 30px',
                        borderRadius: '6px'
                    }} />

                </div>
            </section>
        </>
    )
}

export default SearchComponent