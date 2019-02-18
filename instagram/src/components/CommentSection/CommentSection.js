import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = ({ comments }) => {
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

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
}

export default CommentSection;
