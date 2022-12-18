
import styled from "styled-components";

export const StyledProductModal = styled.div`
    position: fixed;  
    top: 0;
    left: 0; 
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledModalContent = styled.div`
    max-width: 70%;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

export const StyledImgWrapper = styled.div`
    height: 380px;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.white}
`;

export const StyledProductImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;

export const StyledDescription = styled.p`
    padding: 0 20px;
`;

export const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`