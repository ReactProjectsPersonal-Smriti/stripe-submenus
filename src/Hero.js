import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section onMouseOver={closeSubmenu} className='hero'>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Payment infrastructure for the internet</h1>
          <p>
            heterogeneous mixture; medley; mixture of dried flower petals a pot (to give a pleasant smell to a room)
            heterogeneous mixture; medley; mixture of dried flower petals a pot (to give a pleasant smell to a room)
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className='phone-img' alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero
