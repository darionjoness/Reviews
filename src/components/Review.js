import React from 'react'
import Button from './Button'
import {FaChevronRight, FaChevronLeft, FaQuoteRight} from 'react-icons/fa'

const Review = ({ idx, reviews, nextReview, prevReview, supriseMe    }) => {
  return (
    <div className='review'>
        <div className="reviewImg">
            <img src={reviews[idx].image} alt="" />
            <p className='rightQuote'><FaQuoteRight /></p>
        </div>
        <div className="reviewText">
            <h3>{reviews[idx].name}</h3>
            <h4>{reviews[idx].job}</h4>
            <p>{reviews[idx].text}</p>
        </div>
        <div className="changeReview">
            <Button text={<FaChevronLeft />} classText={'leftBtn'} onClick={prevReview} />
            <Button text={<FaChevronRight />} classText={'rightBtn'} onClick={nextReview} />
        </div>
        <Button text={'Suprise Me'} classText={'suprise'} onClick={supriseMe} />
    </div>
  )
}

export default Review