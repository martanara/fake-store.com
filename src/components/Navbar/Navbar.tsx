import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppContext } from "context/context";
import CartModal from "components/CartModal";
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

const Navbar = () => {
    const { userToken, 
        setUserToken, 
        getTotalQuantity, 
        totalQuantity, 
        setCartProducts 
    } = useAppContext();

    const [isOpen, setIsOpen] = useState(false);
    const [cartModalOpen, setCartModalOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleModal = () => {
        setCartModalOpen((prevState) => !prevState);
    };

    const handleLogout = () => {
        document.cookie = "token=";
        setUserToken("");
        setCartProducts([]);
    };

    useEffect(() => {
        getTotalQuantity()
    }, [getTotalQuantity]);

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
                <StyledCartButton onClick={toggleModal}>
                    <FontAwesomeIcon icon={"shopping-cart"} />
                    <StyledNumber>{totalQuantity}</StyledNumber>
                </StyledCartButton>
                {cartModalOpen ? <CartModal /> : null}
            </StyledMenu>
        </StyledNav>
    );
};

export default Navbar;
