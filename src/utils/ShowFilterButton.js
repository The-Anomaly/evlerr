import React from 'react';
import { BiFilter } from 'react-icons/bi'

const ShowFilterButton = ({ onClick }) => {
    return (
        <>
            <div className={'filterBtnContainer flex'} onClick={onClick}>
                <div className='filterBtnIcon'>
                    <BiFilter size={22} color={'#fff'} />
                </div>
                <div className='filterBtnText'>
                    <p className={'f14 boldText white'}>Show Filter</p>
                </div>
            </div>
        </>
    )
}

export default ShowFilterButton