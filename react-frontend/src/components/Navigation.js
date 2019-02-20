import React from 'react';


class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/livres">Livres</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Recherche" aria-label="Recherche" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Recheche</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navigation;