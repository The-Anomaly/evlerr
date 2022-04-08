import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


const AgencyAgentCard = ({ agentImage, agentName, department, phoneNumber, email, agencyAddress }) => {
    return (
        <>
            <section className={'agentTitleCard flex alignCenter pb10 pr10 pl10 pt10'}>
                <div >
                    <div style={{ width: '120px', height: '120px' }}>
                        <img src={agentImage} alt='agent' style={{ width: '100%', height: '100%', borderRadius: '6px' }} />
                    </div>
                </div>
                <div className={'pl20 pr50'}>
                    <div className={'flex alignCenter pb10'}>
                        <p className={'f18 boldText headerColor pr10 '}>{agentName}</p>
                        <AiFillStar color='#ff5a5f' />
                    </div>
                    {agencyAddress && <div className={'pb10'}>
                        <p className={'f14 semiBoldText header'}>{agencyAddress}</p>
                    </div>}
                    <div className={'pb10'}>
                        <p className={'f14 semiBoldText redText'}>{department}</p>
                    </div>
                    <div className={'pb10'}>
                        <p className={'flex alignCenter f14 headerColor regularText'}>
                            <BsFillTelephoneFill className={'pr10'} />
                            {phoneNumber}
                        </p>
                    </div>
                    <div className={'pb10'}>
                        <p className={'flex alignCenter f14 headerColor regularText '}>
                            <MdEmail className={'pr10'} />
                            {email}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AgencyAgentCard