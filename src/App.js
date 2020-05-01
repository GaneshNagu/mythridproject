import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
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

    const style = {
      backgroundColor: 'Green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer',
      Margin: '30px',
      borderRadius: '20px',
      ':hover': {
        border: '3px solid blue'
      }
    }

    let showval = null;

    if (this.state.showdivs) {
      showval = (
        <div>
          {this.state.persons.map((anyval, index) => {

            return <Person name={anyval.name} age={anyval.age} key={index} changed={(event) => this.nameChangehandler(event, anyval.id)} click={this.divdeleteHandler.bind(this, index)} />

          })}
        </div>

      );
      style.backgroundColor = 'red';

    }

    // <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
    //   <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangehandler} click={this.switchHandler.bind(this, "killerbee")} />
    //   <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    //   <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
    let textpass = null;

    const stylepass = [];

    if (this.state.persons.length === 2) {
      stylepass.push('red');
      textpass = 'we have only two elements';
    }

    if (this.state.persons.length === 3) {
      stylepass.push('bold');
      textpass = 'we have three elements ';
    }

    if (this.state.persons.length === 1) {
      stylepass.push('under');
      textpass = "we have only 1 element"

    }

    if (this.state.persons.length === 4) {
      stylepass.push('backgr');
      textpass = 'we have four elements';
    }


    return (
      <div className="App">
        <p className={stylepass}>{textpass}</p><br />
        <button onClick={this.toggleHandler} style={style}>click to change</button>

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
