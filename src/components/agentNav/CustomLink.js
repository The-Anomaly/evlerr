import React from "react";
import { Link, useMatch, useResolvedPath, } from "react-router-dom";
import './Nav.css';
// import type { LinkProps } from "react-router-dom";



function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                to={to}
                {...props}
                className={match ? 'selected' : ''}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
                {children}
            </Link>

        </div>
    );
}

export default CustomLink;