import React from 'react'
import avatar from '../assets/images/defAvatar.jpg'
import { AiOutlineTwitter } from 'react-icons/ai'
import { TiSocialFacebook } from 'react-icons/ti'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { SELECT_USER } from '../redux/Types'

const AgentDisplayCard = ({ name, phone, email, fax, web, photo, noRedirect, job, agent, customStyle }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const redirect = (member) => {
        if (!noRedirect) {
            dispatch({type: SELECT_USER, payload: member})
            navigate('/member-details')
        }
    }

  return (
      <>
        <section className='agentFlexCard' style={customStyle}>
            <section className={noRedirect ? 'agentImg' : 'agentImg cPointer'} onClick={() => {redirect(agent)}}>
                <img src={photo ? photo.url : avatar} style={{ width: '100%', height: '100%', borderRadius: '6px' }} alt='' />
            </section>
            <section className='agentDetails'>
                <div style={{ marginBottom: '10px' }}>
                    <div className={noRedirect ? '' : 'cPointer'} onClick={() => {redirect(agent)}}>
                        <h2 className='f20 boldText'>{name}</h2>
                    </div>
                    {job && <small className='redText'>{job}</small>}
                </div>
                <div className='deets'>
                    {phone ? <p>Phone: {phone}</p> : ''}
                    {fax ? <p>Fax: {fax}</p> : ''}
                    <p>Email: {email}</p>
                    {web ? <p>Website: {web}</p> : ''}
                </div>
                {!noRedirect &&
                <div className='agentCardFooter' style={{ justifyContent: 'space-between', padding: '15px 15px 0 0' }}>
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
                    <div onClick={() => {redirect(agent)}} className='redText cPointer'>View My Listing</div>
                </div>
                }
            </section>
        </section>

      </>
  )
}

export default AgentDisplayCard