import React from 'react';
import './Cockpit.css';


const Cockpit=(props)=>{

    let textpass = null;

    const stylepass = [];

    if (props.persons.length === 2) {
      stylepass.push('red');
      textpass = 'we have only two elements';
    }

    if (props.persons.length === 3) {
      stylepass.push('bold');
      textpass = 'we have three elements ';
    }

    if (props.persons.length === 1) {
      stylepass.push('under');
      textpass = "we have only 1 element"

    }

    if (props.persons.length === 4) {
      stylepass.push('backgr');
      textpass = 'we have four elements';
    }
    

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

    return(

        <div>
        <p className={stylepass}>{textpass}</p><br />
        <button onClick={props.toggle} style={style}>click to change</button>
        </div>



    );
}


export default Cockpit;