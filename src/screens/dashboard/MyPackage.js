import React from 'react';
import TransactionRow from '../../components/dashboard/TransactionRow';


const MyPackage = () => {
    return (
        <main className={'dashBg pl15 pr15 pt40 h100 pb40'}>
            <div className={'pb30'}>
                <h2 className={'f34 boldText headerColor'}>Transactions</h2>
            </div>

            <section className={'membersCard'}>
                <div className={'tableHeader'} style={{ marginBottom: '0' }}>
                    <ul className={'tableCells'}>
                        <li className={'f14 boldText white'}>Order ID</li>
                        <li className={'f14 boldText white'}>Package</li>
                        <li className={'f14 boldText white'}>Amount</li>
                        <li className={'f14 boldText white'}>Date</li>
                        <li className={'f14 boldText white'}>Payment Mode</li>
                        <li className={'f14 boldText white'}>Status</li>
                    </ul>
                </div>
                <div className={'border btRadius'}>
                    <TransactionRow orderID={'3541'} packages={'Premium Plan'} amount={'$291'} date={'March 22, 2022'} paymentMode={'bacs'} status={'Pending'} />
                    <TransactionRow orderID={'3541'} packages={'Premium Plan'} amount={'$291'} date={'March 22, 2022'} paymentMode={'bacs'} status={'Pending'} />
                    <TransactionRow orderID={'3541'} packages={'Premium Plan'} amount={'$291'} date={'March 22, 2022'} paymentMode={'bacs'} status={'Pending'} />
                    <TransactionRow orderID={'3541'} packages={'Premium Plan'} amount={'$291'} date={'March 22, 2022'} paymentMode={'bacs'} status={'Pending'} />
                    <TransactionRow orderID={'3541'} packages={'Premium Plan'} amount={'$291'} date={'March 22, 2022'} paymentMode={'bacs'} status={'Pending'} />
                    <TransactionRow orderID={'3541'} packages={'Premium Plan'} amount={'$291'} date={'March 22, 2022'} paymentMode={'bacs'} status={'Pending'} />

                </div>
            </section>
        </main >

    )
}

export default MyPackage