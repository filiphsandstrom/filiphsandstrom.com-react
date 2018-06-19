import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

import List from '../../Components/List';

import './Music.css';
import TrackData from './tracks.json';

class Music extends Component {
    state = {
        selected: "0"
    }

    constructor (props) {
        super(props);
        this.setTrack = this.setTrack.bind(this);
    }

    setTrack(id) {
        this.setState({
            selected: id
        });
    }

    componentDidMount() {
        document.title = "Music - Filiph Sandstrom"; // FIXME:
    }

    render() {
        var selectedTrack = TrackData[0];
        for (var i = 0; i < TrackData.length; i++)
            if (TrackData[i].id === this.state.selected)
                selectedTrack = TrackData[i];

        return (
            <div>
                <div className="extended-container">
                    <h1 className="title main-title">Music/Performances</h1>
                </div>
                <div className="music-page">
                    <div className="selected-track">
                        { /* TODO: Add support for soundcloud */ }
                        { selectedTrack.youtube_url ? <ResponsiveEmbed src={selectedTrack.youtube_url} allowFullScreen /> : undefined }
                        <div className="selected-track-title">{selectedTrack.title}</div>
                        <div className="selected-track-description">{selectedTrack.description}</div>
                    </div>

                    <List selected={this.state.selected} list={TrackData} onChange={this.setTrack}></List>
                </div>
            </div>
        );
    }
}

export default Music;