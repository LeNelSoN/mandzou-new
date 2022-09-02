import React from 'react'


function CategoryCard({title, description, img}) {
  return (
    <div class="card bg-dark text-white m-2">
        <img src={img} class="card-img" alt={title}/>
        <div class="card-img-overlay">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
        </div>
    </div>  
    )
}

export default CategoryCard