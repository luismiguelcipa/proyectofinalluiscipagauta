import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <>
           
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-10" >
                <div className="container">
                    <NavLink className="btn btn-outline-success btn-lg" to="/">Inicio</NavLink>
                    <NavLink className="btn btn-outline-warning btn-lg" to="/informate">informate</NavLink>
                    <NavLink className="btn btn-outline-danger btn-lg" to="/transportate">Transportate</NavLink>
                  
                  


                </div>
            </nav>
            
        </>
    )
}
export default NavBar;