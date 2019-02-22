import styled from 'styled-components';

const Button = styled.button`
    margin: 12px 0 0;
    font-size: 1.4em;
    line-height: 1.6em;
    padding: 0 10%;
    transition: 0.5s;
    color: white;
    background: ${pr => pr.type === 'login' ? `rgba(75, 108, 183, 0.7)` : `initial` };
    background: ${pr => pr.type === 'login' ? `-webkit-linear-gradient(to right, rgba(24, 40, 72, 0.7), rgba(75, 108, 183, 0.7))` : `initial` };
    background: ${pr => pr.type === 'login' ? `linear-gradient(to right, rgba(24, 40, 72, 0.7), rgba(75, 108, 183, 0.7))` : `initial` };

    &:hover {
        transform: ${pr => pr.type === 'login' ? 'scale(1.1)' : 'initial'};
        background: ${pr => pr.type === 'login' ? 'rgba(75, 108, 183, 0.9)' : 'initial'};
        background: ${pr => pr.type === 'login' ? 'linear-gradient(to right, rgba(24, 40, 72, 0.9), rgba(75, 108, 183, 0.9))' : 'initial'};
        background: ${pr => pr.type === 'login' ? '-webkit-linear-gradient(to right, rgba(24, 40, 72, 0.9), rgba(75, 108, 183, 0.9))' : 'initial'};
    }
`;

export default Button;