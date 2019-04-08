import React, { Component } from 'react';
import moment from 'moment';

import './Event.css';

class Event extends Component {
    render() {
        return (
            <div className="event">
                <span className="date">
                    {moment(this.props.data.date).format('MMM DD, YYYY')}
                </span>
                <span className="content">
                    <div className="data">
                        <div className="text title">
                            {this.props.data.title}
                        </div>
                        <div className="text location">
                            {this.props.data.location}
                        </div>
                    </div>
                    {!this.props.past_event ||
                    this.props.data.private ||
                    this.props.data.status ? (
                        <div className="tickets">
                            <a className="ticket private">
                                {this.props.data.status}
                            </a>
                        </div>
                    ) : (
                        <div className="tickets">
                            <a
                                className="ticket"
                                href={this.props.data.tickets.normal}
                            >
                                Buy Ticket
                            </a>
                            {this.props.data.tickets.vip ? (
                                <a
                                    className="ticket vip"
                                    href={this.props.data.tickets.vip}
                                >
                                    VIP Ticket
                                </a>
                            ) : null}
                        </div>
                    )}
                </span>
            </div>
        );
    }
}

export default Event;
