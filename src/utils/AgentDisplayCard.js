import React from 'react'
import avatar from '../assets/images/defAvatar.jpg'
import { AiOutlineTwitter } from 'react-icons/ai'
import { TiSocialFacebook } from 'react-icons/ti'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const AgentDisplayCard = ({ name, phone, email, fax, web, photo, job, agentId }) => {
  return (
      <>
        <section className='agentFlexCard'>
            <section className='agentImg'>
                <Link to={`/agent-details/${agentId}`}>
                    <img src={photo ? photo : avatar} style={{ width: '100%', height: '100%', borderRadius: '6px' }} alt='' />
                </Link>
            </section>
            <section className='agentDetails'>
                <div style={{ marginBottom: '10px' }}>
                    <Link to={`/agent-details/${agentId}`}>
                        <h2 className='f20 boldText'>{name}</h2>
                    </Link>
                    <small className='redText'>{job ? job : 'Agent'}</small>
                </div>
                <div className='deets'>
                    <p>Phone: {phone}</p>
                    <p>Fax: {fax}</p>
                    <p>Email: {email}</p>
                    <p>Website: {web}</p>
                </div>
                <div className='flex agentCardFooter' style={{ justifyContent: 'space-between', padding: '15px 15px 0 0' }}>
                    <div className="socialIcons">
                        <Link to={'/'}>
                            <TiSocialFacebook className='f18 mr10' />
                        </Link>
                        <Link to={'/'}>
                            <AiOutlineTwitter className='f18 mr10' />
                        </Link>
                        <Link to={'/'}>
                            <FaLinkedinIn className='f18' />
                        </Link>
                    </div>
                    <Link to={`/agent-details/${agentId}`} className='redText'>View My Listing</Link>
                </div>
            </section>
        </section>

      </>
  )
}

export default AgentDisplayCard