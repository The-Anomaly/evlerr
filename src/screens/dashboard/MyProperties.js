import React, { useState } from 'react'
import CustomInput from '../../utils/CustomInput'
import { BsSearch } from 'react-icons/bs';
import '../../assets/style/DashboardStyles.css';
import '../../assets/style/FavoriteStyles.css';
import MyPropertiesRows from '../../components/dashboard/MyPropertiesRows';
import Dropdown from '../../utils/Dropdown';

const MyProperties = () => {

    const [state, setState] = useState({
        grid: true, list: true, sortBy: 'Sort By...'
    })

    const handleSortBy = (val) => {
        setState({ ...state, sortBy: val })
    }
    return (
        <>
            <main className={'dashBg pl15 pr15 pt40 h100'}>
                <div className={'pb40 flex justifyBetween alignCenter'} style={{ flexWrap: 'wrap' }}>
                    <h2 className={'f34 boldText headerColor'}>My Properties</h2>
                    <div style={{flexWrap: 'wrap'}} className={'flex'}>
                        <div className={'pr10 pt10'}>
                            <CustomInput placeholder={'Search ...'} icon={<BsSearch />} />
                        </div>
                        <div>
                            <Dropdown curSelect={state.sortBy} options={['Default', 'Newest', 'Oldest']} setSelect={handleSortBy} />

                        </div>

                    </div>
                </div>
                <section className={'membersCard'}>
                    <div className='tableHeader thResponsive'>
                        <ul className='tableCells repeat-4'>
                            <li className={'f14 semiBoldText white'}>Image</li>
                            <li className={'f14 semiBoldText white'}>Information</li>
                            <li className={'f14 semiBoldText white'}>Created on</li>
                            <li className={'f14 semiBoldText white'}>Action</li>
                        </ul>
                    </div>
                    <MyPropertiesRows sortBy={state.sortBy} />
                </section>
            </main>
        </>
    )
}

export default MyProperties