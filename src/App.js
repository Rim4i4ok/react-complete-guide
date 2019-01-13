import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'oij', name: 'Forl', age: 29 },
      { id: 'y9', name: 'Sam', age: 30 },
      { id: 'iuh', name: 'Sqkela', age: 28 },
      { id: '09i', name: 'Krum', age: 25 },
      { id: 'j9i', name: 'Krugm', age: 22 },
    ],
    otherState: 'some other value',
    showPersons: false    
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState({
      persons: persons
    });
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    let persons = null;
    let bntClass = null;

    if (this.state.showPersons) {     

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return  (              
                <Person 
                  key={person.id}                  
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age} 
                  changed={(event) => this.nameChangedHandler(event, person.id)} />              
            )
          })}          
        </div> 
      );

      bntClass = classes.Red;
    }

    //let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red]
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (      
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>Simple text here</p>          
          <button
            className={bntClass}            
            onClick={this.tooglePersonsHandler}>Toggle Persons</button>        
          {persons}
        </div>          
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
