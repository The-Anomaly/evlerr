import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertyCards from "../cards/PropertyCards";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/images/defAvatar.jpg";

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

const MostViewedPropertyCarousel = (props) => {

    const { properties } = props
    const [data, setData] = useState({
        _id: '',
    })
    console.log(data)

    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
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

    const navigate = useNavigate();
    function selectResourceType(val) {
        setData((prevState) => ({ ...prevState, _id: val._id }))
        // console.log(state.value)÷
        console.log(val._id)
        if (val) {
            navigate('/properties-details', { replace: true, state: { propertyId: val._id } })
        }

    }

    const goToAgentDetails = () => {
        navigate('/agent-details')
    }

    return (
        <div style={{ paddingTop: '30px' }}>

            <Slider {...settings}>
                {properties.map((item) => (
                    <div key={item._id}>
                        <PropertyCards
                            type={'Most Viewed'} leaseType={item.status} price={item.price} background={item.featuredImage && item.featuredImage.url}
                            sqft={'480'} baths={'4'} beds={'4'} location={item.friendlyAddress} detailsSubTitle={item.propertyTitle}
                            detailsTitle={'Apartment'} onClick={() => selectResourceType(item)} agentImage={item.agentId.profilePicture ? item.agentId.profilePicture.url : avatar} agentName={item.agentId.username} years={'2'} onAgentClick={goToAgentDetails}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MostViewedPropertyCarousel;