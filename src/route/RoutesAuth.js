import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
    let auth = useSelector(state => state.auth);
    let location = useLocation();
    // console.log(auth.userData);

    if (auth.userData == '') {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        // return <Navigate to="/login" state={{ from: location }} replace />;
        console.log('going to redirect');
    }

    return children;
}

export default RequireAuth;