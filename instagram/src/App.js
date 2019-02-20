import React, { Component } from 'react';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './hoc/authenticate';

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

  addLike = (id) => {
    this.setState((prevState) => {
      return {
        data: prevState.data.map((post, idx) => {
          if (idx === id) {
            post.likes = post.likes + 1; 
          }
          
          return post;
        })
      }
    })
  }

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
        <PostsPage 
          filterPosts={this.filterPosts}
          data={this.state.data}
          addComment= {this.addComment}
          addLike= {this.addLike}
        />
      </div>
    );
  }
}
// I'm passing Authenticate our <App /> component. So, when it gets pulled into another component, the result will be <App /> WITH all the the changes impart by Authenticate
export default Authenticate(App);
