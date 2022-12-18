import React from "react";

import Container from "components/Container";
import { StyledFooter, StyledParagraph } from "./Footer.styles";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledParagraph>@fake-store.com 2022</StyledParagraph>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
