import React from 'react';
// import Radium from 'radium';
// import './Person.css';
import styled from 'styled-components';

const Styleddiv = styled.div`
        text-align: center;
        width: 60%;
        height: 150px;
        margin:16px auto;
        border: 1px solid black;
        border-radius: 15px;
        @media (min-width:500px): {
            width: 450px;
        };
        `;

const Person = (props) => {
    // const style = {
    //     '@media (min-width:500px)': {
    //         width: '450px'
    //     }
    // }
    console.log('[person.js] has been called');

    return (
        // < div className="custclas" style={style}>
        <Styleddiv>
            <h1 onClick={props.click}>{props.name}</h1>
            <p>Iam {props.age} years old</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </Styleddiv>
        // </div>


    )


}

export default Person;