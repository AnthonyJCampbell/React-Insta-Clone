import React, { Component } from 'react';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage'


class App extends Component {  
  constructor() {
    super();

    this.state = {
      data: [],
    }
  }


  render() {
    return (
      <PostsPage />
    );
  }
}
export default App;
