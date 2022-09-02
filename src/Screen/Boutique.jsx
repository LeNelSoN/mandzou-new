import React from 'react'
import CategoryCard from '../components/CategoryCard'

function Boutique() {
  return (
    <div className='container'>
      <div className='d-flex'>
        <CategoryCard title={'Titre 1'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nemo laborum minima debitis. Consectetur voluptates natus laborum minus nihil doloremque saepe accusantium perferendis asperiores non dolorum, suscipit autem nemo ullam.'} img={'https://picsum.photos/500/500?random=1'}/>
        <CategoryCard title={'Titre 2'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nemo laborum minima debitis. Consectetur voluptates natus laborum minus nihil doloremque saepe accusantium perferendis asperiores non dolorum, suscipit autem nemo ullam.'} img={'https://picsum.photos/500/500?random=2'}/>
      </div>
    </div>
  )
}

export default Boutique