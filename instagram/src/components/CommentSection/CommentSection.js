import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: props.comments,
            commentContent: '',
        }
    }
    
    commentHandler = e => {
        this.setState({ commentContent: e.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addComment({username: 'placeholder', text: this.state.commentContent}, this.props.num);
    }
    
    render() {
        return (
            <div className="commentSection">
                {this.state.comments.map((comment, idx) => {
                    return (
                        <div className="comment" key={idx}>
                            <p>
                                <a href="google.com">{comment.username}</a>  {comment.text}
                            </p>
                        </div>
                    );
                })}
                <form onSubmit={this.submitHandler}>
                    <input  onChange={this.commentHandler} className="addComment" type="text" placeholder="Add a comment..." />
                </form>
            </div>
        );
    }
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
