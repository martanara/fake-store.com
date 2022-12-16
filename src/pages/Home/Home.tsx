import React from "react";

import { 
    StyledDescription, 
    StyledHeading, 
    StyledHome, 
    StyledImg, 
    StyledImgContainer 
} from "./Home.styles";
import { LoremIpsum } from "./LoremIpsum";

const Home = () => {
    return (
        <React.Fragment>
            <StyledHeading><h2>Welcome to FakeStore</h2></StyledHeading>
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
