import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../assets/style/DashboardStyles.css';
import { SELECT_USER } from '../../redux/Types';

const MembersRow = ({ agentImage, agentAddress, agentMail, agentName, agentNumber, id, toggleDelete, agent }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const redirect = (member) => {
        dispatch({type: SELECT_USER, payload: member})
        navigate('/member-details')
    }

    return (
        <section style={{ flexWrap: 'wrap' }} className={'flex justifyBetween alignCenter whiteBg pt20 pb20 borderBt'}>
            <div className={'flex alignCenter'}>
                <div className='memberImage'>
                    <img src={agentImage} alt='agent' style={{ width: '100%', height: '100%' }} />
                </div>
                <div>
                    <p onClick={() => {redirect(agent)}} className={'f20 boldText headerColor pb10 cPointer'}>{agentName}</p>
                    <p className={'f14 regularText headerColor'}>{agentAddress}</p>
                </div>
            </div>
            <div>
                <div className={'flex'}>
                    <p className={'f14 regularText headerColor pb10'}>{agentNumber}</p>
                </div>
                <div>
                    <p className={'f14 regularText headerColor'}>{agentMail}</p>
                </div>
            </div>
            <div className='deleteContainer cPointer'>
                <RiDeleteBin6Line onClick={() => {toggleDelete(id)}} size={22} />
            </div>
        </section>
    )
}

export default MembersRow