import React, { Component } from 'react';

const MyContext = React.createContext('defaultValue');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      click: 0
    }
    this.addOneClick = this.addOneClick.bind(this);
    this.removeOneClick = this.removeOneClick.bind(this);
  }

  addOneClick() {
    this.setState((prevState) => {
      return  { click: prevState.click + 1 };
      }
    );
  }

  removeOneClick() {
    this.setState(state => state.click--);
  }

  render() {
    return (
      <Counter.Privider>
        <div style = {{ backgroundColor: 'green' }}>
          Click me {this.state.click}
        </div> 
        <button onClick = { this.addOneClick }>Add one</button>
        <button onClick = { this.removeOneClick }>Remove one</button>
      </Counter.Privider>
    );
  }
}

export default App;
