import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/nav/Nav'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import LandingPage from '../screens/landing/LandingPage'
import PropertiesDisplay from '../screens/properties/PropertiesDisplay'

const RoutesContainer = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Register />} />
                <Route path='properties' element={<PropertiesDisplay />} />

                {/* <Route/>
                <Route/>
                <Route/> */}
            </Routes>

        </>
    )
}

export default RoutesContainer