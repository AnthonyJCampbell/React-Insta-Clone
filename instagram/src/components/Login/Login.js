import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    login = () => {
        console.log('hi')
    }

    render() {
        return(
            <div style={{display : 'flex', flexDirection: 'column', width: '300px', margin: "25px auto" }}>
                <h2>Please Log In!</h2>
                <input type="text" placeholder="Your name..." />
                <input type="text" placeholder="Your password..." /> 
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default Login;
