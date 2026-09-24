import {Link} from "react-router-dom";

export function Pagina1() {
    return (
        <div>
            <h1>Estamos en home</h1>
            <Link to={"/pagina2"}>Ir a Pagina2</Link>
        </div>
    );
}