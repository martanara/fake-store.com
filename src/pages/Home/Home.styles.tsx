import styled from "styled-components";

export const StyledHome = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
export const StyledDescription = styled.div`
    flex: 1;
    max-width: 500px;
    margin: 0 auto;
    padding-left: 10px;
`;

export const StyledImgContainer = styled.div`
    flex: 1;
    max-width: 500px;
    margin: 0 auto;
    padding-right: 10px;

    @media (max-width: 900px) {
        padding-bottom: 20px;
    }
`;

export const StyledImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
