import styled from 'styled-components';

const Comment = styled.div`
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
`;

export default Comment;
