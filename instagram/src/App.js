import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

console.log(dummyData);

class App extends Component {  
  render() {
    return (
      <div>
        <header>
          <SearchBar />
        </header>
        <main>
          {dummyData.map((item, idx) => {
            return (
              <PostContainer key={idx} props={dummyData[idx]} />          
            );
          })}
        </main>
      </div>
    );
  }
}
export default App;
