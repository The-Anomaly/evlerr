import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Modals.css';
import CustomLink from '../nav/CustomLink';
import CustomIconButton from '../../utils/CustomIconButton';
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
                    <section style={{ position: 'relative', background: '#f7f7f7' }} className={'filterModalMenuContainer animate__animated  animate__slideInLeft'}>
                        <div className={'flex justifyBetween alignCenter pl20 pt20 pb20 pr20'} style={{ background: '#fff' }}>
                            <p className={'f24 boldText headerColor'}>Menu</p>
                            <div className='closeIconContainer'>
                                <p>
                                    <AiOutlineClose className='closeIcon' onClick={closeModal} />
                                </p>
                            </div>
                        </div>
                        <section>
                            <ul>
                                <li className={"pt10 pl10 pb10 pr10"} style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>

                                    <p className={'boldText headerColor flex alignCenter justifyBetween'} onClick={togglesaleDD}>
                                        <span>For Sale</span>  
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

                                </li>
                                <hr />

                                <li className={"pt10 pl10 pb10 pr10"} style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                    <p className={'boldText headerColor flex alignCenter justifyBetween'} onClick={toggleRentDD}>
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
                                
                                </li>
                                <hr />

                                <li className={"pt10 pl10 pb10 pr10"} style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                    <p onClick={toggleProjectDD} className={'pb10 boldText headerColor flex alignCenter justifyBetween'} style={{ textAlign: 'left' }}>Projects <span style={{ marginTop: '5px' }}> { state.projectDD ? <IoMdArrowDropup size={16} /> : <IoMdArrowDropdown size={16} />}</span></p>

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
                                <hr />
                                <li  className={"pt10 pl10 pb10 pr10 boldText headerColor"}>
                                    <Link to={'/properties'}>All properties</Link>
                                </li>
                                <hr />
                                <li  className={"pt10 pl10 pb10 pr10 boldText headerColor"}>
                                    <Link to={'/agencies-display'}>Agencies</Link>
                                </li>
                                <hr />
                                <li  className={"pt10 pl10 pb10 pr10 boldText headerColor"}>
                                    <Link to={'/agents-display'}>Agents</Link>
                                </li>
                                <hr />

                                <li style={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px', position: 'fixed', bottom: '10px', right: '25%' }}>
                                    <Link to={'/submission'}>
                                        <CustomIconButton title={'Submit Property'}
                                            customStyle={{ backgroundColor: '#0c304a', borderRadius: '50px', color: '#fff', padding: '10px 16px', }}
                                            icon={<BsPlusLg size={16} />}
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>}
        </>
    )
}

export default ResponsiveSideNav