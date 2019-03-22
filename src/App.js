import React, { Component } from 'react';
import { Descent } from './Descent';

export const MyContext = React.createContext('defaultValue');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'default'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.name);
  }

  handleChange(e) {
    console.log(e.target.value.toUpperCase());
    this.setState(
      { name: e.target.value.toUpperCase() }
    )
  }

  render() {
    return (
      <MyContext.Provider value = { this.state.name }>
        <form onSubmit = { this.handleSubmit }>
          <input type = 'text' value = { this.state.name } onChange = { this.handleChange }></input>
          <button>Submit</button>
        </form>
        <Descent value = { this.state.name }/>
      </MyContext.Provider>
    );
  }
}

export default App;
