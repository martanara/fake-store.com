import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppContext } from "context/context";
import {
    StyledNav,
    StyledLogo,
    StyledMenu,
    StyledNavLink,
    StyledNavLinkActive,
    StyledIconButton,
    StyledCartButton,
    StyledLogoutButton,
    StyledNumber,
} from "./Navbar.styles";
import CartModal from "pages/CartModal";

const Navbar = () => {
    const [cartModalOpen, setCartModalOpen] = useState(false);

    const { userToken, setUserToken } = useAppContext();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        document.cookie = "token=";
        setUserToken("");
    };

    return (
        <StyledNav>
            <StyledLogo to="/">
                FakeStore.com
            </StyledLogo>
            <StyledIconButton icon={isOpen ? "xmark" : "bars"} onClick={toggleMenu} />
            <StyledMenu isOpen={isOpen}>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLinkActive to="/products">Products</StyledNavLinkActive>
                <StyledNavLinkActive to="/about">About</StyledNavLinkActive>
                <StyledNavLinkActive to="/contact">Contact</StyledNavLinkActive>
                {userToken ? (
                    <StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>
                ) : (
                    <StyledNavLinkActive to="/login">Login</StyledNavLinkActive>
                )}
                <StyledCartButton onMouseEnter={() => setCartModalOpen(true)} onMouseLeave={() => setCartModalOpen(false)}>
                    <FontAwesomeIcon icon={"shopping-cart"} />
                    <StyledNumber>1</StyledNumber>
                </StyledCartButton>
                {cartModalOpen && <CartModal />}
            </StyledMenu>
        </StyledNav>
    );
};

export default Navbar;
