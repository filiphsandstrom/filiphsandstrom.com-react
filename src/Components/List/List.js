import React, { Component } from 'react';
import Truncate from 'react-truncate';

import './List.css';

class List extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (id) {
        this.props.onChange(id);
    }

    render() {

        const data = this.props.list;

        var list = [];
        for (var i = 0; i < data.length; i++)
            list.push(<ListItem key={i} id={data[i].id} handleClick={this.handleClick} selected={this.props.selected === data[i].id ? true : false} title={data[i].title} thumbnail={data[i].thumbnail_url} description={data[i].description}/>);

        return (
			<div className="list">{list}</div>
        );
    }
}

class ListItem extends Component {
    render() {
        return (
            <div className={"list-item " + (this.props.selected ? "selected" : "")} onClick={() => this.props.handleClick(this.props.id)}>
                <img className="list-thumbnail" src={this.props.thumbnail} />
                <div className="content">
                    <div className="list-title"><Truncate lines={1}>{this.props.title}</Truncate></div>
                    <div className="list-description"><Truncate lines={1}>{this.props.description}</Truncate></div>
                </div>
            </div>
        );
    }
}

export default List;