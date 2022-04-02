import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/dashboard/Layout'
import NavBar from '../components/nav/Nav'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import ChangePassword from '../screens/dashboard/ChangePassword'
import Dashboard from '../screens/dashboard/Dashboard'
import Members from '../screens/dashboard/Members'
import Messages from '../screens/dashboard/Messages'
import MyFavorites from '../screens/dashboard/MyFavorites'
import MyPackage from '../screens/dashboard/MyPackage'
import MyProperties from '../screens/dashboard/MyProperties'
import Profile from '../screens/dashboard/Profile'
import Reviews from '../screens/dashboard/Reviews'
import SavedSaearch from '../screens/dashboard/SavedSaearch'
import Submission from '../screens/dashboard/Submission'
import LandingPage from '../screens/landing/LandingPage'
import PropertiesDisplay from '../screens/properties/PropertiesDisplay'
import PropertiesMap from '../screens/properties/PropertiesMap'

const RoutesContainer = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Register />} />
                <Route path='properties' element={<PropertiesDisplay />} />
                <Route path='properties-map' element={<PropertiesMap />} />

                <Route element={<Layout />} >
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='reviews' element={<Reviews />} />
                    <Route path='messages' element={<Messages />} />
                    <Route path='favorites' element={<MyFavorites />} />
                    <Route path='savedSearch' element={<SavedSaearch />} />
                    <Route path='members' element={<Members />} />
                    <Route path='myProperties' element={<MyProperties />} />
                    <Route path='package' element={<MyPackage />} />
                    <Route path='submission' element={<Submission />} />
                    <Route path='password' element={<ChangePassword />} />
                    {/* <Route path='submission' element={<Profile />} /> */}



                </Route>
                {/* <Route/>
                <Route/>
                <Route/> */}
            </Routes>






        </>
    )
}

export default RoutesContainer