import React, { useState } from 'react'
import DashboardCards from '../../components/cards/DashboardCards'
import CustomInput from '../../utils/CustomInput'
import { BsSearch } from 'react-icons/bs';
import CustomInputDrop from '../../utils/CustomInputDrop';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import '../../assets/style/DashboardStyles.css';

const MyProperties = () => {

    const [state, setState] = useState({
        menuDrop: false, grid: true, list: true
    })

    const showDropMenu = () => {
        if (state.menuDrop) {
            setState((prevState) => ({ ...prevState, menuDrop: false }))
        } else {
            setState((prevState) => ({ ...prevState, menuDrop: true }))
        }

    }
    return (
        <>
            <main className={'dashBg pl15 pr15 pt40 h100'}>
                <div className={'pb40 flex justifyBetween alignCenter'}>
                    <h2 className={'f34 boldText headerColor'}>My Properties</h2>
                    <div className={'flex'}>
                        <div className={'pr10'}>
                            <CustomInput placeholder={'Search ...'} icon={<BsSearch />} customStyle={{ height: '24px' }} />
                        </div>
                        <div>
                            <CustomInputDrop placeholder={'Sort By...'} onClick={showDropMenu} menuDrop={state.menuDrop}
                                icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />} customStyle={{ width: '80px' }} >

                            </CustomInputDrop>
                        </div>

                    </div>
                </div>
                <section >
                    <DashboardCards customStyles={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div className='tableHeader'>
                            <ul className='tableCells'>
                                <li className={'f14 semiBoldText white'}>Image</li>
                                <li className={'f14 semiBoldText white'}>Information</li>
                                <li className={'f14 semiBoldText white'}>Expiry</li>
                                <li className={'f14 semiBoldText white'}>Status</li>
                                <li className={'f14 semiBoldText white'}>View</li>
                                <li className={'f14 semiBoldText white'}>Action</li>
                            </ul>
                        </div>
                        <div className={'infoHeader pt20 pr20 pb20 pl20'}>
                            <p className={'f14 regularText'}>You don't have any properties yet. Start by creating new one.</p>
                        </div>
                    </DashboardCards>
                </section>
            </main>
        </>
    )
}

export default MyProperties