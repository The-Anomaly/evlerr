import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertyCards from "../cards/PropertyCards";
import Home from '../../assets/images/home.jpeg';
import HomeTwo from '../../assets/images/hometwo.jpeg';
import HomeThree from '../../assets/images/homesix.jpeg';
import HomeFour from '../../assets/images/homefour.jpeg';
import HomeFive from '../../assets/images/homeseven.jpeg';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="arrowRight"
            onClick={onClick}
        >
            <EastIcon />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='arrowLeft' onClick={onClick} >
            <KeyboardBackspaceIcon />
        </div>
    );
}

export default class FeaturedCarousel extends Component {


    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
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
                        <PropertyCards
                            type={'Featured'} leaseType={'For Rent'} price={'$3000'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            type={'Featured'} leaseType={'For Rent'} price={'$3000'} background={HomeFive}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            type={'Featured'} leaseType={'For Rent'} price={'$3000'} background={HomeThree}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            type={'Featured'} leaseType={'For Rent'} price={'$3000'} background={HomeTwo}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            type={'Featured'} leaseType={'For Rent'} price={'$3000'} background={HomeFour}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            type={'Featured'} leaseType={'For Rent'} price={'$3000'} background={Home}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            type={'Featured'} leaseType={'For Rent'} price={'$3000'} background={HomeFive}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                    <div>
                        <PropertyCards
                            type={'Featured'} leaseType={'For Rent'} price={'$3000'} background={HomeThree}
                            sqft={'480'} baths={'4'} beds={'4'} location={'2442 Broadway NY'} detailsSubTitle={'Arlo Apartment'}
                            detailsTitle={'Apartment'}
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}