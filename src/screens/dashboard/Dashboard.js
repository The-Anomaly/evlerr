import React, { useState } from 'react'
import DashboardCards from '../../components/cards/DashboardCards';
import '../../assets/style/DashboardStyles.css';
import { useEffect } from "react";
import { BsHouseDoor } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import MyPropertiesRows from '../../components/dashboard/MyPropertiesRows';
import http from '../../Utils';


const AgentDashboard = () => {

    const user = useSelector((state) => state.auth.userInfo)
    const [state, setState] = useState({ published: 0 })

    useEffect(() => {
      (async () => {
        // setState((prevState) => ({ ...prevState, loading: true }))
        try {
            const res = await http.get(`user/dashboard`)
            const data = res.data
            console.log('dashboard ', res)
            setState((prevState) => ({...prevState, published: data.propertyCounts}))
        } catch (error) {
            console.log('dash error', error)
        }
        // setState((prevState) => ({ ...prevState, loading: false }))
      })()
    }, [])
    

    return (
        <main className={'dashBg pl15 pr15 pt40 h100'}>
            <div className={'pb30'}>
                <h2 className={'f34 boldText headerColor'}>Hello {user.role === 'agent' && 'Agent'} {user.username}</h2>
            </div>
            <section className='overviewGrid'>
                <DashboardCards>
                    <div>
                        <h2 className={'f34 boldText headerColor'}>{state.published}</h2>
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
                <DashboardCards customStyles={{ display: 'block' }}>
                    <div>
                        <h2 className={'f22 boldText headerColor pb20'}>Recent Properties</h2>
                        <MyPropertiesRows sortBy={'newest'} noPagination={true} />
                    </div>
                </DashboardCards>
            </section>
        </main>
    )
}

export default AgentDashboard