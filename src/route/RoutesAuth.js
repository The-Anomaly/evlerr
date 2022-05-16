// import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
    // let auth = useSelector(state => state.auth);
    let location = useLocation();
    const accessToken = sessionStorage.getItem('accessToken')
    // console.log(auth.userData);

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