import React, { useState } from 'react'

import closebtn from '../../images/thirdSlide/advantages/closebtn.png'
import arrowbtn from '../../images/thirdSlide/advantages/arrowbtn.png'
import pageindicator from '../../images/thirdSlide/advantages/pageindicator.png'

const pageContent = {
  1: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Faucibus pulvinar elementum integer enim',
    'Faucibus pulvinar elementum integer enim',
  ],
  2: [
    'Mi bibendum neque egestas congue quisque egestas diam',
    'Venenatis lectus magna fringilla urna',
    'Venenatis lectus magna fringilla urna',
  ],
}

const renderAdvList = (pageNum) =>
  pageContent[pageNum].map((el, i) => (
    <div key={i + pageNum * pageNum}>
      <span className="advantages-box__item-number">{`0${
        i + pageNum * pageNum
      }`}</span>
      <p>{el}</p>
    </div>
  ))

const Advantages = ({ setPageOpen }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageIndicatorStyle =
    currentPage === 2 ? { transform: 'scale(-1, 1)' } : null

  return (
    <div className="advantages-box__background-dark">
      <div className="advantages-box">
        <h3 className="advantages-box__title">преимущества</h3>
        <section className="advantages-box__list">
          {renderAdvList(currentPage)}
        </section>
        <div className="advantages-box__button">
          <button
            className="advantages-box__btn-left"
            onClick={() => setCurrentPage(1)}
          >
            <img src={arrowbtn} alt="left button" />
          </button>
          <img
            src={pageindicator}
            alt="page indicator"
            style={pageIndicatorStyle}
          />
          <button
            className="advantages-box__btn-right"
            onClick={() => setCurrentPage(2)}
          >
            <img src={arrowbtn} alt="right button" />
          </button>
        </div>
        <button
          className="advantages-box__btn-close"
          onClick={() => setPageOpen('keymessage')}
        >
          <img src={closebtn} alt="close" />
        </button>
      </div>
    </div>
  )
}

export default Advantages
