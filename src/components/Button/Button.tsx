import { StyledButton } from "./Button.styles";

interface ButtonProps {
    className?: string;
    children: string;
  }

const Button = (props: ButtonProps) => (
    <StyledButton className={props.className}>
        {props.children}
    </StyledButton>
);

export default Button;
