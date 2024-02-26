import react from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function NavBar(){
    return(
        <div>
            <header>
                <div class="logo">Keeper</div>
                <input type="checkbox" id="nav_check" hidden />
        </header>
    </div>
    );
}

export default NavBar;