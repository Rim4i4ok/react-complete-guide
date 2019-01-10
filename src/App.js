import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Forl', age: 29 },
      { name: 'Sam', age: 30 },
      { name: 'Sqkela', age: 28 },
    ],
    otherState: 'some other value'    
  }

  switchNameHandler = () => {
    //console.log('click');
    // DON'T DO THIS: this.state.persons[0].name = 'Forl';
    this.setState({
      persons: [
        { name: 'Forlingik', age: 29 },
        { name: 'Sam', age: 30 },
        { name: 'Sqkela', age: 25 },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Simple text here</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Games</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>      
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
