import React from 'react';
import './Cockpit.css';

const Cockpit = (props) => {


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



    return (
        <div>
            <p className={stylepass} > {textpass}</p ><br />
            <button onClick={() => props.toggle()} className='btnclass'>click to change</button>
        </div >

    )

}

export default Cockpit;