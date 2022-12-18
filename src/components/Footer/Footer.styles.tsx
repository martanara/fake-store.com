import styled from "styled-components";

export const StyledFooter = styled.div`
    min-height: 80px;
    background-color: ${(props) => props.theme.colors.wine};
    color: ${(props) => props.theme.colors.white};
    text-align: center;
`;

export const StyledParagraph = styled.p`
    padding-top: 25px;
`
