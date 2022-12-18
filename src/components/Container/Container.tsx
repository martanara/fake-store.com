import React, { ReactNode } from "react";

import { StyledContainer } from "./Container.styles";

interface IContainerProps {
    children: ReactNode;
}

const Container = (props: IContainerProps) => {
    const { children } = props;

    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
