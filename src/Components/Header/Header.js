import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {

    render () {
        return (
            <header>
                <div className="content">
                    <div className="logo">Filiph Sandstrom</div>
                    <nav>
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