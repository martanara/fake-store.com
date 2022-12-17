import React from "react";

import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import Button from "components/Button";
import Heading from "components/Heading";
import ErrorMessage from "./ErrorMessage";
import { StyledForm, StyledFormInput, StyledLogin } from "./Login.styles";
import { useAppContext } from "context/context";

const Login = () => {
  const { userToken } = useAppContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        document.cookie = `token=${uuidv4()}`;
    };

    if (userToken) return <Heading>Welcome back!</Heading>

    return (
        <React.Fragment>
            <Heading>Please enter your login details</Heading>
            <StyledLogin>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <StyledFormInput
                        id="email"
                        placeholder="Enter email address"
                        {...register("email", {
                            required: "required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format",
                            },
                            minLength: {
                                value: 3,
                                message: "Min length is 3",
                            },
                        })}
                        type="email"
                    />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    <StyledFormInput
                        id="password"
                        placeholder="Enter password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 3,
                                message: "Min length is 3",
                            },
                        })}
                    />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    <Button type="submit">Submit</Button>
                </StyledForm>
            </StyledLogin>
        </React.Fragment>
    );
};

export default Login;
