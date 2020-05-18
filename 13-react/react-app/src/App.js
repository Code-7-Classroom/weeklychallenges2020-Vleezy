import React, { Component } from 'react';
import './App.css';
import BasicInfo from './BasicInfo/BasicInfo';

// import { render } from '@testing-library/react';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      person: [
        { Name: 'Vlad', Phone: '123-123-1234', DOB: '01/02/2001' },
        { Name: 'Vladimir', Phone: '123-123-1234', DOB: '01/02/1994' },
        { Name: 'Vladimir Romero', Phone: '123-123-1234', DOB: '01/02/2005' }
      ]
    }
  }

  //   switchNameHandler = () => {
  //     this.setState({
  //       person: [
  //       { name: 'Vlad', phone: '123-123-1234', dob:'01/02/2000' },
  //     { name: 'Vlad2', phone: '123-123-1234', dob:'01/02/2000' },
  //     { name: 'Vlad3', phone: '123-123-1234', dob:'01/02/2000' }
  //       ]  
  // });
  //   }
  // }

  render() {
    return (
     
        
      //   <div className="App">
      // <h1> Hi, I'm a React App!</h1>
      /* <button onClick={this.switchNameHandler}>Show Information</button> */
      /* <BasicInfo name={this.state.person[0].name} phone={this.state.person[0].phone} dob={this.state.person[0].dob} />
      <BasicInfo name={this.state.person[1].name} phone={this.state.person[1].phone} dob={this.state.person[0].dob}/>
      <BasicInfo name={this.state.person[2].name} phone={this.state.person[2].phone} dob={this.state.person[0].dob} /> */
      <BasicInfo person={this.state.person} />
        
    )
  }
}

export default App;
