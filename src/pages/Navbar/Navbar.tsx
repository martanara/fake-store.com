import React, { useState } from "react";

import { 
    StyledNav, 
    StyledLogo, 
    StyledMenu, 
    StyledNavLink, 
    StyledNavLinkActive, 
    StyledIconButton, 
    StyledCartButton
} 
    from "./Navbar.styles";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <StyledNav>
            <StyledLogo to="/">
                <p>FakeStore.com</p>
            </StyledLogo>
            <StyledIconButton icon={isOpen ? "xmark" : "bars"} onClick={toggleMenu} />
            <StyledMenu isOpen={isOpen}>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLinkActive to="/products">Products</StyledNavLinkActive>
                <StyledNavLinkActive to="/about">About</StyledNavLinkActive>
                <StyledNavLinkActive to="/contact">Contact</StyledNavLinkActive>
                <StyledNavLinkActive to="/login">Login</StyledNavLinkActive>
                <StyledCartButton icon={"cart-shopping"} onClick={() => console.log("click")}/>
            </StyledMenu>
        </StyledNav>
    );
};

export default Navbar;
