import React from 'react'
import SavedSearchRow from '../../components/agentDashboard/SavedSearchRow';
import { FiSearch } from 'react-icons/fi'
import '../../assets/style/DashboardStyles.css'

const SavedSaearch = () => {
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
                            <select name="" id="">
                                <option value="">Default</option>
                                <option value="" selected>New</option>
                                <option value="">Oldest</option>
                            </select>
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