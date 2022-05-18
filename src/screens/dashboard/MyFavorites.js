import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'
import { VscTrash } from 'react-icons/vsc'
import { FaDollarSign } from 'react-icons/fa'
import Home from '../../assets/images/home.jpeg';
import '../../assets/style/DashboardStyles.css'
import '../../assets/style/FavoriteStyles.css'

const MyFavorites = () => {


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
                        <h2 className={'f34 boldText headerColor'}>Favorite</h2>
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
                    <div className="fav-container flex">
                        <Link to={'#'}>
                            <div className='image-wrapper'>
                                <div className="overlay"></div>
                                <span className="property-status">For sale</span>
                                <img src={Home} alt={''} />
                            </div>
                        </Link>
                        <div className='inner-fav flex alignCenter justifyBetween'>
                            <div>
                                <Link to={'#'} className={'property-title'}>
                                    <h2 className='headerColor'>Diamond Manor Apartment</h2>
                                </Link>
                                <div className='my20'>
                                    <IoLocationOutline />
                                    <span className='pl10'>22-05 Astoria Blvd, Astoria</span>
                                </div>
                                <div className="property-price redText"><FaDollarSign style={{ width: '0.5em' }} />6500</div>
                            </div>
                            <div>
                                <VscTrash className='del-btn' />
                            </div>
                        </div>
                    </div>
                    <div className="fav-container flex">
                        <Link to={'#'}>
                            <div className='image-wrapper'>
                                <div className="overlay"></div>
                                <span className="property-status">For rent</span>
                                <img src={Home} alt={''} />
                            </div>
                        </Link>
                        <div className='inner-fav flex alignCenter justifyBetween'>
                            <div>
                                <Link to={'#'} className={'property-title'}>
                                    <h2 className='headerColor'>Skyper Pool Apartment</h2>
                                </Link>
                                <div className='my20'>
                                    <IoLocationOutline />
                                    <span className='pl10'>318 84th str, NY</span>
                                </div>
                                <div className="property-price redText"><FaDollarSign style={{ width: '0.5em' }} />4500</div>
                            </div>
                            <div>
                                <VscTrash className='del-btn' />
                            </div>
                        </div>
                    </div>
                    <div className="fav-container flex">
                        <Link to={'#'}>
                            <div className='image-wrapper'>
                                <div className="overlay"></div>
                                <span className="property-status">For sale</span>
                                <img src={Home} alt={''} />
                            </div>
                        </Link>
                        <div className='inner-fav flex alignCenter justifyBetween'>
                            <div>
                                <Link to={'#'} className={'property-title'}>
                                    <h2 className='headerColor'>Earton Garth Apartment</h2>
                                </Link>
                                <div className='my20'>
                                    <IoLocationOutline />
                                    <span className='pl10'>12th NE, Miami</span>
                                </div>
                                <div className="property-price redText"><FaDollarSign style={{ width: '0.5em' }} />6500</div>
                            </div>
                            <div>
                                <VscTrash className='del-btn' />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MyFavorites