import { Star } from '@mui/icons-material';
import React from 'react';
import { FaDribbble, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Cards.css';

const AgentsCard = ({ background, agentName, agentRole, agentRating, agentClick }) => {
    return (
        <>
            <section className='agentsCardContainer'>
                <div className='cardImage' style={{ backgroundImage: background }}>
                    <img src={background} alt='property' loading='eager' />
                    <div className='agentsCardOverlay'>
                        <ul>
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaLinkedinIn />
                            </li>
                            <li>
                                <FaDribbble />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='cardDetails'>
                    <div className='agentCardDetailsHeader'>
                        <h2 className={'boldText f18 propertyDetailsLink'} onClick={agentClick}>{agentName}</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p className={'regularText f14'}>{agentRole}</p>
                            <p className={'regularText f14'} style={{ display: 'flex', alignItems: 'center' }}>{agentRating}
                                <span><Star sx={{ color: '#febe42', fontSize: '18px' }} /></span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AgentsCard