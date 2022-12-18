import React from "react";

import { StyledHeading } from "./Heading.styles";

interface IHeadingProps {
    children: string;
}

const Heading = (props: IHeadingProps) => {
    const { children } = props;

    return (
        <StyledHeading>
            <h2>{children}</h2>
        </StyledHeading>
    );
};

export default Heading;
