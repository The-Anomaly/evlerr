import React from 'react'
import NavBar from './Nav'

const RenderNav = ({ children, boxShadow }) => {
    return (
        <>
            <main>
                <NavBar boxShadow={boxShadow} logo={true} />
                <section>
                    {children}
                </section>
            </main>
        </>
    )
}

export default RenderNav