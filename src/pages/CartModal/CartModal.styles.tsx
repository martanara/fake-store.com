
import styled from "styled-components";

export const StyledProductModal = styled.div`
    position: fixed;  
    top: 80px;
    right: 0; 
    height: 300px;
    width: 200px;
    background-color: ${(props) => props.theme.colors.white};
`;

export const StyledModalContent = styled.div`
    width: 50%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;
