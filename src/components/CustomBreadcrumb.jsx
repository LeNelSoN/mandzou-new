import React from 'react'

const CustomBreadcrumb = () => {
  return (
    <div className='fixed-top pt-5 bg-light'>
        <div className='pt-1 container d-flex'>
            <a href='#presentation'>Présentation</a>
            <p className='mx-3'>/</p>
            <a href='#pince-tissu'>Pince Tissu</a>
            <p className='mx-3'>/</p>
            <a href='#pince-plume'>Pince Plume</a>
            <p className='mx-3'>/</p>
            <a href='#bibi'>Bibi</a>
            <p className='mx-3'>/</p>
            <a href='#headband'>Headband</a>
            <p className='mx-3'>/</p>
            <a href='#barette'>Barrette</a>
            <p className='mx-3'>/</p>
            <a href='#bijoux'>Bijoux</a>
        </div>
    </div>
  )
}

export default CustomBreadcrumb