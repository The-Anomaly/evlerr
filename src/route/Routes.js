import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from "react-redux";
import Layout from '../components/dashboard/Layout'
import ForgotPassword from '../screens/auth/ForgotPassword'
import Login from '../screens/auth/Login'
import RecoverPassword from '../screens/auth/RecoverPassword'
import Register from '../screens/auth/Register'
import VerifiedPage from '../screens/auth/VerifiedPage'
import AddProperty from '../screens/dashboard/AddProperty'
import ChangePassword from '../screens/dashboard/ChangePassword'
import Dashboard from '../screens/dashboard/Dashboard'
import Members from '../screens/dashboard/Members'
import Messages from '../screens/dashboard/Messages'
import MyPackage from '../screens/dashboard/MyPackage'
import MyProperties from '../screens/dashboard/MyProperties'
import Profile from '../screens/dashboard/Profile'
import SavedSearch from '../screens/dashboard/SavedSearch'
import MyFavorites from '../screens/dashboard/MyFavorites'
import Reviews from '../screens/dashboard/Reviews'
import Submission from '../screens/dashboard/Submission'
import LandingPage from '../screens/landing/LandingPage'
import AgencyDetails from '../screens/members/AgencyDetails'
import AgentDetails from '../screens/members/AgentDetails'
import PropertiesDisplay from '../screens/properties/PropertiesDisplay'
import PropertiesMap from '../screens/properties/PropertiesMap'
import PropertyDetails from '../screens/properties/PropertyDetails'
import RequireAuth from './RoutesAuth'
import { LOGIN_SUCCESS } from "../redux/Types";

const RoutesContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
    
        // When component loads, we check for d access token. if present, we dispatch a
        // login success action
        const accessToken = sessionStorage.getItem('accessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        if (accessToken) {
            const data = {'accessToken': accessToken, 'refreshToken': refreshToken}
            dispatch({ type: LOGIN_SUCCESS, payload: data });
        }

    })

    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Register />} />
                <Route path='forgotPassword' element={<ForgotPassword />} />
                <Route path='recoverPassword' element={<RecoverPassword />} />
                <Route path='properties' element={<PropertiesDisplay />} />
                <Route path='properties-map' element={<PropertiesMap />} />
                <Route path='properties-details' element={<PropertyDetails />} />
                <Route path='agent-details' element={<AgentDetails />} />
                <Route path='agency-details' element={<AgencyDetails />} />
                <Route path='submission' element={<RequireAuth><Submission /></RequireAuth>} />
                <Route path='add-property' element={<RequireAuth><AddProperty /></RequireAuth>} />
                <Route path='verified' element={<VerifiedPage />} />





                <Route element={<Layout />} >
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='reviews' element={<Reviews />} />
                    <Route path='messages' element={<Messages />} />
                    {/* <Route path='favorites' element={<MyFavorites />} /> */}
                    {/* <Route path='savedSearch' element={<SavedSaearch />} /> */}
                    <Route path='favorites' element={<MyFavorites />} />
                    <Route path='savedSearch' element={<SavedSearch />} />
                    <Route path='myProperties' element={<MyProperties />} />
                    <Route path='package' element={<MyPackage />} />
                    {/* <Route path='submission' element={<Submission />} /> */}
                    <Route path='password' element={<ChangePassword />} />
                </Route>

            </Routes>






        </>
    )
}

export default RoutesContainer