import styled from "styled-components";

export const StyledFooter = styled.div`
    text-align: center;
    min-height: 80px;
    background-color: ${(props) => props.theme.colors.wine};
    color: ${(props) => props.theme.colors.white};
`;

export const StyledParagraph = styled.p`
    padding-top: 25px;
`
