import React, { PureComponent } from 'react';
import Person from '../Allpersons/Person/Person';


// C:\Assignments\mythridproject\src\Components\Allpersons\Person\Person.js---src\Components\Allpersons\Person\Person.js

class Newperson extends PureComponent {

  // static getDerivedStateFromProps(props,state){
  //   console.log('[Newperson.js] getDerivedStateFromProps called');
  //   return state;
  // }



  shouldComponentUpdate(nextprops, nextstate) {
    console.log('[Newperson.js] shouldcompenentupdate called');
    return true;
  }

  getSnapshotBeforeUpdate(prevprops, prevstate) {
    console.log('[Newperson.js] getsnapshotbeforeudpate called');
    return { message: 'messagefrom getsnapshot' }
  }

  componentDidUpdate(prevprops, prevstate, message) {
    console.log('[Newperson.js] compennetdidupdate called', message);
    return null;
  }

  render() {
    console.log('[newperson.js] has been called');
    return this.props.persons.map((anyval, index) => {

      return <Person
        name={anyval.name}
        age={anyval.age}
        key={index}
        changed={(event) => this.props.changed(event, anyval.id)}
        click={() => this.props.clicked(index)} />

    });
  }
};

export default Newperson;