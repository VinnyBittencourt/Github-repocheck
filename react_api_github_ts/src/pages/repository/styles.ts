import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #333;
        transition: color 0.2s;

        &:hover {
            color: #667;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const Container = styled.div`
    color: #333;
`;
