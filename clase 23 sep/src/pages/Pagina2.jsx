import {Link} from "react-router-dom";

export function Pagina2 () {
    return (
        <div>
            <h1>Estamos en Pagina2</h1>
            <Link to={"/"}>Ir al home</Link>
        </div>
    );
}