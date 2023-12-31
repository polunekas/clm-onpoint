import React from 'react'
import './First.css'
import next from '../../images/firstSlide/btn-next.png'
import pink1 from '../../images/firstSlide/pink1.png'
import pink2 from '../../images/firstSlide/pink2.png'
import bakt1 from '../../images/firstSlide/bakt1.png'
import bakt2 from '../../images/firstSlide/bakt2.png'
import bakt3 from '../../images/firstSlide/bakt3.png'
import bakt4 from '../../images/firstSlide/bakt4.png'
import bakt5 from '../../images/firstSlide/bakt5.png'
import bakt6 from '../../images/firstSlide/bakt6.png'
import baktbigbottom from '../../images/firstSlide/baktbigbottom.png'

const First = ({ setSlide }) => {
  return (
    <div className="first-slide">
      <div className="first-slide__content">
        <h3 className="first-slide__title">привет,</h3>
        <h1>
          это <strong>не</strong> коммерческое задание
        </h1>
      </div>
      <button className="first-slide__btn-next" onClick={setSlide(1)}>
        <img src={next} alt="next-button" />
      </button>
      <img src={pink1} className="first-slide__pink-1" />
      <img src={pink2} className="first-slide__pink-2" />
      <img src={bakt1} className="first-slide__bakt-1" alt="bakteria" />
      <img src={bakt2} className="first-slide__bakt-2" alt="bakteria" />
      <img src={bakt3} className="first-slide__bakt-3" alt="bakteria" />
      <img src={bakt4} className="first-slide__bakt-4" alt="bakteria" />
      <img src={bakt5} className="first-slide__bakt-5" alt="bakteria" />
      <img src={bakt6} className="first-slide__bakt-6" alt="bakteria" />
      <img
        src={baktbigbottom}
        className="first-slide__bakt-big"
        alt="bakteria"
      />
    </div>
  )
}

export default First
