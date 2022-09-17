import AnimaisRandom from './animais';
import Galeria from './galeria';
import { Link, Outlet } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to="/animais">animais aleatorios</Link>

                </li>
                <li>
                    <Link to="/galeria">galeria</Link>
                </li>
            </ul>
        </nav>
        <Outlet></Outlet>
        
        </>
    )
}
export default Navbar;
