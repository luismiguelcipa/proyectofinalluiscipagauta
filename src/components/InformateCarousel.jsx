import ruta1 from "../assets/rutas/ruta1.jpg"
import ruta2 from "../assets/rutas/ruta2.jpg"
import ruta3 from "../assets/rutas/ruta3.jpg"
import ruta4 from "../assets/rutas/ruta4.jpg"
import ruta5 from "../assets/rutas/ruta5.jpg"
import ruta6 from "../assets/rutas/ruta6.jpg"
import ruta7 from "../assets/rutas/ruta7.jpg"
import ruta8 from "../assets/rutas/ruta8.jpg"
import ruta9 from "../assets/rutas/ruta9.jpg"
import ruta10 from "../assets/rutas/ruta10.jpg"
import ruta11 from "../assets/rutas/ruta11.jpg"
import ruta12 from "../assets/rutas/ruta12.jpg"
import ruta13 from "../assets/rutas/ruta13.jpg"
import ruta14 from "../assets/rutas/ruta14.jpg"
import ruta15 from "../assets/rutas/ruta15.jpg"
import ruta16 from "../assets/rutas/ruta16.jpg"
import ruta17 from "../assets/rutas/ruta17.jpg"
import ruta18 from "../assets/rutas/ruta18.jpg"
import ruta19 from "../assets/rutas/ruta19.jpg"
import ruta20 from "../assets/rutas/ruta20.jpg"
import ruta21 from "../assets/rutas/ruta21.jpg"



const InformateCarousel = () => { 
return(
    <>
    <div className='datos col-7 my-5'>
    <div id="carouselExample" className=" carruselInicio carousel slide text-center " >
      
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ruta1} className="d-block mx-auto" width="80%" alt="..." ></img>
    </div>
    <div className="carousel-item">
      <img src={ruta2} className="d-block mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta3} className="d-block mx-auto "  width="80%" alt="..." ></img>
    </div>
    <div className="carousel-item">
      <img src={ruta4} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta5} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta6} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta7} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta8} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta9} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta10} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta11} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta12} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta13} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>  
    <div className="carousel-item">
      <img src={ruta14} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta15} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta16} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta17} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta18} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta19} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta20} className="d-block  mx-auto" width="80%"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={ruta21} className="d-block  mx-auto" width="80%"  alt="..."></img>
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
</div>
    
    </>
)
 }
 export default InformateCarousel;