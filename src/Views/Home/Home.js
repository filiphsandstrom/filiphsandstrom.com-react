import React, { Component } from 'react';

import News from '../../Components/News';
import InstagramFeed from '../../Components/InstagramFeed';

import './Home.css';

class Home extends Component {
    componentDidMount() {
        document.title = "Home - Filiph Sandstrom"; // FIXME:
    }

    render() {
        return (
			<div className="home">
                <div className="extended-container">
                    <h1 className="title main-title">Howdy o' Hi!</h1>
                </div>

                <div className="content">
                    <News />

                    <InstagramFeed token={"1936153195.225a789.de019d993b8a498088ac266e86aee79e"} />
                </div>
			</div>
        );
    }
}

export default Home;
