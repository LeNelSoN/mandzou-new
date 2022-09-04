import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

function Landing() {
  return (
    <>
      <Carousel />
      <div className='container'>
        <Card />
      </div>
    </>
  )
}

export default Landing