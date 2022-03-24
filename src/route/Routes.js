import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import LandingPage from '../screens/landing/LandingPage'

const RoutesContainer = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Register />} />
                {/* <Route/>
                <Route/>
                <Route/> */}
            </Routes>

        </>
    )
}

export default RoutesContainer