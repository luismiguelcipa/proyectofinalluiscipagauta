import poblacion from "../assets/Images/poblacion.jpg"
import tranconesbuses from "../assets/Images/tranconesbuses.jpg"
import tunjacrece from "../assets/Images/tunjacrece.png"
const InicioFeatures = () => {
  return (
    <>
      <div class="container px-4 py-5" id="featured-3 flex">
        <h2 class="pb-2 border-bottom  titulostransporte text-center">pero, ¿por que?</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
      
            </div>
            <h3 class="fs-2 text-body-emphasis">Tunja se esta poblando</h3>
            <p>y a mas poblacion, mas vehiculos, por ende, mas trancones y movilidad mas complicada</p>
            <img src={poblacion} className="mx-4" width="70%" alt="" /> <br />
            <a href="https://www.eltiempo.com/archivo/documento/MAM-568305" class="icon-link my-3">
              y esto es noticia reciente
              <svg class="bi"><use xlink: href="#chevron-right"></use></svg>
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <h3 class="fs-2 text-body-emphasis">mas gente, menos vias</h3>
            <p>la poblacion y vehiculos aumentaron ¿el problema? tenemos las mismas vias de hace 30 años</p>
            <img className="mx-5" src={tranconesbuses}  width="60%" alt="" />
            <a href="https://www.las2orillas.co/la-pesadilla-de-usar-transporte-publico-en-tunja/" class="icon-link">
              un problema que afecta a todos
              <svg class="bi"><use xlink: href="#chevron-right"></use></svg>
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <h3 class="fs-2 text-body-emphasis">crecimiento geografico</h3>
            <p>gracias a la extension territorial de la ciudad(mayormente al norte), la poblacion que vive ahi, contrubuye a la congestion vial</p>
            <img src={tunjacrece} className="mx-4" width="70%" alt=""  />
            <a href="https://www.researchgate.net/figure/Ilustracion-del-plano-actual-de-Tunja-con-crecimiento-lineal-y-fragmentado-Fuente_fig1_370582231" class="icon-link">
              ciudad en crecimiento
              <svg class="bi"><use xlink: href="#chevron-right"></use></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default InicioFeatures;