import styled from "styled-components";

export const ErrorMessage = styled.div`
    text-align: center;
    min-height: 80px;
    background-color: ${(props) => props.theme.colors.wine};
    color: ${(props) => props.theme.colors.white};
`;