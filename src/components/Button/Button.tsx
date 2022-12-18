import { MouseEventHandler } from "react";
import { StyledButton } from "./Button.styles";

interface IButtonProps {
    className?: string;
    children: string;
    onClick?: MouseEventHandler;
    type?: string;
}

const defaultProps = {
    onClick: () => {},
};

const Button = (props: IButtonProps) => (
    <StyledButton className={props.className} onClick={props.onClick}>
        {props.children}
    </StyledButton>
);

Button.defaultProps = defaultProps;

export default Button;
