import React from 'react'

import iconplate from '../../images/thirdSlide/keymessage/iconplate.png'
import iconcalendar from '../../images/thirdSlide/keymessage/iconcalendar.png'
import btnabout from '../../images/thirdSlide/keymessage/btnabout.png'

const Keymessage = ({ setPageOpen }) => (
  <div>
    <div className="keymessage-box">
      <h3 className="keymessage-title">ключевое сообщение</h3>
      <div className="columns-2">
        <div className="column-1">
          <img src={iconplate} className="plate" alt="plate icon" />
          <p>
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
          </p>
        </div>
        <div className="column-2">
          <img src={iconcalendar} className="calendar" alt="calendar icon" />
          <p>
            A arcu
            <br />
            cursus vitae
          </p>
        </div>
      </div>
      <button className="btn-about" onClick={() => setPageOpen('advantages')}>
        <img src={btnabout} alt="about" />
      </button>
    </div>
  </div>
)

export default Keymessage
