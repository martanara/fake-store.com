import React, { MouseEventHandler } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { StyledIconButton } from "./IconButton.styles";

interface IIconButtonProps {
    onClick?: MouseEventHandler;
    dark?: boolean;
    icon: IconProp;
    className?: string;
}

const IconButton = (props: IIconButtonProps) => {
    const { onClick, icon, dark } = props;

    return (
        <StyledIconButton className={props.className} onClick={onClick} dark={dark}>
            <FontAwesomeIcon icon={icon} />
        </StyledIconButton>
    );
};

export default IconButton;
