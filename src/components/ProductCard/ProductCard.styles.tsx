import styled from "styled-components";

export const StyledProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 15px;
    width: 320px;
    border: 1px solid ${(props) => props.theme.colors.moss};
`;

export const StyledTitle = styled.h3`
    min-height: calc(2 * 1.5em);
    padding: 0 10px;
    max-width: 22rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`

export const StyledImgWrapper = styled.div`
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

export const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
