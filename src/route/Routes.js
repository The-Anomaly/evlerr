import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/dashboard/Layout'
import AgentLayout from '../components/agentDashboard/Layout'
import ForgotPassword from '../screens/auth/ForgotPassword'
import Login from '../screens/auth/Login'
import RecoverPassword from '../screens/auth/RecoverPassword'
import Register from '../screens/auth/Register'
import AddProperty from '../screens/dashboard/AddProperty'
import ChangePassword from '../screens/dashboard/ChangePassword'
import Dashboard from '../screens/dashboard/Dashboard'
import AgentDashboard from '../screens/agentDashboard/Dashboard'
import Members from '../screens/dashboard/Members'
import Messages from '../screens/dashboard/Messages'
import MyFavorites from '../screens/dashboard/MyFavorites'
import MyPackage from '../screens/dashboard/MyPackage'
import MyProperties from '../screens/dashboard/MyProperties'
import Profile from '../screens/dashboard/Profile'
import AgentProfile from '../screens/agentDashboard/Profile'
import AgentMyProperties from '../screens/agentDashboard/MyProperties'
import AgentReviews from '../screens/agentDashboard/Reviews'
import AgentSavedSearch from '../screens/agentDashboard/SavedSearch'
import AgentMessages from '../screens/agentDashboard/Messages'
import AgentMyFavorites from '../screens/agentDashboard/MyFavorites'
import AgentMyPackage from '../screens/agentDashboard/MyPackage'
import AgentChangePassword from '../screens/agentDashboard/ChangePassword'
import Reviews from '../screens/dashboard/Reviews'
import SavedSaearch from '../screens/dashboard/SavedSaearch'
import Submission from '../screens/dashboard/Submission'
import LandingPage from '../screens/landing/LandingPage'
import AgencyDetails from '../screens/members/AgencyDetails'
import AgentDetails from '../screens/members/AgentDetails'
import PropertiesDisplay from '../screens/properties/PropertiesDisplay'
import PropertiesMap from '../screens/properties/PropertiesMap'
import PropertyDetails from '../screens/properties/PropertyDetails'

const RoutesContainer = () => {
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
                <Route path='submission' element={<Submission />} />
                <Route path='add-property' element={<AddProperty />} />




                <Route element={<Layout />} >
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='reviews' element={<Reviews />} />
                    <Route path='messages' element={<Messages />} />
                    <Route path='favorites' element={<MyFavorites />} />
                    <Route path='savedSearch' element={<SavedSaearch />} />
                    <Route path='myProperties' element={<MyProperties />} />
                    <Route path='package' element={<MyPackage />} />
                    {/* <Route path='submission' element={<Submission />} /> */}
                    <Route path='password' element={<ChangePassword />} />
                </Route>


                <Route element={<AgentLayout />}>
                    <Route path='agent/dashboard' element={<AgentDashboard />} />
                    <Route path='agent/profile' element={<AgentProfile />} />
                    <Route path='agent/reviews' element={<AgentReviews />} />
                    <Route path='agent/messages' element={<AgentMessages />} />
                    <Route path='agent/favorites' element={<AgentMyFavorites />} />
                    <Route path='agent/savedSearch' element={<AgentSavedSearch />} />
                    <Route path='agent/myProperties' element={<AgentMyProperties />} />
                    <Route path='agent/package' element={<AgentMyPackage />} />
                    {/* <Route path='submission' element={<Submission />} /> */}
                    <Route path='agent/password' element={<AgentChangePassword />} />
                </Route>
            </Routes>






        </>
    )
}

export default RoutesContainer