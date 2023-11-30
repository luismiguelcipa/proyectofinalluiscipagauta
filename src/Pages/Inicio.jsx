import InicioCarousel from "../components/InicioCarousel"
import InicioFeatures from "../components/InicioFeatures";
import InicioHero from "../components/InicioHero";
import MapaTunja from "../components/MapaTunja";


const Inicio = () => { 
    return(
        <>
        
       
<InicioCarousel/>
<h1 className="titulostransporte text-center my-5 text-uppercase">"moverse en tunja se volvio dificil, estamos creciendo"</h1>
<InicioFeatures/>
<h1 className=" titulostransporte text-center my-5 text-uppercase">puede ser molesto pero, hay que ser inteligentes</h1>
<h2 className=" titulostransporte text-center my-5 text-uppercase">aqui puedes revisar en tiempo real el estado del trafico</h2>

<MapaTunja/>

<InicioHero/>





        
        </>
    )
 }
 export default Inicio;