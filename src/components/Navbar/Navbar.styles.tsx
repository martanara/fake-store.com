import { NavLink } from "react-router-dom";
import IconButton from "components/IconButton";
import Button from "components/Button";
import styled from "styled-components";

interface IStyledMenuProps {
    isOpen: boolean;
}

export const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${(props) => props.theme.colors.moss};
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
`;

export const StyledNavLink = styled(NavLink)`
    padding: 30px 20px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;

    &:hover {
        opacity: 0.5;
    }

    @media (max-width: 900px) {
        padding: 0;
    }
`;

export const StyledNavLinkActive = styled(StyledNavLink)`
    &.active {
        color: ${(props) => props.theme.colors.green};
    }
`;

export const StyledMenu = styled.div<IStyledMenuProps>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        height: 400px;
        background-color: ${(props) => props.theme.colors.moss};
    }
`;

export const StyledLogo = styled(StyledNavLink)`
    padding: 30px 20px;
    margin-left: 20px;
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.theme.colors.lightGreen};
`;

export const StyledIconButton = styled(IconButton)`
    display: none;

    @media (max-width: 900px) {
        display: flex;
        margin-right: 20px;
    }
`;

export const StyledCartButton = styled.div`
    position: relative;
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 30px;

    &:hover {
        color: ${(props) => props.theme.colors.green};
    }
`;

export const StyledNumber = styled.div`
    position: absolute;
    text-align: center;
    height: 20px;
    width: 20px;
    top: -10px;
    right: -10px;
    font-size: 15px;
    border: 1px solid ${(props) => props.theme.colors.wine};
    background-color: ${(props) => props.theme.colors.wine};
    border-radius: 50%;
    color: ${(props) => props.theme.colors.white};
`;

export const StyledLogoutButton = styled(Button)`
    font-family: "Quicksand", sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    padding: 20px;

    &:hover {
        border: 2px solid ${(props) => props.theme.colors.moss};
        background-color: ${(props) => props.theme.colors.moss};
    }
`;
