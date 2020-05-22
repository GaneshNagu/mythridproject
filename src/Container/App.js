import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Person from './Person/Person';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';
import Radium from 'radium';
import Newperson from '../Components/Allpersons/Newperson';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[app.js] constructor called');
  }

  state = {
    persons: [
      { id: "idhd", name: "shis", age: 28 },
      { id: "fdsdfdsf", name: "bird", age: 27 },
      { id: "sojkdk", name: "philip", age: 26 },
      { id: "sfdwid", name: "appa", age: 24 }
    ],
    showdivs: false,
    showcomponent: true
  };
  switchHandler = (newval) => {
    // alert("button clicked");
    this.setState({
      persons: [
        { id: "idhd", name: newval, age: 28 },
        { id: "fdsdfdsf", name: "dupliraj", age: 27 },
        { id: "sojkdk", name: newval, age: 26 },
        { id: "sfdwid", name: "dupliappa", age: 24 }
      ]
    });

  };

  static getDerivedStateFromProps(props, state) {
    console.log('[app.js] get dervived state called', props);
    return state;
  }

  componentDidMount() {
    console.log('[app.js] the compepnent did mount been called');
  }


  getSnapshotBeforeUpdate(prevprops, prevstate) {
    console.log('[App.js] the getsnapshot called')
    return prevstate;
  }

  shouldComponentUpdate(nextprops, nextstate) {
    console.log('[App.js] shouldcomponnetupdate called');
    return true;
  }
  componentWillUnmount() {
    console.log('[App.js] componentwill unmount called');
  }

  componentDidUpdate(prevprops, prevstate, oldstate) {
    console.log('[App.js] the component did update called', oldstate);
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


  toggleconatiner = () => {

    const updattogl = this.state.showcomponent;
    console.log(updattogl);
    this.setState({ showcomponent: !updattogl });
    // this.setState({showdivs:false});
  }



  toggleHandler = () => {
    const doesshow = this.state.showdivs;
    this.setState({ showdivs: !doesshow });
  }

  divdeleteHandler = (index) => {
    let persondel = this.state.persons;
    console.log("the deletion function called");
    persondel.splice(index, 1);
    this.setState({ persons: persondel })
    console.log(this.state.persons, index);
  }

  render() {

    console.log('[app.js] the main render method has been called');


    let showval = null;

    if (this.state.showdivs) {
      showval = (
        <div>
          <Newperson persons={this.state.persons}
            changed={this.nameChangehandler}
            clicked={this.divdeleteHandler} />

        </div>

      );

    }


    let showcontainer = null;
    let butname = 'Add DOM text'

    if (this.state.showcomponent) {
      // persons={this.state.persons}
      showcontainer = (
        <div>
          <Cockpit personslength={this.state.persons.length}
            toggle={this.toggleHandler} />
        </div>
      )
      butname = 'remove DOM text'
    }

    // <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
    //   <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangehandler} click={this.switchHandler.bind(this, "killerbee")} />
    //   <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    //   <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />



    return (
      <div className="App">
        <button onClick={() => this.toggleconatiner()}>{butname}</button>
        {showcontainer}
        {showval}

      </div>
    );
  }
}

export default Radium(App);


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
