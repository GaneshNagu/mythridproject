import React ,{Component} from 'react';
// import { render } from 'react-dom';
 
// import Radium from 'radium';
// // import './Person.css';
// import Styled from 'styled-components';


class Person extends Component {
    render(){
    const style={
        textAlign: 'center',
        width: '60%',
        height: '150px',
        margin:'16px auto',
        border: '1px solid black',
        borderRadius: '15px'
        // @media (min-width:500px): {
        //     width: 450px;,
        // };
    }
    // const Styleddiv = Styled.div`
    //     text-align: center;
    //     width: 60%;
    //     height: 150px;
    //     margin:16px auto;
    //     border: 1px solid black;
    //     border-radius: 15px;
    //     @media (min-width:500px): {
    //         width: 450px;
    //     };
    //     `;

    return (
         < div className="custclas" style={style}>
        
            <h1 onClick={this.props.click}>{this.props.name}</h1>
            <p>Iam {this.props.age} years old</p>
            <input type="text" value={this.props.name} onChange={this.props.changed} />
            {/* <Styleddiv></Styleddiv> */}
         </div>


    )


}}

export default Person;