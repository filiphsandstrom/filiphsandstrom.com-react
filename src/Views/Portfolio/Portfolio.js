import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Freelance - Filiph Sandstrom</title>
                </Helmet>

                <div className="extended-container">
                    <h1 className="title main-title">Freelance</h1>
                </div>
                <div className="events-page align-center">
                    <h4>
                        Howdy,
                        <br />
                        I'm available for quick and simple <i>Web</i> or{' '}
                        <i>C++</i> work.
                        <br />
                    </h4>

                    <div className="bookings">
                        <p>Bookings: filiph.sandstrom@filfatstudios.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
