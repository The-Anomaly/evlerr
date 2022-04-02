import React from 'react';
import DashboardCards from '../../components/cards/DashboardCards';

const Reviews = () => {
    return (
        <>
            <main className={'dashBg pl15 pr15 pt40 h100'}>
                <div className={'pb40'}>
                    <h2 className={'f34 boldText headerColor'}>Reviews</h2>
                </div>
                <section >
                    <DashboardCards>
                        <div>
                            <h2 className={'f22 boldText headerColor pb20'}>All Reviews</h2>
                            <p className={'f14 regularText headerColor'}>No reviews found.</p>
                        </div>
                    </DashboardCards>
                </section>
            </main>
        </>
    )
}

export default Reviews