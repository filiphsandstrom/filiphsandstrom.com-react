import React, { Component } from "react";
import InstagramEmbed from 'react-instagram-embed';

import "./InstagramFeed.css";

class InstagramFeed extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    componentDidCatch(error) {
        this.setState({ hasError: true });

        setTimeout(() => {
            this.setState({ hasError: false });
        }, 2000);
    }

    render() {
        if (this.state.hasError)
            return <div></div>;

        const images = [
            'https://www.instagram.com/p/BkFGwTPB3NV/',
            'https://www.instagram.com/p/BbuBasWn2DN',
            'https://www.instagram.com/p/BeQ8GMNnkIR',
            'https://www.instagram.com/p/BYvcu6enjeW',
            'https://www.instagram.com/p/Bc-0DGdHWA3',
            'https://www.instagram.com/p/BWuokiknMoM',
            'https://www.instagram.com/p/BL_wMR9h5O0'
        ];

        let gallery = [];
        for (var i = 0; i < images.length; i++) {
            gallery.push(<InstagramEmbed
                    key={i}
                    className="instagram-photo"
                    url={images[i]}
                    maxWidth={320}
                    hideCaption={true}
                    containerTagName='span'
                    protocol='https'
                />);
        }

        return (
			<div className="instagram-feed">
                {gallery}
            </div>
        );
    }
}

export default InstagramFeed;