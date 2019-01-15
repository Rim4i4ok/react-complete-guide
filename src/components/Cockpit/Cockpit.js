import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Auxh';

const cockpit = (props) => {
    const assignedClasses = [];
    let bntClass = classes.Button;

    if (props.showPersons) {
        bntClass = [classes.Button, classes.Red].join(' ');
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red]
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (   
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>Simple text here</p>          
            <button
                className={bntClass}            
                onClick={props.clicked}>Toggle Persons</button>                                
        </Aux>             
    );
};

export default cockpit;