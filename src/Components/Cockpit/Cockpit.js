import React,{useEffect} from 'react';
import './Cockpit.css';


const Cockpit=(props)=>{
  useEffect(()=>{
    console.log('[Cockpit.js] UseEffect called');
    setTimeout(()=>{
      alert('data saved to server');
    },1000)
    return()=>{
      console.log('[cockpit.js] cleanup work  called');
    }
  },[]
  )

  useEffect(()=>{
    console.log('[Cockpit.js] UseEffect 2nd called');
        return()=>{
      console.log('[cockpit.js] cleanup 2nd work  called');
    }
  });


    let textpass = null;

    const stylepass = [];

    if (props.personslength === 2) {
      stylepass.push('red');
      textpass = 'we have only two elements';
    }

    if (props.personslength === 3) {
      stylepass.push('bold');
      textpass = 'we have three elements ';
    }

    if (props.personslength === 1) {
      stylepass.push('under');
      textpass = "we have only 1 element"

    }

    if (props.personslength === 4) {
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


export default React.memo(Cockpit);