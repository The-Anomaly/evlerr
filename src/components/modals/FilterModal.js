import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import CustomInput from '../../utils/CustomInput';
import './Modals.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import CustomInputDrop from '../../utils/CustomInputDrop';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import CustomButton from '../../utils/CustomButton';

const FilterModal = ({ visible, closeModal }) => {

    const [state, setState] = useState({
        value: 10, menuDrop: false, priceValue: { min: 0, max: 8000 }
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
            {visible &&
                <section className='modalBackground animate__animated  animate__slideInLeft'>
                    <section className={'filterModalMenuContainer pl20 pt40 pb20 pr20'}>
                        <div className={'flex justifyBetween alignCenter pt20'}>
                            <p className={'f24 boldText headerColor'}>Advanced Search</p>
                            <div className='closeIconContainer'>
                                <p>
                                    <AiOutlineClose className='closeIcon' onClick={closeModal} />
                                </p>
                            </div>
                        </div>
                        <section className={'pt30'}>
                            <div>
                                <CustomInput placeholder={'Keyword'} icon={<AiOutlineSearch color={'#484848'} size={22} />} />
                            </div>
                            <div >
                                <CustomInput placeholder={'Location'} icon={<BiCurrentLocation color={'#484848'} size={22} />} />
                            </div>
                            <div>

                                <p className={'f14 regularText headerColor pb10'}>Distance <span>{state.value} miles</span></p>
                                <InputRange
                                    maxValue={100}
                                    minValue={0}
                                    formatLabel={value => `${value}miles`}
                                    value={state.value}
                                    onChange={value => setState({ value })}

                                />
                            </div>

                            <div className={'pt20'}>
                                <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                    icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                    color={'#484848'} placeholder={'Region'}
                                >

                                </CustomInputDrop>
                            </div>

                            <div>
                                <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                    icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                    color={'#484848'} placeholder={'Status'}
                                >

                                </CustomInputDrop>
                            </div>

                            <div>
                                <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                    icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                    color={'#484848'} placeholder={'Type'}
                                >

                                </CustomInputDrop>
                            </div>

                            <div>
                                <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                    icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                    color={'#484848'} placeholder={'Beds'}
                                >

                                </CustomInputDrop>
                            </div>

                            <div>
                                <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                    icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                    color={'#484848'} placeholder={'Baths'}
                                >

                                </CustomInputDrop>
                            </div>

                            <div>
                                <CustomInputDrop onClick={showDropMenu} menuDrop={state.menuDrop}
                                    icon={state.menuDrop ? <IoMdArrowDropup size={22} /> : <IoMdArrowDropdown size={22} />}
                                    color={'#484848'} placeholder={'Garages'}
                                >

                                </CustomInputDrop>
                            </div>
                            <div>
                                <p className={'f14 regularText headerColor pb10'} style={{ textAlign: 'center' }}>From $ {state.priceValue.min} to $ {state.priceValue.max}</p>

                                <InputRange
                                    maxValue={8000}
                                    minValue={0}
                                    value={state.priceValue}
                                    onChange={priceValue => setState({ priceValue })} />
                            </div>

                            <div className={'pt20'}>
                                <CustomButton title={'Find Property'} customStyle={{ backgroundColor: '#f53c41' }} color={'#fff'} />
                            </div>
                        </section>
                    </section>
                </section>}
        </>
    )
}

export default FilterModal

