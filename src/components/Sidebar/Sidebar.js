import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='fastdrivers'>
                        Fast Drivers
                    </SidebarLink>
                    <SidebarLink to='offroad'>
                        Offroad
                    </SidebarLink>
                    <SidebarLink to='services'>
                        Services
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signup'>
                        Sign Up
                    </SidebarRoute>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
