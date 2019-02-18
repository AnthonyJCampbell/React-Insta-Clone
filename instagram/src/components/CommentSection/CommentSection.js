import React from 'react';

const CommentSection = ({ comments }) => {
    console.log(comments);
    return (
        <div>
            {comments.map((comment, idx) => {
                return (
                    <div key={idx}>
                        <a href="#d"><h4>{comment.username}</h4></a>
                        <p>{comment.text}</p>
                    </div>
                );
            })}
            <div>
                <input type="text" />
            </div>
        </div>
    );
}

export default CommentSection;
