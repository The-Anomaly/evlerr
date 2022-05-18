import React from 'react'
import agenttwo from "../../assets/images/agenttwo.jpeg";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewRow = ({ name, date, review, starcount }) => {


    let rating = []
    for (let i = 0; i < 5; i++) {
        if (i < starcount) {
            rating.push(<AiFillStar />)
        } else {
            rating.push(<AiOutlineStar />)
        }
    }
    
  return (
    <div className='review-row'>
        <div className='avatar'>
            <img src={agenttwo} alt={'avatar'} />
        </div>
        <div>
            <div className="pb10">
                <p className='pb5'>
                    <b>{name}</b> 
                    <span className='pl10 star-rating'>
                        {rating}
                    </span>
                </p>
                <span>{date}</span>
            </div>
            <p>{review}</p>
        </div>
    </div>
  )
}

export default ReviewRow