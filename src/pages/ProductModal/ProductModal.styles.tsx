
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
    width: 50%;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

export const StyledImgContainer = styled.div`
    height: 400px;
    width: 350px;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.white}
`;

export const StyledProductImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;

export const StyledDescription = styled.div`
    padding: 0 20px;
`;