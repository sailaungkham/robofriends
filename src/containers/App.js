import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots';
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        // console.log('Constructor');
    }

    componentDidMount(){
        // console.log('check');
        fetch('https://jsonplaceholder.typicode.com/users')
        
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
        // console.log('componentDidMount');
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({ searchfield: event.target.value })


        // console.log(filteredRobots);

    }


    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // console.log('render');
            return !robots.length?
            <h1>Loading...</h1>:
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
    
            );
                
    }
}

export default App;