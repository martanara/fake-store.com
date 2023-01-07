import styled from "styled-components";

export const StyledParagraph = styled.p`
    text-align: center;
`

export const StyledLogin = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
`;

export const StyledFormInput = styled.input`
    border: 2px solid ${(props) => props.theme.colors.lightGreen};
    border-radius: 5%;
    margin-bottom: 15px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.white};
`;
