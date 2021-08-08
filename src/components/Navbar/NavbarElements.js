import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    height: 50px;
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.5s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: -10px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavigationMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 50px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid rgb(148, 149, 151);
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLinkSignUp = styled(LinkR)`
    border-radius: 50px;
    background: rgb(245, 223, 77);
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    margin: 10px;
    outline: none;
    cursor: pointer;
    color: #010606;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        box-shadow: inset 0 0 0 2px #fff;
        background: #000;
        color: #fff;
    }

`

export const NavBtnLinkSignIn = styled(LinkR)`
    border-radius: 50px;
    background: rgb(148, 149, 151);
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    margin: 10px;
    outline: none;
    cursor: pointer;
    color: #010606;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        box-shadow: inset 0 0 0 2px #fff;
        background: #000;
        color: #fff;
    }

`