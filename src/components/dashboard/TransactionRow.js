import React from 'react'

const TransactionRow = ({ orderID, packages, amount, date, paymentMode, status }) => {
    return (
        <section className={'transactionRowContainer pb20 pt20 pl20 pr20 bgWhite'}>
            <ul className={'tableCells borderBt pb10'}>
                <li className={'f14 boldText headerColor'} >{orderID}</li>
                <li className={'f14 boldText headerColor'}>{packages}</li>
                <li className={'f14 boldText headerColor'} >{amount}</li>
                <li className={'f14 regularText headerColor'} >{date}</li>
                <li className={'f14 regularText headerColor'} >{paymentMode}</li>
                <li className={'f14 boldText headerColor'} >{status}</li>
            </ul>
        </section>
    )
}

export default TransactionRow