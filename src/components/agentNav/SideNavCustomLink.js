import React from "react";
import { Link, useMatch, useResolvedPath, } from "react-router-dom";
import './Nav.css';
// import type { LinkProps } from "react-router-dom";



function SideCustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                to={to}
                {...props}
                className={match ? 'activeSideNavLink' : ' sideNavInactive'}
            >
                {children}
            </Link>

        </div>
    );
}

export default SideCustomLink;