import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux  from '../hoc/Auxh';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor (props) {
    super(props);
    console.log('[App.js] Inside constructor()', props);

    this.state = {
      persons: [
        { id: 'oij', name: 'Forl', age: 29 },
        { id: 'y9', name: 'Sam', age: 30 },
        { id: 'iuh', name: 'Sqkela', age: 28 },
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  // state = {
  //   persons: [
  //     { id: 'oij', name: 'Forl', age: 29 },
  //     { id: 'y9', name: 'Sam', age: 30 },
  //     { id: 'iuh', name: 'Sqkela', age: 28 },
  //     { id: '09i', name: 'Krum', age: 25 },
  //     { id: 'j9i', name: 'Krugm', age: 22 },
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false    
  // }  
  
  deletePersonHandler = (personIndex) => {    
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

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState({
      persons: persons
    });
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }      
    });
  }

  render () {
    console.log('[App.js] Inside render()');
    let persons = null;    

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }  

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.tooglePersonsHandler} />
        {persons}
      </Aux>          
    );    
  }
}

export default withClass(App, classes.App);
