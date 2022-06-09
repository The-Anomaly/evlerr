import React from 'react'
import avatar from '../assets/images/defAvatar.jpg'
import { AiOutlineTwitter, AiFillYoutube, AiOutlineGooglePlus, AiFillRedditCircle  } from 'react-icons/ai'
import { TiSocialFacebook } from 'react-icons/ti'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { SELECT_USER } from '../redux/Types'

const AgentDisplayCard = ({ name, phone, email, fax, web, photo, socials, noRedirect, job, agent, customStyle }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const redirect = (member) => {
        if (!noRedirect) {
            dispatch({type: SELECT_USER, payload: member})
            navigate('/member-details')
        }
    }

    const twitterIcon = <AiOutlineTwitter className='f18 mr10' />
    const linkedInIcon = <FaLinkedinIn className='f18 mr10' />
    const facebookIcon = <TiSocialFacebook className='f18 mr10' />
    const instaIcon = <FiInstagram className='f18 mr10' />
    const googlePlusIcon = <AiOutlineGooglePlus className='f18 mr10' />
    const youtubeIcon = <AiFillYoutube className='f18 mr10' />
    const redditIcon = <AiFillRedditCircle className='f18 mr10' />

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
                <div className='agentCardFooter' style={{ justifyContent: 'space-between', padding: '15px 15px 0 0' }}>
                    <div className="socialIcons">
                        {socials && socials.map((val) => {
                            switch (val.name) {
                                case "Twitter":
                                    return (
                                        <a href={val.url.indexOf('http') !== -1 ? val.url : 'hhtps://'+val.url} target='_blank' rel='noreferrer'>
                                            {twitterIcon}
                                        </a>                                
                                    )
                                    
                                case "Facebook":
                                    return (
                                        <a href={val.url.indexOf('http') !== -1 ? val.url : 'hhtps://'+val.url} target='_blank' rel='noreferrer'>
                                            {facebookIcon}
                                        </a>                                
                                    )
                                    
                                case "LinkedIn":
                                    return (
                                        <a href={val.url.indexOf('http') !== -1 ? val.url : 'hhtps://'+val.url} target='_blank' rel='noreferrer'>
                                            {linkedInIcon}
                                        </a>                                
                                    )
                                    
                                case "Google+":
                                    return (
                                        <a href={val.url.indexOf('http') !== -1 ? val.url : 'hhtps://'+val.url} target='_blank' rel='noreferrer'>
                                            {googlePlusIcon}
                                        </a>
                                    )
                                    
                                case "Youtube":
                                    return (
                                        <a href={val.url.indexOf('http') !== -1 ? val.url : 'hhtps://'+val.url} target='_blank' rel='noreferrer'>
                                            {youtubeIcon}
                                        </a>
                                    )
                                    
                                case "Instagram":
                                    return (
                                        <a href={val.url.indexOf('http') !== -1 ? val.url : 'hhtps://'+val.url} target='_blank' rel='noreferrer'>
                                            {instaIcon}
                                        </a>
                                    )

                                case "Reddit":
                                    return (
                                        <a href={val.url.indexOf('http') !== -1 ? val.url : 'hhtps://'+val.url} target='_blank' rel='noreferrer'>
                                            {redditIcon}
                                        </a>
                                    )

                                default:
                                    return false
                            }
                        })}
                    </div>
                    {!noRedirect &&
                    <div onClick={() => {redirect(agent)}} className='redText cPointer'>View My Listing</div>}
                </div>
            </section>
        </section>

      </>
  )
}

export default AgentDisplayCard