import Heading from "components/Heading";
import React from "react";

import { StyledDescription, StyledHome, StyledImg, StyledImgContainer } from "./Home.styles";
import { LoremIpsum } from "./LoremIpsum";

const Home = () => {
    return (
        <React.Fragment>
            <Heading>
                Welcome to FakeStore
            </Heading>
            <StyledHome>
                <StyledImgContainer>
                    <StyledImg src="https://picsum.photos/id/141/1000/1000" />
                </StyledImgContainer>
                <StyledDescription>
                    <LoremIpsum />
                </StyledDescription>
            </StyledHome>
        </React.Fragment>
    );
};

export default Home;
