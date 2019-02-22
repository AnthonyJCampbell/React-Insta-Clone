import React from 'react';
import './Login.css'
import styled from 'styled-components';

import Button from './../Button';

const LoginDiv = styled.div`
    width: 100%;
    height: 100vh;
    padding: 50px;
    background: url("https://images.thrillophilia.com/image/upload/s--LJrsETB5--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/110/371/original/1499760488_Pura.Luhur.Uluwatu.original.11836.jpg.jpg?1499760488") center no-repeat fixed; 
`;

const LoginContainer = styled.div`
    /* POSITIONING */
    width: 40%;
    max-width: 480px;
    padding: 25px 0;
    margin: 20vh auto 0;
    /* DECORATION */
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    background: rgba(75, 108, 183, 0.7);  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, rgba(24, 40, 72, 0.7), rgba(75, 108, 183, 0.7));  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, rgba(24, 40, 72, 0.7), rgba(75, 108, 183, 0.7)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* CHILDREN */
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-bottom: 25px;
        color: white;
    }

    input {
        align-self: flex-start;
        margin: 3px 0 3px 32px;
        padding: 2px 0 2px 9px;
        width: 85%;
        transition: 0.6s;
        font-size: 1.4em;
        background: #FFEEEE; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        &:hover {
            outline: none;
            border-radius: 15px;
        }
        &:active {
            outline: none;
            border-radius: 15px;
        }
        &:focus {
            outline: none;
            border-radius: 15px;
        }
    }
`;


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentName: '',
        }
    }

    changeHandler = event => {
        this.setState({currentName: event.target.value})
    }
    
    login = () => {
        this.props.setLoggedIn(this.state.currentName);
    }

    render() {
        return(
            <LoginDiv>
                <LoginContainer>
                    <h2>Please Log In!</h2>
                    <input type="text" onChange={this.changeHandler} placeholder="Your name..." />
                    <input type="text" placeholder="Your password..." /> 
                    <Button type="login" onClick={this.login}>Login</Button>
                </LoginContainer>
            </LoginDiv>
        );
    }
}

export default Login;
