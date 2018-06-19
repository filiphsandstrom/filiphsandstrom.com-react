import React, { Component } from 'react';
import moment from 'moment';
import Event from '../../Components/Event';

import EventsData from './Events.json';

import './Events.css';

class Events extends Component {
    componentDidMount() {
        document.title = "Events - Filiph Sandstrom"; // FIXME:
    }

    render() {
        let events = [];
        let past_events = [];
        const today = moment(new Date());

        for (var i = 0; i < EventsData.length; i++) {
            if (1 > moment(EventsData[i].date).diff(today, 'days'))
                past_events.push(<Event key={i} data={EventsData[i]}/>);
            else
                events.push(<Event key={i} data={EventsData[i]}/>);
        }

        return (
            <div className="events-page">
                <div className="extended-container">
                    <h1 className="title main-title">Events</h1>
                </div>
                <div className="events">{events}</div>

                {
                    past_events.length > 0 ? <div>
                        <h1 className="title">Past Events</h1>
                        <div className="events">{past_events}</div>
                    </div> : null
                }

                <div className="bookings">
                    <p>Bookings: filiph@filfatstudios.com</p>
                </div>
            </div>
        );
    }
}

export default Events;