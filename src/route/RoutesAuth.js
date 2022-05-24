import { Navigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

function RequireAuth({ children }) {
    // let auth = useSelector(state => state.auth);
    let location = useLocation();
    const accessToken = sessionStorage.getItem('accessToken')
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    
    
    
    // used accessToken to check if user loggedin instead of auth.userData
    if (!accessToken) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else if (userInfo.role === 'user') {
        toast.warn("You don't have access to this resources", {
            position: toast.POSITION.TOP_RIGHT
        })
        return <Navigate to='/' />
    }

    return children;
}

export default RequireAuth;