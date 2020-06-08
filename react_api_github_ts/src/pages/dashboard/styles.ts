import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    /* text-align: center; */

    margin-top: 50px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 50px;
        padding: 0 20px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 50px;
        border-radius: 0 5px 5px 0;
        background: #04d361;
        border: none;
        color: #fff;
        font-weight: bold;
        transition: 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;
