import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterWrap,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIconLink,
    SocialIcons,
    WebsiteRights
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signup">How it works</FooterLink>
                                <FooterLink to="/signup">Parts</FooterLink>
                                <FooterLink to="/signup">Services</FooterLink>
                                <FooterLink to="/signup">Community</FooterLink>
                                <FooterLink to="/signup">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            JUSTICE
                        </SocialLogo>
                        <WebsiteRights>
                            JUSTICE © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='//www.facebook.com/' target="_blank" aria-label='Facebook'>
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='//www.twitter.com/' target="_blank" aria-label='Twitter'>
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='//www.youtube.com/' target="_blank" aria-label='Youtube'>
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href='//www.instagram.com/' target="_blank" aria-label='Instagram'>
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='//www.linkedin.com/' target="_blank" aria-label='Linkedin'>
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
