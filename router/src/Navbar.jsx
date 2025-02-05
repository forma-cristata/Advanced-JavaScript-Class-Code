import {NavLink} from "react-router-dom";


export default function Navbar()
{
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className={({isActive}) => isActive? "nav-link active" : "nav-link"}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={"nav-link"}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/events" className={"nav-link"}>
                                Events
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/products" className={"nav-link"}>
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={"nav-link"}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}