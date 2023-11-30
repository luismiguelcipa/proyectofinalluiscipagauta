
import trafico1 from '../assets/Images/trafico1.jpg'
import trafico2 from '../assets/Images/trafico2.JPG'
import trafico3 from '../assets/Images/trafico3.jpg'
import trafico4 from '../assets/Images/trafico4.jpeg'

const Carousel = () => { 
    return(
        <>
       
       <div id="carouselExample" className=" carruselInicio carousel slide text-center " >
       <h1 className="titulo text-uppercase fw-bold   ">tunja, la ciudad  que nos une</h1>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={trafico1} className="d-block mx-auto" width="100%" alt="..." ></img>
    </div>
    <div className="carousel-item">
      <img src={trafico2} className="d-block mx-auto" width="100%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={trafico3} className="d-block mx-auto "  width="100%" alt="..." ></img>
    </div>
    <div className="carousel-item">
      <img src={trafico4} className="d-block  mx-auto" width="100%"  alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div>
  
</div>

        </>
    )
 }
 export default Carousel;