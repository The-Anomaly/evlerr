import React from 'react';
import './Contact.css';
import '../../assets/style/GeneralStyles.css';
import { FaDribbble, FaFacebookF, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const ContactComponent = () => {
    return (
        <>
            <section className='contactContainer paddResponsive20'>
                <div className='aboutSiteContainer'>
                    <h2 className={'f30 boldText white'}>About Site</h2>
                    <p className={'f16 regularText white'}>
                        We're branding how you buy, sell, and rent.
                        It's now easier to get into a place you love.
                        So let's do this together.
                    </p>
                </div>

                <div className='quickLinksContainer'>
                    <h2 className={'f30 boldText white'}>Quick Links</h2>
                    <ul>
                        <li className={'f16 regularText white'}>About Us</li>
                        <li className={'f16 regularText white'}>Terms and Conditions</li>
                        <li className={'f16 regularText white'}>User's Guide</li>
                        <li className={'f16 regularText white'}>Support Center</li>
                        <li className={'f16 regularText white'}>Press Info</li>
                    </ul>
                </div>

                <div className='contactUsContainer'>
                    <h2 className={'f30 boldText white'}>Contact Us</h2>
                    <ul>
                        <li className={'f16 regularText white'}>info@findhouse.com</li>
                        <li className={'f16 regularText white'}>Collins Street West, Victoria 8007, Australia</li>
                        <li className={'f16 regularText white'}>+1246-345-0695</li>
                    </ul>
                </div>

                <div className='socialLinksContainer'>
                    <h2 className={'f30 boldText white'}>Follow Us</h2>
                    <ul>
                        <li className={'f16 regularText white'}><FaFacebookF /></li>
                        <li className={'f16 regularText white'}><FaTwitter /></li>
                        <li className={'f16 regularText white'}><FaInstagram /></li>
                        <li className={'f16 regularText white'}><FaPinterest /></li>
                        <li className={'f16 regularText white'}><FaDribbble /></li>
                        <li className={'f16 regularText white'}><FaGoogle /></li>
                    </ul>
                    <div className='subscribeContainer'>
                        <h2 className={'f30 boldText white'}>Subscribe</h2>
                        <div className='searchInputContainer flexWrap'>
                            <input placeholder='Your email' />
                            <button>
                                <IoIosArrowForward size={16} />
                            </button>

                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default ContactComponent