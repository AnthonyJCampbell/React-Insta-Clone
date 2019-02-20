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
    console.log(comment);
    this.setState(prevState => {
      return prevState.data[id].comments.push(comment);
    })
  }

  addLike = (id) => {
    this.setState = {  }
  }

  
  // this.setState((prevState) => {
  //   if (id !== this.state.data[id].num) {
  //     return {
  //       likes: this.state.data[id].likes + 1
  //     }
  //   }
  //   else {
  //     return prevState.data[id];
  //   }
  // })



  render() {
    return (
      <div className="App">
        <header>
          <SearchBar />
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
