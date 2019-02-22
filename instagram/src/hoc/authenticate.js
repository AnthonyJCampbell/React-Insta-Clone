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

        setLoggedIn = (name) => {
            localStorage.setItem('username', name);
            this.setState({ loggedIn: true })
        }

        checkAuth = () => {
            const loggedIn = !!localStorage.getItem('username');
            if (loggedIn !== this.state.loggedIn) {
                this.setState({ loggedIn })
            }
        }

        componentDidMount() {
            this.checkAuth();
        } 

        componentDidUpdate() {
            this.checkAuth();
        }

        logOut = () => {
            localStorage.clear();
            this.setState({ loggedIn: false });
        }

        render() {
            if (this.state.loggedIn === true) {
                return <App logOut={this.logOut} />
            }
            return <Login setLoggedIn={this.setLoggedIn} />
        }
    }

export default Authenticate;



