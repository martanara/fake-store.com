import React from "react";

import { StyledHeading } from "./Heading.styles";

interface HeadingProps {
    children: string;
}

const Heading = (props: HeadingProps) => {
    const { children } = props;

    return (
        <StyledHeading>
            <h2>{children}</h2>
        </StyledHeading>
    );
};

export default Heading;
