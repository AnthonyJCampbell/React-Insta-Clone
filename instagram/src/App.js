import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

class App extends Component {  
  constructor() {
    super();

    this.state = {
      data: [],
    }
  }
  
  componentDidMount () {
    this.setState({
      data: dummyData,
    })
  };

  addComment = (comment, id) => {
    this.setState(prevState => {
      return prevState.data[id].comments.push(comment);
    })
  }

  // !!! I know we are not to mutate state directly. This is a temporary work-around until I can talk with instructors to resolve variable this.setState();
  addLike = (id) => {
    let likes = this.state.data[id].likes + 1;
    this.state.data[id].likes = likes;
    this.forceUpdate();
  };

  filterPosts = input => {
    if (input.length > 0) {
      const posts = this.state.data.filter(p => {
        if (p.username.includes(input)) {
          return p;
        }
      });
      return this.setState({ data: posts });
    }
    else {
      this.setState({
        data: dummyData,
      })
    }
  };


  render() {
    return (
      <div className="App">
        <header>
          <SearchBar filterPosts={this.filterPosts} />
        </header>
        <main>
          {this.state.data.map((item, idx) => {
            return (
              <PostContainer key={idx} 
                props={this.state.data[idx]} 
                num={idx} 
                addComment={this.addComment}
                addLike={this.addLike} />          
            );
          })}
        </main>
      </div>
    );
  }
}
export default App;
