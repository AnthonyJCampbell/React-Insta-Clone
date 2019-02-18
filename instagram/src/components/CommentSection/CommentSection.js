import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = ({ comments }) => {
    return (
        <div className="commentSection">
            {comments.map((comment, idx) => {
                return (
                    <div className="comment" key={idx}>
                        <p>
                            <a href="#d">{comment.username}</a>  {comment.text}
                        </p>
                    </div>
                );
            })}
            <div>
                <input className="addComment" type="text" placeholder="Add a comment..." />
            </div>
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
}

export default CommentSection;
