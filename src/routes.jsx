import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home     from "./Pages/Home";
import Empresa  from "./Pages/Empresa";
import Servicos from "./Pages/Servicos";
import Fotos    from "./Pages/Fotos";
import Videos   from "./Pages/Videos";
import Contato  from "./Pages/Contato";

function AppRoutes()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/empresa" element={ <Empresa /> }></Route>
                <Route path="/servicos" element={ <Servicos /> }></Route>
                <Route path="/fotos" element={ <Fotos /> }></Route>
                <Route path="/videos" element={ <Videos /> }></Route>
                <Route path="/contato" element={ <Contato /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes