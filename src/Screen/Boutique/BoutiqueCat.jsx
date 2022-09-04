import React from 'react'
import Article from '../../components/Article'

function BoutiqueCat({title}) {
  return (
    <div className='container'>
      <h2>{title}</h2>
      <div className='row'>
        <Article title={'Truc'} img={"https://picsum.photos/200/200?random=1"} price={39}/>
        <Article title={'Truc 2'} img={"https://picsum.photos/200/200?random=2"} price={99}/>
        <Article title={'Machin'} img={"https://picsum.photos/200/200?random=3"} price={49}/>
        <Article title={'Bidule'} img={"https://picsum.photos/200/200?random=4"} price={129}/>
      </div>
    </div>
  )
}

export default BoutiqueCat