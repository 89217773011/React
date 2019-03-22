import React, { Component } from 'react';
import { Descent } from './Descent';

//const MyContext = React.createContext('defaultValue');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.name);
  }

  handleChange(e) {
    console.log(e.targetValue);
    this.setState(
      { name: e.target.value }
    )
  }

  render() {
    return (
      <div>
        <form onSubmit = { this.handleSubmit }>
          <input type = 'text' value = { this.state.name } onChange = { this.handleChange }></input>
          <button>Submit</button>
        </form>
        <Descent value = { this.state.name }/>
      </div>
    );
  }
}

export default App;
