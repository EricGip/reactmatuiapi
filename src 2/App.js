import React, { Component } from 'react';
import './App.css';
import Search from './components/search/Search'
import NavBar from './components/navbar/NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { render } from '@testing-library/react';

class App extends Component {
  render() {
      return (
      <MuiThemeProvider>
        <NavBar />
        <Search />
      </MuiThemeProvider>
    )
  }
}

export default App;
