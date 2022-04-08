import React from 'react';
import './Cards.css';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'


const SortCard = ({ result, dropDown, value, children, onClick, filterDropDown, filterValue, onClickFilter, filterList, sortList,
    selectFilterType, selectSortType
}) => {


    return (
        <>
            <section className={'pt10 pr20 pb10 pl20 bgWhite sortCardContainer flex justifyBetween alignCenter flexResponsive'}>
                <div>
                    <p className={'flex alignCenter regularText f14 headerColor'}>
                        Showing 1-9
                        <span className={'pl10'}>of</span>
                        <span className={'pl10'}>{result} results</span>
                    </p>
                </div>
                <div className={'flex alignCenter'}>
                    <div style={{ marginRight: '20px' }} className={'flex alignCenter pr10'}>
                        <p className={'f14 boldText pr10'}>Filter by:</p>
                        <div className='sortDropContainer'>
                            <p className={'headerColor f14 regularText flex alignCenter'} onClick={onClickFilter}>{filterValue}  <span style={{ marginTop: '5px' }}>{filterDropDown ? <IoMdArrowDropup size={22} />
                                : <IoMdArrowDropdown size={22} />
                            }</span></p>
                            {filterDropDown && <div className={'pt10 pb10 pl10 pr10 bgWhite dropContent animate__animated animate__fadeIn'}>
                                {filterList.map((item) =>
                                    <p key={item.id} className={'f14 regularText headerColor pb10'} onClick={() => selectFilterType(item)}>{item.name}</p>
                                )}
                            </div>}
                        </div>
                    </div>
                    <div className={'flex alignCenter'}>
                        <p className={'f14 boldText pr10'}>Sort by:</p>
                        <div className='sortDropContainer'>
                            <p className={'headerColor f14 regularText flex alignCenter'} onClick={onClick}>{value}  <span style={{ marginTop: '5px' }}>{dropDown ? <IoMdArrowDropup size={22} />
                                : <IoMdArrowDropdown size={22} />
                            }</span></p>
                            {dropDown && <div className={'pt10 pb10 pl10 pr10 bgWhite dropContent animate__animated animate__fadeIn'}>
                                {sortList.map((item) =>
                                    <p key={item.id} className={'f14 regularText headerColor pb10'} onClick={() => selectSortType(item)}>{item.name}</p>
                                )}
                            </div>}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default SortCard