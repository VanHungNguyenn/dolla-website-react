import React from 'react'
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Index = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>dolla</NavLogo>
					<MobileIcon>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to='/about'>About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='/discover'>Discover</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='/services'>Services</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='/signup'>Sign Up</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Index
