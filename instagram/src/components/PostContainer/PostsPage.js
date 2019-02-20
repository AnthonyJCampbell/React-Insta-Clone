import React from 'react';
import PostContainer from './PostContainer';

import SearchBar from './../SearchBar/SearchBar';

const PostsPage = ({ filterPosts, data, addComment , addLike }) => {
  return (
    <div>
      <header>
        <SearchBar filterPosts={filterPosts} />
      </header>
      <main>
        {data.map((item, idx) => {
          return (
          <PostContainer key={idx} 
            props={data[idx]} 
            num={idx} 
            addComment={addComment}
            addLike={addLike} />          
          );
        })}
      </main>
    </div>
  )
}

export default PostsPage;