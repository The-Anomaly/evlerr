import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideOne from '../../assets/images/slider1.jpeg';
import SlideTwo from '../../assets/images/slide2.jpeg';
import SlideThree from '../../assets/images/slider3.jpeg';
import SlideFour from '../../assets/images/slider4.jpeg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="arrowRightP"
            onClick={onClick}
        >
            <EastIcon />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='arrowLeftP' onClick={onClick} >
            <KeyboardBackspaceIcon />
        </div>
    );
}

const PropertyDetailsSlider = (props) => {

    // const  {images} = props

    var settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div style={{ paddingTop: '30px' }}>

            <Slider {...settings}>

                <div>
                    <img src={SlideOne} alt='slide1' style={{ width: '100%' }} />
                </div>
                <div>
                    <img src={SlideTwo} alt='slide1' style={{ width: '100%' }} />
                </div>
                <div>
                    <img src={SlideThree} alt='slide1' style={{ width: '100%' }} />
                </div>
                <div>
                    <img src={SlideFour} alt='slide1' style={{ width: '100%' }} />
                </div>
                <div>
                    <img src={SlideThree} alt='slide1' style={{ width: '100%' }} />
                </div>
            </Slider>
        </div>
    );

}
export default PropertyDetailsSlider