import React, { useState } from 'react'

import First from './First/First.jsx'
import Second from './Second/Second.jsx'

import logo from './../images/onpoint.png'
import home from './../images/home.png'
import './App.css'

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [mouseDown, setMouseDown] = useState(false)

  const slideMax = 2
  const slideWidth = 1024
  const posThreshold = 100

  const setSlide = (slideIndex) => () => {
    setCurrentSlide(slideIndex)
    setCurrentX(slideIndex * -slideWidth)
  }

  const functionSwipeStart = (e) => {
    const evt = e.clientX ? e : e.touches[0]
    setStartX(evt.clientX)
    setMouseDown(true)
  }

  const functionSwipeMove = (e) => {
    if (!mouseDown) return

    const evt = e.clientX ? e : e.touches[0]

    const diff = Math.abs(startX - evt.clientX) < 30 ? 0 : startX - evt.clientX

    let x = currentX - diff

    if (x > 0) {
      x = 0
    }

    if (x < -slideWidth * slideMax) {
      x = -slideWidth * slideMax
    }

    if (
      (currentSlide === 0 && x > 0) ||
      (currentSlide === slideMax && x < -slideWidth * slideMax)
    ) {
      return
    }

    setCurrentX(x)
  }

  const functionSwipeEnd = (e) => {
    const finalX = e.clientX || e.changedTouches[0].clientX

    let nextSlide = currentSlide

    if (Math.abs(startX - finalX) > posThreshold) {
      if (startX > finalX) {
        nextSlide = currentSlide < slideMax ? currentSlide + 1 : currentSlide
      } else {
        nextSlide = currentSlide === 0 ? currentSlide : currentSlide - 1
      }
    }

    setCurrentSlide(nextSlide)
    setCurrentX(nextSlide * -slideWidth)
    setMouseDown(false)
  }

  return (
    <div className="container">
      <div
        className="container__slide"
        onTouchMove={functionSwipeMove}
        onTouchStart={functionSwipeStart}
        onTouchEnd={functionSwipeEnd}
        onMouseDown={functionSwipeStart}
        onMouseMove={functionSwipeMove}
        onMouseUp={functionSwipeEnd}
        style={{
          transform: `translate(${currentX}px, 0)`,
          cursor: mouseDown ? 'grabbing' : 'grab',
        }}
      >
        <First setSlide={setSlide} />
        <Second currentSlide={currentSlide} />
        <Third />
      </div>
      <img src={logo} className="container__logo" alt="logo" />
      <button className="container__btn-home" onClick={setSlide(0)}>
        <img src={home} alt="home button" />
      </button>
    </div>
  )
}

export default App
