import React from 'react'
import './Utils.css';
import '../assets/style/GeneralStyles.css';
import { SpinnerDotted } from 'spinners-react';

const CustomUploadInput = ({ multi, customStyle, title, uploadLoading, restrict, onChange, id }) => {
  return (
    <>
        <label className="form-group upload-container">
            <input type="file" accept={restrict ? restrict : ''} onChange={(e) => {onChange(e, id)}} id={id} multiple={multi} />
            <span className={"upload-icon btnContainer semiBoldText f14"} style={customStyle}>
                {uploadLoading && uploadLoading ? <SpinnerDotted size={'20px'} /> :
                    title}
            </span>
        </label>
    </>
  )
}

export default CustomUploadInput