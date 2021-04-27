import React, { useState, useEffect } from  'react';
import '../styles/App.scss';
import Thumbnail from './Thumbnail.js';

import firebase from 'firebase/app';



export function Wrapper(props){
    const db = firebase.firestore()
    const [movies, setMovies] = useState([])
    const fetchMovies=async()=>{
        const response = db.collection('movie').doc(props.collection);
        const data = await response.get();
        const movieData = data.data();
        movieData.results.forEach(item => {
            setMovies(prevMovie => [...prevMovie, item])
            
        })
        
    }
    useEffect(() => {
        fetchMovies();
    }, []) 
    
    return(
        <div className="wrapper">
            <section>
                {
                    movies && movies.map((doc) => {
                        return(
                            <Thumbnail
                                title={doc.title}
                                duration={doc.release_date}
                                image={'https://www.themoviedb.org/t/p/original' + doc.poster_path}
                                banner={'https://www.themoviedb.org/t/p/original' + doc.backdrop_path}
                                description={doc.overview}
                                rating={doc.vote_average}
                                key={doc.id}
                            />
                        );
                    
                    })
                }      
                
            </section>            
        </div>
    )
}








