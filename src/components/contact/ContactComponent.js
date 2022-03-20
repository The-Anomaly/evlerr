import React from 'react';
import './Contact.css';
import '../../assets/style/GeneralStyles.css';
import { FaArrowAltCircleRight, FaArrowRight, FaDribbble, FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa';
import CustomButton from '../../utils/CustomButton';
import { IoIosArrowForward } from 'react-icons/io';

const ContactComponent = () => {
    return (
        <>
            <section className='contactContainer'>
                <div className='aboutSiteContainer'>
                    <h2 className={'f30 boldText headerColor'}>About Site</h2>
                    <p className={'f16 regularText headerColor'}>
                        We're branding how you buy, sell, and rent.
                        It's now easier to get into a place you love.
                        So let's do this together.
                    </p>
                </div>

                <div className='quickLinksContainer'>
                    <h2 className={'f30 boldText headerColor'}>Quick Links</h2>
                    <ul>
                        <li className={'f16 regularText headerColor'}>About Us</li>
                        <li className={'f16 regularText headerColor'}>Terms and Conditions</li>
                        <li className={'f16 regularText headerColor'}>User's Guide</li>
                        <li className={'f16 regularText headerColor'}>Support Center</li>
                        <li className={'f16 regularText headerColor'}>Press Info</li>
                    </ul>
                </div>

                <div className='contactUsContainer'>
                    <h2 className={'f30 boldText headerColor'}>Contact Us</h2>
                    <ul>
                        <li className={'f16 regularText headerColor'}>info@findhouse.com</li>
                        <li className={'f16 regularText headerColor'}>Collins Street West, Victoria 8007, Australia</li>
                        <li className={'f16 regularText headerColor'}>+1246-345-0695</li>
                    </ul>
                </div>

                <div className='socialLinksContainer'>
                    <h2 className={'f30 boldText headerColor'}>Follow Us</h2>
                    <ul>
                        <li className={'f16 regularText headerColor'}><FaFacebookF /></li>
                        <li className={'f16 regularText headerColor'}><FaTwitter /></li>
                        <li className={'f16 regularText headerColor'}><FaInstagram /></li>
                        <li className={'f16 regularText headerColor'}><FaPinterest /></li>
                        <li className={'f16 regularText headerColor'}><FaDribbble /></li>
                        <li className={'f16 regularText headerColor'}><FaGoogle /></li>
                    </ul>
                </div>

                <div className='subscribeContainer'>
                    <h2 className={'f30 boldText headerColor'}>Subscribe</h2>
                    <div className='searchInputContainer'>
                        <input placeholder='Your email' />
                        <button>
                            <IoIosArrowForward size={16} />
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactComponent