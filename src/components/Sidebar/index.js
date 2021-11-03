import React from 'react'
import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SideBarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon></CloseIcon>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='about' onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to='discover' onClick={toggle}>
						Discover
					</SidebarLink>
					<SidebarLink to='services' onClick={toggle}>
						Services
					</SidebarLink>
					<SidebarLink to='signin' onClick={toggle}>
						Sign in
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to='/signin'>Sign in</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SideBarContainer>
	)
}

export default Sidebar
