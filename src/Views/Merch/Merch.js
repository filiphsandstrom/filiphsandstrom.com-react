import React, { Component } from 'react';

import './Merch.css';

class Merch extends Component {
    componentDidMount () {
        document.title = "Merch - Filiph Sandstrom"; // FIXME:

        const script = document.createElement("script");

        script.src = "https://shop.spreadshirt.se/shopfiles/shopclient/shopclient.nocache.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="merch-page extended-container">
                <div id="myShop"></div>
            </div>
        );
    }
}

export default Merch;