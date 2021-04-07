import React from 'react';
import './Components.css';



export const Navigation = (props) => (
    <div className="navigation">
        <div className="navigation-sub">
            <div className={props.type}>Home</div>
            <div className={props.type}>Explore</div>
            <div className={props.type}>Login</div>
        </div>
    </div>
)