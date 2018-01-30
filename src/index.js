import React from 'react';
import { render } from 'react-dom';


class Temp extends React.Component {
  constructor() {
    super();
    this.state = {
      celsius: 0,
      fahrenhiet: 0
    }
  }

  handleConversion = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value
    const inputNumber = parseInt(inputValue, 10)
    console.log("inputValue:", inputValue)
    
    if (inputName === "celsius") {
      if (isNaN(inputNumber)) {
        this.setState({
          celsius: "",
          fahrenhiet: ""
        })
      } else {
        this.setState({
          celsius: inputValue,
          fahrenhiet: inputValue * 1.8 + 32
        })
      } 
    } else if (inputName === "fahrenheit") {
      if(isNaN(inputNumber)) {
        this.setState({
          celsius: "",
          fahrenhiet: ""
        })
      } else if (!isNaN(inputNumber)) {
        this.setState({
          celsius: (inputValue - 32) / 1.8,
          fahrenhiet: inputValue
        })
      }
    }
  }

  render() {
    console.log('My state: ', this.state.celsius)
    return (
      <div>
        <p>Celsius</p>
        <input 
          type="text" 
          name="celsius"
          value={this.state.celsius}
          onChange={this.handleConversion}/>
        <p>Fahrenheit</p>
        <input
          type="text"
          name="fahrenheit"
          value={this.state.fahrenhiet}
          onChange={this.handleConversion}
        />
      </div>
    )
  }
}

render(
  <Temp/>, 
  document.getElementById('root')
);
