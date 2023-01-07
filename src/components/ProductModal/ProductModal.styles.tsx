import styled from "styled-components";

export const StyledProductModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    max-width: 70%;
    height: 90%;
    background-color: ${(props) => props.theme.colors.white};
`;

export const StyledHeader = styled.h2`
    @media (max-width: 600px) {
        display: none;
    }
`

export const StyledImgWrapper = styled.div`
    height: 60%;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.white};
`;

export const StyledProductImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;

export const StyledDescription = styled.p`
    padding: 0 20px;
    font-size: 14px;
    margin: 0;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
