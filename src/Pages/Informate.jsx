import Formulario from "../components/Formulario";
import InformateCarousel from "../components/InformateCarousel";

const Informate = () => { 
    return(
        <>

        <h1 className="titulostransporte text-center my-5 text-uppercase">NADIE SE LAS SABE TODAS</h1>
        <br /> <br />
        <h1 className=" titulostransporte text-center col-7 mx-4 px-4">Pero no te preocupes, no esta mal, por eso puedes informarte de las rutas que recorren nuestra ciudad</h1>
        <div className="datos">
<InformateCarousel/>
<div className="formulario col-3">
<h2 className="titulostransporte">nosotros tampoco nos la sabemos todas</h2>
<br />
<h4 className="titulostransporte">registrate y dejanos saber tus comentarios</h4>
<br />
<br />
<Formulario/>
 
 <h2 className="titulostransporte"></h2>
</div>

</div>
        </>
    )
 }
 export default Informate;