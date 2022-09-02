import React from 'react'
import CarouselBs from '../components/Carousel'

function Landing() {
  return (
    <>
      <CarouselBs />
      <div className='container p-5 bg-dark text-light'>
        <div className='row'>
          <div className='col-6'>
            <p>Inscrivez-vous à la newsletter pour suivre les nouveautés</p>
          </div>
          <div className='col-6 d-flex flex-column'>
          <form>
            <div className="mb-3">
              <label className="form-label">Votre Nom</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input type="email" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing