import React from 'react';

const authenticate = (Component) => {
    return class AppWithAuthentication extends React.Component {
        render() {
            return (
                <Component />
            )
        }
    }
}



