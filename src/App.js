import React, { Component } from 'react';
import { Header } from '../src/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <MainContent />
        <Footer />
      </div> 
    );
  }
}

export default App;
