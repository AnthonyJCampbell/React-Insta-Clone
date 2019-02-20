import React from 'react';

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
            <div style={{display : 'flex', flexDirection: 'column', width: '300px', margin: "25px auto" }}>
                <h2>Please Log In!</h2>
                <input type="text" onChange={this.changeHandler} placeholder="Your name..." />
                <input type="text" placeholder="Your password..." /> 
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default Login;
