import React, { useState } from 'react'
import SavedSearchRow from '../../components/dashboard/SavedSearchRow';
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import '../../assets/style/DashboardStyles.css'

const SavedSaearch = () => {

    const [curSort, setCurSort] = useState('Newest')
    const [sortDropdown, setsortDropdown] = useState(false)

    const showSortDropMenu = () => {
        if (sortDropdown) {
            setsortDropdown(false)
        } else {
            setsortDropdown(true)
        }
    }

    const setSort = (val) => {
        setCurSort(val)
        showSortDropMenu()
    }

    return (
        <>
            <main className={'dashBg pl15 pr15 pt40 h100'}>
                <div className={'pb40 flex justifyBetween'}>
                    <div>
                        <h2 className={'f34 boldText headerColor'}>My Saved Search</h2>
                    </div>
                    <div className='flex'>
                        <div className="headerInput">
                            <input type="text" placeholder='Search...' />
                            <FiSearch className={'f24 lens'} />
                        </div>
                        <div className="headerInput sortInput">
                            <span>Sort by:</span>
                            <span className={"sort pl10"} onClick={showSortDropMenu}>{ curSort } <IoMdArrowDropdown size={16} /></span>
                            {sortDropdown && 
                                <ul className={"sortDropdowncontainer"}>
                                    <li className={ curSort === 'Default' ? 'active' : ''} onClick={() => {setSort('Default')}}>Default</li>
                                    <li className={ curSort === 'Newest' ? 'active' : ''} onClick={() => {setSort('Newest')}}>Newest</li>
                                    <li className={ curSort === 'Oldest' ? 'active' : ''} onClick={() => {setSort('Oldest')}}>Oldest</li>
                                </ul>}
                        </div>
                    </div>
                </div>

                <section className={'membersCard'}>
                    <div className={'tableHeader'} style={{ marginBottom: '0' }}>
                        <ul className={'tableCells repeat-5'}>
                            <li className={'f14 boldText white'}>Title</li>
                            <li className={'f14 boldText white'}>Saved search query</li>
                            <li className={'f14 boldText white'}>Number Properties</li>
                            <li className={'f14 boldText white'}>Times</li>
                            <li className={'f14 boldText white'}>Actions</li>
                        </ul>
                    </div>
                    <div className={'border btRadius'}>
                        <SavedSearchRow title={'Condo'} sqft={350} found={0} times={'Daily'} status={'For Rent'} />
                    </div>
                </section>
            </main>
        </>
    )
}

export default SavedSaearch