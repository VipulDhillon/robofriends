import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox"
import Scroll from '../Components/Scroll';
import { robots } from "../Components/robots";
import './App.css';


class App extends Component{
    constructor() {
        super()
        this.state= {
            robots: robots,
            searchfield:''
        }
    }

    onsearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange={this.onsearchChange} />
            <Scroll>
                <CardList robots ={filteredRobots}/> 
            </Scroll>    
        </div>
        );
    }
}


export default App;