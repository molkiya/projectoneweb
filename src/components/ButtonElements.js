import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: rgb(245, 223, 77);
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#000' : '#fff')};
        color: ${({ lightTextButton }) => (lightTextButton ? '#fff' : '#000')};
        box-shadow: ${({ boxOfButton }) => (boxOfButton ? 'inset 0 0 0 2px #fff' : 'inset 0 0 0 2px #000')};
    }
`