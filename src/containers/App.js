import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Person from '../components/Persons/Person/Person';
import Newperson from '../components/Persons/Newperson';
import Cockpit from '../components/Cockpit/Cockpit';

// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[app.js] super constructor has been called');
  }


  state = {
    persons: [
      { id: "idhd", name: "shis", age: "28" },
      { id: "fdsdfdsf", name: "bird", age: "27" },
      { id: "sojkdk", name: "philip", age: "26" },
      { id: "sfdwid", name: "appa", age: "24" }
    ],
    showdivs: false
  };
  switchHandler = (newval) => {
    // alert("button clicked");
    this.setState({
      persons: [
        { id: "idhd", name: newval, age: "28" },
        { id: "fdsdfdsf", name: "dupliraj", age: "27" },
        { id: "sojkdk", name: newval, age: "26" },
        { id: "sfdwid", name: "dupliappa", age: "24" }
      ]
    });

  };


  static getDerivedStateFromProps(state, props) {
    console.log('[App.js] get derived state rendering', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] the Did mount has been called');
  }

  nameChangehandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const personnew = [...this.state.persons]
    personnew[personIndex] = person

    this.setState({ persons: personnew })


  }


  toggleHandler = () => {
    const doesshow = this.state.showdivs
    this.setState({ showdivs: !doesshow })
  }

  divdeleteHandler = (index) => {
    let persondel = this.state.persons;
    persondel.splice(index, 1);
    this.setState({ persons: persondel })
  }

  render() {

    console.log('render() has been called');

    let showval = null;

    if (this.state.showdivs) {
      showval = (
        <div>
          <Newperson
            persons={this.state.persons}
            changed={this.nameChangehandler}
            click={this.divdeleteHandler}

          />
          {/* {this.state.persons.map((anyval, index) => {

            return <Person name={anyval.name} age={anyval.age} key={index} changed={(event) => this.nameChangehandler(event, anyval.id)} click={this.divdeleteHandler.bind(this, index)} />

          })} */}
        </div>

      );


    }

    // <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
    //   <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangehandler} click={this.switchHandler.bind(this, "killerbee")} />
    //   <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    //   <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />


    return (
      <div className="App">

        <Cockpit persons={this.state.persons} toggle={this.toggleHandler} />
        {showval}

      </div>
    );
  }
}

export default App;


// const [PeronState, SetPersonState]=useState({
//   persons:[
//     {name:"naga",age:"28"},
//     {name:"raj",age:"27"},
//     {name:"syam",age:"26"},
//     {name:"appa",age:"24"}

//   ]
// });

// const switchHandler=()=>{

//   SetPersonState({
//     persons:[
//       {name:'duplinaga',age:"28"},
//       {name:"dupliraj",age:"27"},
//       {name:"duplisyam",age:"26"},
//       {name:"dupliappa",age:"24"}
//     ]
//   });

// }


// state={
//   persons:[
//     {name:"naga",age:"28"},
//     {name:"raj",age:"27"},
//     {name:"syam",age:"26"},
//     {name:"appa",age:"24"}

//   ]
// };
//   switchHandler=()=>{
//     // alert("button clicked");
//     this.setState({
//       persons:[
//         {name:"duplinaga",age:"28"},
//         {name:"dupliraj",age:"27"},
//         {name:"duplisyam",age:"26"},
//         {name:"dupliappa",age:"24"}
//       ]
//     });

//   };
