import React, { useState } from 'react';
import RenderNav from '../../components/nav/RenderNav';
import Loading from '../../utils/Loading';
import '../../assets/style/SubmissionStyles.css';
import CustomButton from '../../utils/CustomButton';
import PackagesCard from '../../components/cards/PackagesCard';
import { useNavigate } from 'react-router-dom';

const Submission = (props) => {

    const [state, setState] = useState({ loading: false })

    const renderLoading = () => {
        if (state.loading) {
            return (
                <Loading />
            )
        }
    }

    const navigate = useNavigate()
    const goToAddProperty = () => {
        navigate('/add-property')
    }

    return (
        <RenderNav boxShadow={'0px 1px 4px 0px rgb(0 0 0 / 9%)'}>
            {renderLoading()}
            <main className='submissionContainer'>
                <section>
                    <div>
                        <h2 className={'f30 headerColor boldText pb30'}>Your Packages</h2>
                    </div>
                    <section className='membersCard'>
                        <ul className='addListingGrid'>
                            <li>
                                <p className={'f14 boldText headerColor'}>Premium Plan</p>
                                <p className={'f14 regularText headerColor'}>0 properties posted out of 50, listed for 60 days</p>
                            </li>
                            <li>
                                <p className={'f14 boldText headerColor'}>Premium Plan</p>
                                <p className={'f14 regularText headerColor'}>0 properties posted out of 50, listed for 60 days</p>
                            </li>
                            <li>
                                <p className={'f14 boldText headerColor'}>Premium Plan</p>
                                <p className={'f14 regularText headerColor'}>0 properties posted out of 50, listed for 60 days</p>
                            </li>
                            <li>
                                <p className={'f14 boldText headerColor'}>Premium Plan</p>
                                <p className={'f14 regularText headerColor'}>0 properties posted out of 50, listed for 60 days</p>
                            </li>
                            <li>
                                <p className={'f14 boldText headerColor'}>Premium Plan</p>
                                <p className={'f14 regularText headerColor'}>0 properties posted out of 50, listed for 60 days</p>
                            </li>
                            <li>
                                <p className={'f14 boldText headerColor'}>Premium Plan</p>
                                <p className={'f14 regularText headerColor'}>0 properties posted out of 50, listed for 60 days</p>
                            </li>
                        </ul>
                        <CustomButton title={'Add Listing'} color={'#fff'} customStyle={{ backgroundColor: '#ff5a5f', width: '90px', margin: '20px 0 20px 0' }} onClick={goToAddProperty} />
                    </section>
                </section>
                <section>
                    <div>
                        <h2 className={'f30 headerColor boldText pb30 pt30'}>Packages</h2>
                    </div>
                    <section className='packagesGrid'>
                        <PackagesCard title={'Premium Plan'} price={'$291'} itemOne={'50 Property Listings'} itemTwo={'60 Days Availability'} itemThree={'Feature Properties'} itemFour={'Limited Support'}
                            onClick={goToAddProperty}
                        />
                        <PackagesCard custom={'0 0 50px 0 rgb(0 0 0 / 12%)'} title={'Premium Plan'} price={'$291'} itemOne={'50 Property Listings'} itemTwo={'60 Days Availability'}
                            itemThree={'Feature Properties'} itemFour={'Limited Support'} onClick={goToAddProperty} />
                        <PackagesCard title={'Premium Plan'} price={'$291'} itemOne={'50 Property Listings'} itemTwo={'60 Days Availability'} itemThree={'Feature Properties'} itemFour={'Limited Support'}
                            onClick={goToAddProperty}
                        />

                    </section>
                </section>
            </main>
        </RenderNav>
    )
}

export default Submission