import IconButton from "components/IconButton";
import styled from "styled-components";

export const StyledCartModal = styled.div`
    position: absolute;
    width: 400px;
    top: 65px;
    right: -40px;
    background-color: ${(props) => props.theme.colors.white};
    font-size: 13px;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const StyledModalContent = styled.div`
    padding: 0 10px;
    background-color: ${(props) => props.theme.colors.white};
`;

export const StyledSection = styled.div`
    display: flex;
    flex-direction: row;
`

export const StyledHeader = styled.h4`
    margin: 0;
`;

export const StyledParagraph = styled.p`
    margin-top: 0;
    margin-right: 15px;
`;

export const StyledList = styled.ul`
    border: 1px solid ${(props) => props.theme.colors.wine};
    width: 90%;
`;

export const StyledListItem = styled.li`
    margin: 8px 0;
`;

export const StyledIconButton = styled(IconButton)`
    font-size: 15px;
    color: ${(props) => props.theme.colors.wine};
`

