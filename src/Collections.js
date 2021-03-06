import { Wrapper } from './Components/Wrapper.js'
import react, { Component } from 'react';
import './styles/App.scss';



export default class Collections extends Component{
    render(){
        return(
            <div>
                <h1 className="row-label">Trending</h1>
                <Wrapper collection='trending' />
                <h1 className='row-label'>Fantasy</h1>
                <Wrapper collection='fantasy' />
                <h1 className='row-label'>Thriller</h1>
                <Wrapper collection='thriller' />
                <h1 className='row-label'>Action</h1>
                <Wrapper collection='action' />
                <h1 className='row-label'>Horror</h1>
                <Wrapper collection='horror' />
                <h1 className='row-label'>Sci-fi</h1>
                <Wrapper collection='sci-fi' />
            </div>
            
        )
    }
}
