import React from 'react'

const HoverCard = ({ children }) => {
    return (
        <>
            <section className='hoverCardContainer'>
                {children}
            </section>
        </>
    )
}

export default HoverCard