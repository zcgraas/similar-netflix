import React, { Component } from 'react';
import './Components.css';
import '../styles/Heading.scss';
import styled, { css } from 'styled-components';
import { movieGet } from '../tmdbAPI';
import { faRedo, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const HeadingBackground = styled.div`
    position: relative;
    background-size: cover !important;
    display: flex;
    height: 85vh !important;
    width: 100vw !important;
    background-size: auto;
    overflow-x: hidden;
    background:  ${props => `url(${props.background}) repeat scroll 0% 0% rgba(0,0,0,0)`};
    box-shadow: inset 0 -25rem 50rem rgba(37,37,37,.61);
    flex-direction: column;
    
`



export default class Heading extends Component{
    render(){
        return(
            <div>
                <HeadingBackground background='https://www.themoviedb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg'>
                    <div className='heading-items'>
                        <img className="heading-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                        />
                        <button className='reset-movie' onClick={movieGet} ><FontAwesomeIcon icon={faRedo} /></button>
                        
                    </div>
                    
                    <h1 className="heading-title">Pulp Fiction</h1>
                    
                    <div className="heading-details">
                        <p className="rating">94%</p>
                        <p>1994</p>

                    </div>
                    <p className="heading-description">
                    A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.
                    </p>
                </HeadingBackground>
            </div>
        )
    }
}