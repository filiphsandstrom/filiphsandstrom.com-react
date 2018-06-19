import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import News from '../../Components/News';

import './Home.css';

class Home extends Component {
    componentDidMount() {
        document.title = "Home - Filiph Sandstrom"; // FIXME:
    }

    render() {
        return (
			<div className="home">
                <h1 className="title">todo</h1>
                <News />
			</div>
        );
    }
}

export default Home;
