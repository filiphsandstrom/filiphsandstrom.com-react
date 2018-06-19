import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="footer-wrapper">
                <div className="social-links">
                    <a href="https://www.instagram.com/filiphsandstrom/"><img src="/assets/instagram.svg"/></a>
                    <a href="https://twitter.com/filfat"><img src="/assets/twitter.svg"/></a>
                    <a href="https://www.youtube.com/user/Minefilfat"><img src="/assets/youtube.svg"/></a>
                </div>
                <footer>
                    <div className="copyrights">&copy; 2016-{(new Date()).getFullYear()} Filiph Sandstrom.</div>
                </footer>
            </div>
        );
    }
}
export default Footer;