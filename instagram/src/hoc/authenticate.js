import React from 'react';
import Login from './../components/Login/Login'

const Authenticate = App =>
    // eslint-disable-next-line
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false,
            }
        }
        render() {
            if (this.state.loggedIn === true) {
                return <App />
            }
            return <Login />
        }
    }

export default Authenticate;



