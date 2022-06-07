import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const Dropdown = ({ curSelect, options, setSelect, label, textColor }) => {

    // const [curSort, setCurSort] = useState('Newest')
    const [dropdown, setDropdown] = useState(false)
    const [color, setColor] = useState(textColor ? textColor : '#7F7F7F')

    const showDropMenu = () => {
        if (dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }


  return (
    <>
        <section>
            <p className={'f16 boldText black pb10'}>{label}</p>
            <div className='inputContainer'>
                {dropdown && <div className="modal" onClick={showDropMenu} style={{ background: 'transparent' }}></div>}
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span className={"sort"} style={{ width: '100%', display: 'inline-block', color: color }} onClick={showDropMenu}>{ curSelect }</span>
                    {!dropdown ? <IoMdArrowDropdown style={{ width: '40px' }} size={16} /> : <IoMdArrowDropdown style={{ width: '40px', transform: 'rotate(180deg)' }} size={16} /> }
                    {dropdown && 
                    <ul className={"submissionDropdowncontainer"}>
                        { options.map((val, index) => 
                            <li key={index} className={curSelect === val ? 'active' : ''} onClick={() => { setSelect(val); showDropMenu(); setColor('#7F7F7F') }}>{val}</li>) 
                        }
                    </ul>}
                </div>
            </div>
        </section>
    </>
  )
}


export default Dropdown