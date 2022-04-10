import React from 'react';
import './Cards.css';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { FiGrid } from 'react-icons/fi';
import { BsListTask } from 'react-icons/bs';


const SortCardTwo = ({ result, dropDown, value, children, onClick, gridClick, listClick, active }) => {
    return (
        <>
            <section className={'pt10 pr20 pb10 pl20 bgWhite sortCardContainer flex justifyBetween alignCenter'}>
                <div>
                    <p className={'flex alignCenter regularText f14 headerColor'}>
                        Showing all
                        <span className={'pl10'}>{result} results</span>
                    </p>
                </div>
                <section className={'flex alignCenter'}>
                    <div className={'flex alignCenter'}>
                        <p className={'f14 boldText pr10'}>Sort by:</p>
                        <div className='sortDropContainer'>
                            <p className={'headerColor f14 regularText flex alignCenter'} onClick={onClick}>{value}  <span style={{ marginTop: '5px' }}>{dropDown ? <IoMdArrowDropup size={22} />
                                : <IoMdArrowDropdown size={22} />
                            }</span></p>
                            {dropDown && <div className={'pt10 pb10 pl10 pr10 bgWhite dropContent animate__animated animate__fadeIn'}>{children}</div>}
                        </div>
                    </div>
                    <div className={'flex alignCenter'}>
                        <div className={'pl10 pr10'} >
                            <FiGrid onClick={gridClick} />
                        </div>
                        <div className={'pr10'}>
                            <BsListTask onClick={listClick} />
                        </div>
                    </div>

                </section>

            </section>
        </>
    )
}

export default SortCardTwo