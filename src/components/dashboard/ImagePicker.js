import React from 'react';
import ImageUploading from "react-images-uploading";
import '../../assets/style/DashboardStyles.css';
import { AiOutlineClose } from 'react-icons/ai';

function ImagePicker({ uploader }) {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        uploader(imageList[0].file)
    };

    return (
        <div className="App">
            <ImageUploading
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">

                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.data_url} alt="" width="100" className={'pt10 pb20'} />
                                <div className="image-item__btn-wrapper">
                                    {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                                    <button onClick={() => onImageRemove(index)} className={'clearImage'}><AiOutlineClose /></button>
                                </div>
                            </div>
                        ))}
                        <button
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps}
                            className={'uploadBtn f14 boldText headerColor'}
                        >
                            Upload File
                        </button>
                        {/* &nbsp;
                        <button onClick={onImageRemoveAll}>Remove all images</button> */}

                    </div>
                )}
            </ImageUploading>
        </div>
    );
}

export default ImagePicker;
