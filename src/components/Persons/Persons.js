import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor (props) {
        super(props);
        console.log('[Persons.js] Inside constructor()', props);
        this.lastPersonRef = React.createRef();
    }
    
    componentWillMount () {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount () {
        console.log('[Persons.js] Inside componentDidMount()');
        if(this.lastPersonRef.current != null) {
            this.lastPersonRef.current.focus();
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate()');        
    }

    render () {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return <Person 
                    key={person.id}
                    ref={this.lastPersonRef}
                    click={() => this.props.clicked(index)}
                    position={index}
                    name={person.name} 
                    age={person.age}                     
                    changed={(event) => this.props.changed(event, person.id)} />              
        });
    }
}

export default Persons;