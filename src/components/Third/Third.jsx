import React, { useState } from 'react'

import Keymessage from './Keymessage.jsx'
import Advantages from './Advantages.jsx'

import './Third.css'

import bubble1 from '../../images/thirdSlide/small-red-bubble.png'
import bubble2 from '../../images/thirdSlide/big-red-bubble.png'
import bubble3 from '../../images/thirdSlide/small-blue-bubble-1.png'
import bubble4 from '../../images/thirdSlide/medium-blue-bubble-2.png'
import bubble5 from '../../images/thirdSlide/medium-blue-bubble-1.png'
import bubble6 from '../../images/thirdSlide/big-blue-bubble.png'
import bubble7 from '../../images/thirdSlide/small-blue-bubble-2.png'
import bubble8 from '../../images/thirdSlide/medium-red-bubble.png'
import bottle from '../../images/thirdSlide/bottle.png'

const Third = () => {
  const [pageOpen, setPageOpen] = useState('keymessage')

  return (
    <div className="third-slider">
      <h2 className="third-slide__brand-name">
        brend<strong>xy</strong>
      </h2>

      {pageOpen === 'keymessage' ? (
        <Keymessage setPageOpen={setPageOpen} />
      ) : (
        <Advantages setPageOpen={setPageOpen} />
      )}

      <img src={bottle} className="third-slide__bottle" alt="spray bottle" />
      <img src={bubble1} className="third-slide__bubble-1" alt="bubble" />
      <img src={bubble2} className="third-slide__bubble-2" alt="bubble" />
      <img src={bubble3} className="third-slide__bubble-3" alt="bubble" />
      <img src={bubble4} className="third-slide__bubble-4" alt="bubble" />
      <img src={bubble5} className="third-slide__bubble-5" alt="bubble" />
      <img src={bubble6} className="third-slide__bubble-6" alt="bubble" />
      <img src={bubble7} className="third-slide__bubble-7" alt="bubble" />
      <img src={bubble8} className="third-slide__bubble-8" alt="bubble" />
    </div>
  )
}

export default Third
