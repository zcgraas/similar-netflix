import React, { Component } from 'react';
import '../styles/App.scss';
import '../styles/Modal.scss';
import styled, {css} from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ModalBackground = styled.div`
    position: absolute;
    z-index: 5000;
    background-size: cover !important;
    background-position: 50% !important;
    top: 25%;
    height: 65vh;
    width: 100vw;
    background-size: auto;
    background:  ${props => `url(${props.background}) repeat scroll 0% 0% rgba(0,0,0,0)`};
    animation: 900ms ease-out 0s 1 normal none running top-buttom-translation;
`

export default class Modal extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    componentDidMount(){
        if(this.state.open){
            document.body.style.overflow = 'hidden';
            document.html.style.overflow='hidden';
        }
    }

    componentWillUnmount(){
        document.body.style.overflow = 'unset';
    }

    render(){
        return(
            <div className="modal-backdrop" >
                
                <ModalBackground background={this.props.banner}>
                
                    <div className="modal-container">
                        <button className="modal-close" onClick={this.props.close}><FontAwesomeIcon icon={faTimes} className="modal-icon modal-close" /></button>
                            <h1 className="modal-title">{this.props.title}</h1>
                            <div className="modal-details">
                                <p className="rating">{this.props.rating}</p>
                                <p> {this.props.duration}</p>
                            </div>
                            <p className="modal-description">
                                {this.props.description}
                            </p>
                    </div>
                </ModalBackground>
            </div>
                
            
        )
    }
}
    