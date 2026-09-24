import {Link} from "react-router-dom";

export function PagNoVale() {
    return (
        <div>
            <h1>Pagina no encontrada error 404</h1>
            <Link to="/">Ir al home</Link>
        </div>
    );
}