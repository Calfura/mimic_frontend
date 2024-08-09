import { NavLink } from "react-router-dom";
import "../styles/Header.css"


export default function Header(){

    return(
        <header>
            <div>
                Inventory Mimic
            </div>
            <nav id="headerNavbar">
                <NavLink to={"/"}>Homepage</NavLink>
                <NavLink>Test</NavLink>
            </nav>
        </header>
    )
}