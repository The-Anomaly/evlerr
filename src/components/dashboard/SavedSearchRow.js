import React from 'react'
import { VscTrash } from 'react-icons/vsc'

const SavedSearchRow = ({ title, sqft, found, times, status }) => {
    return (
        <section className={'transactionRowContainer pb20 pt20 pl20 pr20 bgWhite'}>
            <ul className={'tableCells pb10 repeat-5'}>
                <li className={'f14 headerColor'} ><b>{title}</b></li>
                <li className={'f14 headerColor'}>
                    <b>Status:</b> {status} <br />
                    <b>Home area (sqft) to:</b> {sqft}
                </li>
                <li className={'f14 headerColor'} >Properties found {found}</li>
                <li className={'f14 headerColor'} >{times}</li>
                <li className={'f14 headerColor'} ><VscTrash className='del-btn' /></li>
            </ul>
        </section>
    )
}

export default SavedSearchRow