import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

import dummyData from './dummy-data';

class App extends Component {  
  render() {
    return (
      <div>
        <header>
          <SearchBar />
        </header>
        <main>
          {dummyData.map(item => {
            return (
              <PostContainer>
                <img src="" alt="sd" />
                <CommentSection />
              </PostContainer>          
            );
          })}
        </main>
      </div>
    );
  }
}

export default App;
