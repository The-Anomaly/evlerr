import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { LOGIN_SUCCESS, UPDATE_USER } from "../redux/Types";

function RequireAuth({ children }) {
    // let auth = useSelector(state => state.auth);
    let location = useLocation();
    const dispatch = useDispatch();
    const accessToken = sessionStorage.getItem('accessToken')
    

    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken')
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (accessToken) {
            const data = {'accessToken': accessToken, 'refreshToken': refreshToken}
            dispatch({ type: LOGIN_SUCCESS, payload: data });
            dispatch({ type: UPDATE_USER, payload: userInfo })
        }

    }, [dispatch, accessToken])

    
    // used accessToken to check if user loggedin instead of auth.userData
    if (!accessToken) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;