import useBreadcrumbs from 'use-react-router-breadcrumbs';
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
    console.log(breadcrumbs[0])
    console.log(breadcrumbs[0].breadcrumb.props.children)
    console.log(breadcrumbs[0].key)
    const homeKey = breadcrumbs[0].key
    const locationKey = breadcrumbs[0].location.pathname
    const fromTitle = breadcrumbs[0].breadcrumb.props.children
    const currentLocation = breadcrumbs[0].location.pathname


    return (
        <>
            <div>
                {/* {breadcrumbs.map(({ breadcrumb }) => { <div><span>{breadcrumb[0]}</span> <p>{ }</p></div> })} */}
                <Link to={homeKey}>
                    {fromTitle}
                </Link>
                <Link to={locationKey} style={{ textTransform: 'capitalize' }}>
                    {currentLocation}
                </Link>
            </div>
        </>
    );
}
export default Breadcrumbs;