import React from "react";
import { ImageGroup, Image } from 'react-fullscreen-image';
import '../../assets/style/PropertyStyles.css';



const PropertyDetailsSlider = (props) => {

    const { image } = props
    // const classes = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']

    return (

        <div >

            <ImageGroup>
                <ul className="images">
                    {image.map(i => (
                        <li key={i}>
                            <Image
                                src={i}
                                alt="nature"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </li>
                    ))}
                </ul>
            </ImageGroup>
        </div>


    );

}
export default PropertyDetailsSlider