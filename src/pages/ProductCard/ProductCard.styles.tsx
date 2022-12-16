import styled from "styled-components";

export const StyledProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 0 15px;
    width: 320px;
    height: 600px;
    border: 1px solid ${(props) => props.theme.colors.moss};
`;

export const StyledTitle = styled.div`
    min-height: 20%;
`

export const StyledImgContainer = styled.div`
    height: 320px;
    width: 280px;
    object-fit: contain;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.white}
`;

export const StyledProductImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;
