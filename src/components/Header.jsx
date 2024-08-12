import { NavLink } from "react-router-dom";
import "../styles/Header.css"


export default function Header(){

    return(
        <header>
            <div id="titleContainer">
                <img id="titleCard" src="/src/media/Inventory-Mimic-8-12-2024.png" alt="Inventory Mimic Pic"/>
            </div>
            <div id="logoutButton">
                Logout
            </div>
        </header>
    )
}