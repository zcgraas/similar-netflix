import axios from 'axios';
import firebase from 'firebase/app';
import genre from './Components/GenreList.js';
 




export function movieGet(){
    const db = firebase.firestore();
    const keyArr = Object.keys(genre);
    const valArr = Object.values(genre);
    
    for(let i = 0, l = keyArr.length; i < l; i++){
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1995-01-01&primary_release_date.lte=2020-10-01&vote_count.gte=1500&with_genres=` + valArr[i])
    .then (response => {
        db.collection('movie').doc(keyArr[i]).set(response.data);
        console.log('Success:'+keyArr[i])
    })
    .catch( error =>{
        console.log(error);
    });
    }

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    .then (response => {
        db.collection('movie').doc('popular').set(response.data);
        console.log('Success: Popular')
    })
    .catch( error =>{
        console.log(error);
    });

    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    .then (response => {
        db.collection('movie').doc('upcoming').set(response.data);
        console.log('Success: Upcoming')
    })
    .catch( error =>{
        console.log(error);
    });

    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    .then( response=> {
        db.collection('movie').doc('trending').set(response.data);
        console.log('Success: Trending')
    })
    .catch( error => {
        console.log(error);
    });

    
    return null;
}
