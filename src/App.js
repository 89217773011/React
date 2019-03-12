import React, { Component } from 'react';

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
    this.setState(state => state.click++ );
  }

  removeOneClick() {
    this.setState(state => state.click--);
  }

  render() {
    return (
      <section>
        <div style = {{ backgroundColor: 'green' }}>
          Click me {this.state.click}
        </div> 
        <button onClick = { this.addOneClick }>Add one</button>
        <button onClick = { this.removeOneClick }>Remove one</button>
      </section>
    );
  }
}

export default App;
