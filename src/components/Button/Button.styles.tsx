import styled from "styled-components";

export const StyledButton = styled.button`
    border: 2px solid ${(props) => props.theme.colors.moss};
    border-radius: 5%;
    background-color: ${(props) => props.theme.colors.moss};
    color: ${(props) => props.theme.colors.white};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease-out;

    &:hover {
        border: 2px solid ${(props) => props.theme.colors.green};
        background-color: ${(props) => props.theme.colors.green};
    }
`;
