import React from 'react'
import './hero.css'
import pic1 from '../../assets/images/pic_1.png'
import pic2 from '../../assets/images/pic_2.png'
import pic3 from '../../assets/images/pic_3.png'

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-left'>
        <div className='hero-content'>
          <p className='hero-title'>MORE THAN <br /> JUST A CLUB</p>
          <p className='hero-p'>
            The first Algerian scientific club, <br /> sharing computer science knowledge <br /> and experiences since 1985
          </p>
        </div>

        <div className='mc-info'>
          <div>
            <div>
              <p className='hero-nmbr'>1000</p>
              <p className='text'>Members</p>
            </div>
            <div>
              <p className='hero-nmbr'>58</p>
              <p className='text'>Events</p>
            </div>
          </div>

          <div>
            <div>
              <p className='hero-nmbr'>130</p>
              <p className='text'>Activities</p>
            </div>
            <div>
              <p className='hero-nmbr'>20</p>
              <p className='text'>Training/Year</p>
            </div>
          </div>
        </div>
      </div>

      <div className='hero-pics'>
        <img src={pic2} alt="" />
        <img src={pic1} alt="" />
        <img src={pic3} alt="" />
      </div>
    </section>
  )
}

export default Hero


