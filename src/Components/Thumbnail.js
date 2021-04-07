import React, { Component} from 'react';
import './Components.css';
import '../App.scss';
import Modal from './Modal.js';
import styled from 'styled-components';

const ExitStyled = styled.button`
    z-index: 30;
    font-size: 45px;
    color: pink;

`

export default class Thumbnail extends Component{
  state = { isOpen: false };
  
    handleShowDialog = () => {
      this.setState({ isOpen: !this.state.isOpen });
      console.log('clicked');
    };

  render(){
    return(
      <div>
        <div className="item">
          <a href="#!">
            <img
              src={this.props.image}
              alt="Describe Image"
              className="image-test"
              onClick={this.handleShowDialog}
              />

              
          </a>
        </div>
        {this.state.isOpen && (
          <>
              
                <Modal close={this.handleShowDialog}
                 banner={this.props.banner}
                 title={this.props.title}
                 description={this.props.description}
                 duration={this.props.duration.substring(0,4)}
                 rating={this.props.rating * 10 + '%'}
                 />
          </>
        )}
      </div>
    );
  }
}





  