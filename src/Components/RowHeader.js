import React, { Component } from 'react';
import './Components.css';

export default class RowHeader extends Component {
    render(){
        let title = this.props.title;
        return(
            <div className="row-header-spacing">
                <h1 className="header-title">{title}</h1>
            </div>
        )
    }
}