import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const myName = localStorage.getItem('username').toLowerCase();

const StyledCommentSection = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    div {
        margin: 8px 0 8px 12px;
        p {
            a {
                font-weight: 700;
                transition: 1s;
                margin: 5px 0 8px; 
                &:hover {
                    color: royalblue;
                }
            }
        }
    }
    form {
        input {
            border: none;
            width: 100%;
            font-size: 1em;
            line-height: 1.4em;
            text-align: left;
            margin-top: 5px;
            padding: 2px 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0);
            
            &:hover, &:focus, &:active {
                transform: scale(1);
                color: black;
                border-radius: 15px;
                outline: none;
                background: #fcfcfc;
                border-left: 1px solid rgba(0, 0, 0, 0.4);
                border-right: 1px solid rgba(0, 0, 0, 0.4);
            }
        }
    }
`;

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
        
        this.props.addComment({username: myName, text: this.state.commentContent}, this.props.num);
        this.clearInput();
    }
    
    clearInput = () => {
        this.setState({ commentContent: ''});
    }

    render() {
        return (
            <StyledCommentSection >
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
                    <input 
                        onChange={this.commentHandler} 
                        className="addComment" 
                        type="text" 
                        placeholder="Add a comment..." 
                        value={this.state.commentContent} />
                </form>
            </StyledCommentSection>
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
