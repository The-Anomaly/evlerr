import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Modals.css';
import CustomLink from '../nav/CustomLink';
import 'react-input-range/lib/css/index.css';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'

const ResponsiveSideNav = ({ visible, closeModal }) => {
    const [state, setState] = useState({
        value: 10, menuDrop: false, priceValue: { min: 0, max: 8000 }, rentDD: false, saleDD: false, projectDD: false
    })

    const togglesaleDD = () => {
        setState({ ...state, saleDD: !state.saleDD })

    }

    const toggleRentDD = () => {
        setState({ ...state, rentDD: !state.rentDD })

    }

    const toggleProjectDD = () => {
        setState({ ...state, projectDD: !state.projectDD })

    }

    return (
        <>
            {visible &&
                <section className='modalBackground' style={{ zIndex: 20, left: 0 }}>
                    <section className={'filterModalMenuContainer animate__animated  animate__slideInLeft pl20 pt40 pb20 pr20'}>
                        <div className={'flex justifyBetween alignCenter pt20'}>
                            <p className={'f24 boldText headerColor'}>Menu</p>
                            <div className='closeIconContainer'>
                                <p>
                                    <AiOutlineClose className='closeIcon' onClick={closeModal} />
                                </p>
                            </div>
                        </div>
                        <section className={"pt30"}>
                            <ul>
                                <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>

                                    <p className={'semiBoldText headerColor flex alignCenter justifyBetween'} onClick={togglesaleDD}>
                                        <div>For Sale</div>  
                                        <span style={{ marginTop: '5px' }}> 
                                            { state.saleDD ? <IoMdArrowDropup size={16} /> : <IoMdArrowDropdown size={16} />}
                                        </span>
                                    </p>            
                                    { state.saleDD && 
                                        (<>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                        </>)
                                    }

                                    <p className={'semiBoldText headerColor flex alignCenter justifyBetween'} onClick={toggleRentDD}>
                                        <span>To Rent</span>  <span style={{ marginTop: '5px' }}> { state.rentDD ? <IoMdArrowDropup size={16} /> : <IoMdArrowDropdown size={16} />}</span>
                                    </p>
                                    { state.rentDD && 
                                        (<>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                        </>)
                                    }

                                    <p onClick={toggleProjectDD} className={'pb10 semiBoldText headerColor flex alignCenter justifyBetween'} style={{ textAlign: 'left' }}>Projects <span style={{ marginTop: '5px' }}> { state.projectDD ? <IoMdArrowDropup size={16} /> : <IoMdArrowDropdown size={16} />}</span></p>

                                    { state.projectDD && 
                                        (<>
                                        <CustomLink to={'/properties'}>North Cyprus</CustomLink>
                                        <CustomLink to={'/properties'}>Kyrenia</CustomLink>
                                        <CustomLink to={'/properties'}>Famagusta</CustomLink>
                                        <CustomLink to={'/properties'}>Nicosia</CustomLink>
                                        <CustomLink to={'/properties'}>Iskele</CustomLink>
                                        <CustomLink to={'/properties'}>Lefke</CustomLink>
                                        <CustomLink to={'/properties'}>Guzelyurt</CustomLink>
                                        </>)
                                    }

                                </li>
                            </ul>
                        </section>
                    </section>
                </section>}
        </>
    )
}

export default ResponsiveSideNav