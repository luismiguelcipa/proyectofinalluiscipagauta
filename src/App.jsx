import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./Pages/Inicio";
import Informate from "./Pages/Informate";
import Transportate from "./Pages/Transportate";
import "./App.css";
import Footer from "./components/Footer";



const App = () => { 
return(<>

<div className="todo">
 <NavBar />
 
      <Routes>
        <Route element={<Inicio />} path="/"></Route>
        <Route element={<Informate />} path="/informate"></Route>
        <Route element={<Transportate />} path="/transportate"></Route>
    

      </Routes>
      <Footer/>
      </div>
</>)
 }
 export default App;