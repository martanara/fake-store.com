import React, { ReactNode } from "react";
import { StyledWrapper } from "./Wrapper.styles";

interface WrapperProps {
    children: ReactNode;
}

const Wrapper = (props: WrapperProps) => {
    const { children } = props;

    return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
