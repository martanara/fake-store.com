import styled, { css } from "styled-components";

interface StyledIconButtonProps {
    dark?: boolean;
}

export const StyledIconButton = styled.div<StyledIconButtonProps>`
    color: ${(props) => props.theme.colors.white};
    font-size: 27px;
    cursor: pointer;
    
    ${(props) => props.dark && css`
        color: ${(props) => props.theme.colors.text};
    `};
`;
