import React, { useState } from 'react'
import { TiTimes } from "react-icons/ti";
import Dropdown from './Dropdown'

// TODO: affecting '/property-detail'
const CustomInputDrop = ({ type, disabled, name, value, onChange, icon, customStyle, inputValue, color, placeholder, changeUrl, changeName, index, delNetwork, children, onClick }) => {

    const [state, setState] = useState({ showDropdown: false })

    const handleName = (val) => {
        changeName(val, index)
        // setState({ ...state, social: { ...state.social, name: val } })
    }

    const toggleShowDropdown = () => {
        setState({ ...state, showDropdown: !state.showDropdown })
    }

    return (
        <>
            <section className='dropDownContainer' >
                <div className='inputContainer' onClick={toggleShowDropdown}>
                    <p>
                        <TiTimes onClick={() => {delNetwork(index)}} style={{ color: '#AA3C3F', verticalAlign: 'text-bottom', marginRight: '5px' }} className='f20 cPointer' />
                        {placeholder}
                    </p>
                    {icon && <span style={{ color: color }}>{icon}</span>}
                </div>
                {state.showDropdown &&
                    <div className='dropDownContentContainer'>
                        <div className='socialInputs'>
                            <Dropdown label={'Network'} curSelect={inputValue.name} options={['Reddit', 'Facebook', 'LinkedIn', 'Twitter', 'Instagram', 'Google+', 'Youtube']} setSelect={handleName} />
                        </div>
                        <div className='socialInputs'>
                            <section>
                                <p className={'f16 boldText black pb10'}>Url</p>
                                <div className='inputContainer'>
                                    <input type={'text'} value={inputValue.url}
                                        onChange={(e) => { changeUrl(e.target.value, index) }} className='inputBox' 
                                    />
                                </div>
                            </section>

                            {/* <CustomInput label={'Url'} value={inputValue.url} onChange={handleVal} /> */}
                        </div>
                    </div>}
            </section>
        </>
    )
}

export default CustomInputDrop