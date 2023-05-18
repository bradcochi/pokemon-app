import { Link, NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">Pokemon</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/favorites'} className={'nav-link'}>Favorites</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/signup'} className={'nav-link'}>Sign Up</NavLink>
                        </li>
                    </ul>
                    <button className="btn btn-outline-danger">Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
