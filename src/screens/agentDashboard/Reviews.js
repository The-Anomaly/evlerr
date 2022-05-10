import React from 'react';
import DashboardCards from '../../components/cards/DashboardCards';
import '../../assets/style/reviews.css'
import ReviewRow from '../../components/agentDashboard/ReviewRow';

const Reviews = () => {
    return (
        <>
            <main className={'dashBg pl15 pr15 pt40 h100'}>
                <div className={'pb40'}>
                    <h2 className={'f34 boldText headerColor'}>Reviews</h2>
                </div>
                <section>
                    <DashboardCards>
                        <div className='pb30' style={{ padding: '15px' }}>
                            <h2 className={'f22 boldText headerColor pb20'}>All Reviews</h2>
                            <ReviewRow 
                            name={'Agent pakulla'}
                            date={'June 36, 2020'}
                            starcount={4}
                            review={'Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!'}
                            />
                            <div className="pt20 pb20">
                                <hr />
                            </div>
                            <ReviewRow 
                            name={'Agent pakulla'}
                            date={'June 36, 2020'}
                            starcount={2}
                            review={'Excelent theme.'}
                            />
                            <div className="pt20 pb20">
                                <hr />
                            </div>
                            <ReviewRow 
                            name={'Tom wilson'}
                            date={'June 36, 2020'}
                            starcount={4}
                            review={'Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!'}
                            />
                            <div className="pt20 pb20">
                                <hr />
                            </div>
                            <ReviewRow 
                            name={'Admin'}
                            date={'June 36, 2020'}
                            starcount={5}
                            review={'Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!'}
                            />
                            <div className="pt20 pb20">
                                <hr />
                            </div>
                            <ReviewRow 
                            name={'Agent pakulla'}
                            date={'June 36, 2020'}
                            starcount={3}
                            review={'Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!'}
                            />
                        </div>
                    </DashboardCards>
                </section>
            </main>
        </>
    )
}

export default Reviews