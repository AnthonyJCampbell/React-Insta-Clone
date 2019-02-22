import React from 'react';
import './Login.css'

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
            <div className="login" >
                <div className="loginContainer">
                    <h2>Please Log In!</h2>
                    <input type="text" onChange={this.changeHandler} placeholder="Your name..." />
                    <input type="text" placeholder="Your password..." /> 
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;
