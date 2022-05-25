import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS, UPDATE_USER } from "../redux/Types";
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

const RoutesContainer = () => {

    const dispatch = useDispatch();
    const accessToken = sessionStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    

    useEffect(() => {
        if (accessToken) {
            const data = {'accessToken': accessToken, 'refreshToken': refreshToken}
            dispatch({ type: LOGIN_SUCCESS, payload: data });
            dispatch({ type: UPDATE_USER, payload: userInfo })
        }

    }, [dispatch, accessToken, refreshToken, userInfo])


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
                    <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
                    <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
                    <Route path='reviews' element={<RequireAuth><Reviews /></RequireAuth>} />
                    <Route path='messages' element={<RequireAuth><Messages /></RequireAuth>} />
                    <Route path='favorites' element={<RequireAuth><MyFavorites /></RequireAuth>} />
                    <Route path='savedSearch' element={<RequireAuth><SavedSearch /></RequireAuth>} />
                    <Route path='myProperties' element={<RequireAuth><MyProperties /></RequireAuth>} />
                    <Route path='package' element={<RequireAuth><MyPackage /></RequireAuth>} />
                    <Route path='members' element={<RequireAuth><Members /></RequireAuth>} />
                    <Route path='password' element={<RequireAuth><ChangePassword /></RequireAuth>} />
                </Route>

            </Routes>






        </>
    )
}

export default RoutesContainer