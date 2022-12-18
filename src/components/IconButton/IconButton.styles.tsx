import styled, { css } from "styled-components";

interface IStyledIconButtonProps {
    dark?: boolean;
}

export const StyledIconButton = styled.div<IStyledIconButtonProps>`
    color: ${(props) => props.theme.colors.white};
    font-size: 27px;
    cursor: pointer;
    
    ${(props) => props.dark && css`
        color: ${(props) => props.theme.colors.text};
    `};
`;
