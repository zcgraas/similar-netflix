import React, { Component } from 'react';
import './Components.css';

export default class ThumbnailExpanded extends Component {
    render(){
        return(
            <div>
                <div className="thumbnail-icons">
                    <p>Test</p>
                </div>
                <div className="thumbnail-info">
                    <p>Rating</p>
                    <p>Length</p>
                </div>
                <div className="thumbnail-categories">
                    <p> scary </p>
                        <p>&bull;</p>
                    <p> goofy </p>
                        <p>&bull;</p>
                    <p> romance </p>
                </div>
            </div>
        )
    }
}




