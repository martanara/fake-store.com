
import styled from "styled-components";

export const StyledCartModal = styled.div`
    position: absolute;
    width: 400px;  
    top: 65px;
    right: -40px; 
    background-color: ${(props) => props.theme.colors.white};
    font-size: 13px;
`;

export const StyledModalContent = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    padding: 0 10px;
`;

export const StyledHeader = styled.h4`
    margin: 0;
`;

export const StyledParagraph = styled.p`
    margin: 0;
`;

export const StyledList = styled.ul`
    border: 1px solid ${(props) => props.theme.colors.wine};
    width: 90%;
`;

export const StyledListItem = styled.li`
    margin: 8px 0;
`;
