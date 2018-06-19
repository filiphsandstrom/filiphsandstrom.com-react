import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    state = {
        menuOpen: false
    };

    constructor (props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu (id) {
        this.setState({menuOpen: !this.state.menuOpen});
    }

    render () {
        return (
            <header>
                <div className="content">
                    <div className="logo">
                        Filiph Sandstrom
                        <div className="menu-toggle" onClick={this.toggleMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <nav className={this.state.menuOpen ? "open" : ""} onClick={this.toggleMenu}>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/events">
                            Events
                        </Link>
                        <Link to="/music">
                            Music
                        </Link>
                        <Link to="/merch">
                            Merch
                        </Link>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;