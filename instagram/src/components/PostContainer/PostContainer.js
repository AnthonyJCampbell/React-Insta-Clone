import React from 'react';
import CommentSection from './../CommentSection/CommentSection';

const PostContainer = ({ idx, props }) => {
    return (
        <div key={idx}>
                <img src={`${props.imageUrl}`} alt="sd" />
                <CommentSection comments={props.comments} />
        </div>
    );
}

export default PostContainer;
