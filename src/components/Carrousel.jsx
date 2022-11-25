import React, { useEffect, useState } from 'react'
const Carrousel = () => {

    const [photoIndex, setPhotoIndex] = useState(1)

    useEffect(() => {
        let counter = photoIndex;
        setInterval(()=>{
            if(counter >= 5){
                counter = 0
            }
            counter++
            setPhotoIndex(counter)
        }, 4000); 

    }, [photoIndex])
    

  return (
    <div>
        <img src={require(`../assets/carousel/photo_carousel0${photoIndex}.jpg`)} alt="carrousel" className='container'/>
    </div>
  )
}

export default Carrousel