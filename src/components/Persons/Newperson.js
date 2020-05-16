import React from 'react';
import Person from './Person/Person';

const Newperson = (props) => {
    console.log('[newperson.js] has been called');

    return props.persons.map((anyval, index) => {

        return <Person name={anyval.name}
            age={anyval.age}
            key={index}
            changed={(event) => props.changed(event, anyval.id)}
            click={() => props.click(index)} />

    });
}

export default Newperson;
