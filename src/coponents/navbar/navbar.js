import React, { useState } from 'react';
import { Button, ButtonDiv, NavbarContainer, NavbarLi, NavbarLogo, NavbarUl, NavimgDiv, SideHam, MobileMenu } from './NavbarStyle';

import navimg from '../../assets/img/nav-logo.png';
import sidemenu from '../../assets/img/hamburger.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleHamburger = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NavbarContainer>
            <NavimgDiv>
                <NavbarLogo src={navimg} alt='logo' onClick={toggleHamburger} />
            </NavimgDiv>
            <NavbarUl>
                <NavbarLi>Home</NavbarLi>
                <NavbarLi>About</NavbarLi>
                <NavbarLi>Product</NavbarLi>
                <NavbarLi>Contact</NavbarLi>
            </NavbarUl>
            <ButtonDiv>
                <Button>Signup</Button>
            </ButtonDiv>
            <SideHam src={sidemenu} alt='menu' onClick={toggleHamburger} />

            {isMenuOpen && (
                <MobileMenu>
                    <NavbarLi>Home</NavbarLi>
                    <NavbarLi>About</NavbarLi>
                    <NavbarLi>Product</NavbarLi>
                    <NavbarLi>Contact</NavbarLi>
                    <Button>Signup</Button>
                </MobileMenu>
            )}
        </NavbarContainer>
    );
}

export default Navbar;
