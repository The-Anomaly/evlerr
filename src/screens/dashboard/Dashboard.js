import React from 'react'
import DashboardCards from '../../components/cards/DashboardCards';
import '../../assets/style/DashboardStyles.css';
import { useEffect } from "react";
import { BsHouseDoor } from 'react-icons/bs';
import { useSelector } from 'react-redux';


const AgentDashboard = () => {

    const user = useSelector((state) => state.auth.userInfo)

    useEffect(() => {
      
    }, [])
    

    return (
        <main className={'dashBg pl15 pr15 pt40 h100'}>
            <div className={'pb30'}>
                <h2 className={'f34 boldText headerColor'}>Hello {user.role === 'agent' && 'Agent'} {user.username}</h2>
            </div>
            <section className='overviewGrid'>
                <DashboardCards>
                    <div>
                        <h2 className={'f34 boldText headerColor'}>0</h2>
                        <p className={'f18 regularText headerColor'}>Published</p>
                    </div>
                    <div className='FavIconContainer'>
                        <BsHouseDoor />
                    </div>
                </DashboardCards>
                <DashboardCards>
                    <div>
                        <h2 className={'f34 boldText headerColor'}>0</h2>
                        <p className={'f18 regularText headerColor'}>Pending</p>
                    </div>
                    <div className='FavIconContainer'>
                        <BsHouseDoor />
                    </div>
                </DashboardCards>
            </section>

            <section className={'pt40'}>
                <DashboardCards>
                    <div>
                        <h2 className={'f22 boldText headerColor pb20'}>Recent Reviews</h2>
                        <p className={'f14 regularText headerColor'}>No reviews found.</p>
                    </div>
                </DashboardCards>
            </section>
        </main>
    )
}

export default AgentDashboard