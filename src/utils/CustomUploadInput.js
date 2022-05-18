import React from 'react'
import './Utils.css';
import '../assets/style/GeneralStyles.css';

const CustomUploadInput = ({ multi, customStyle, title, onChange, id }) => {
  return (
    <>
        <label className="form-group upload-container">
            <input type="file" onChange={onChange} id={id} multiple={multi} />
            <span className={"upload-icon btnContainer semiBoldText f14"} style={customStyle}>{ title }</span>
        </label>
    </>
  )
}

export default CustomUploadInput