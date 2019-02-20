import React from 'react';

const Authenticate = App =>
    // eslint-disable-next-line
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: true,
            }
        }
        render() {
            if (this.state.loggedIn === true) {
                return <App />
            }
            return "Hello"
        }
    }

export default Authenticate;



