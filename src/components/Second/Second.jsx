import React from 'react'
import './Second.css'

import sperm1 from './../../images/secondSlide/sperm1.png'
import sperm2 from './../../images/secondSlide/sperm2.png'
import sperm3 from './../../images/secondSlide/sperm3.png'
import sperm4 from './../../images/secondSlide/sperm4.png'

import ScrollableBlock from './ScrollableBlock/ScrollableBlock.jsx'

const Second = ({ currentSlide }) => {
  const imgStyle =
    currentSlide === 1
      ? { WebkitAnimation: `'sperm' 2s 1 normal ease-out` }
      : null

  return (
    <div className="second-slide">
      <div className="second-slide__content">
        <h3 className="second-slide__title">
          текст
          <br />
          сообщения
        </h3>
        <ScrollableBlock>
          <p className="second-slide__paragraph">
            <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut
            morbi tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam
            eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi
            etiam dignissim diam quis enim lobortis. Est sit amet facilisis
            magna. Neque laoreet suspendisse interdum consectetur libero id. Nec
            ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut
            porttitor leo a diam sollicitudin tempor id. Euismod quis viverra
            nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit
            amet massa vitae tortor condimentum lacinia. Et malesuada fames ac
            turpis egestas integer eget. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum posuere.
          </p>
          <p className="second-slide__paragraph">
            Amet justo donec enim diam vulputate ut pharetra sit. Risus
            ultricies tristique nulla aliquet enim tortor at auctor. Velit sed
            ullamcorper morbi tincidunt ornare massa. Quis hendrerit dolor magna
            eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque
            convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris
            sit amet massa vitae tortor condimentum lacinia quis vel.
          </p>
        </ScrollableBlock>
      </div>
      <img
        src={sperm1}
        style={imgStyle}
        className="second-slide__sp-1"
        alt="sperm"
      />
      <img
        src={sperm2}
        style={imgStyle}
        className="second-slide__sp-2"
        alt="sperm"
      />
      <img
        src={sperm3}
        style={imgStyle}
        className="second-slide__sp-3"
        alt="sperm"
      />
      <img
        src={sperm4}
        style={imgStyle}
        className="second-slide__sp-4"
        alt="sperm"
      />
      <img
        src={sperm2}
        style={imgStyle}
        className="second-slide__sp-5"
        alt="sperm"
      />
    </div>
  )
}

export default Second
