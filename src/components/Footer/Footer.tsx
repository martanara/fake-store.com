import Wrapper from "components/Wrapper";
import React from "react";
import { StyledFooter, StyledParagraph } from "./Footer.styles";

const Footer = () => {
    return (
        <StyledFooter>
            <Wrapper>
                <StyledParagraph>@fake-store.com 2022</StyledParagraph>
            </Wrapper>
        </StyledFooter>
    )
};

export default Footer;