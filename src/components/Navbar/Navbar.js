import React, {useState, useEffect} from 'react'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavigationMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLinkSignIn,
    NavBtnLinkSignUp
 } from './NavbarElements'
import { IconContext } from 'react-icons/lib'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

export default function Navbar({ toggle }) {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 50) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo
                        to="/"
                        onClick={toggleHome}
                    >
                        JUSTICE
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavigationMenu>
                        <NavItem>
                            <NavLinks 
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="fastdrivers"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}
                            >Fast Drivers</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="offroad"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}
                            >Offroad</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}
                            >Services</NavLinks>
                        </NavItem>
                    </NavigationMenu>
                    <NavBtn>
                        <NavBtnLinkSignUp to='/signup'>Sign Up</NavBtnLinkSignUp>
                        <NavBtnLinkSignIn to='/signin'>Sign In</NavBtnLinkSignIn>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

