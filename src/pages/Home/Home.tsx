import React from "react";

import Heading from "components/Heading";
import { 
    StyledDescription, 
    StyledHome, 
    StyledImg, 
    StyledImgWrapper 
} from "./Home.styles";

const Home = () => {
    return (
        <React.Fragment>
            <Heading>Welcome to FakeStore</Heading>
            <StyledHome>
                <StyledImgWrapper>
                    <StyledImg src="https://picsum.photos/id/20/1000/1000" alt="dessert" />
                </StyledImgWrapper>
                <StyledDescription>
                    <h3>About our store</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in est eget nisi accumsan gravida eu facilisis nunc.
                        Aliquam porttitor lectus eget molestie mollis. Duis convallis tristique risus vitae congue. Ut dignissim orci diam,
                        id iaculis mauris tristique quis. Nunc egestas lectus vitae efficitur pretium. Cras sit amet enim enim.
                    </p>
                    <p>
                        Proin ornare nulla ut purus iaculis finibus. Aliquam nec nunc rutrum, fringilla sapien non, vehicula nisl.
                        Suspendisse eu purus sodales ex congue mattis. Vivamus turpis eros, placerat sit amet convallis id, gravida vitae
                        ipsum. Nullam interdum vestibulum quam at ornare. Aliquam et felis tortor. Curabitur eget condimentum eros.
                        Phasellus facilisis lectus turpis, nec lacinia nisi pellentesque quis. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia curae; Duis efficitur vestibulum vehicula.
                    </p>
                    <p>
                        Aenean congue id mi in tristique. Donec sit amet varius lacus. Proin commodo, purus non vehicula gravida, enim arcu
                        porta magna, et interdum nulla nibh at eros. Nunc porttitor, est id tincidunt ornare, augue ligula congue eros, non
                        iaculis tellus ex sed tellus. Praesent sem ligula, venenatis fringilla est eget, consequat porttitor nibh.
                    </p>
                </StyledDescription>
            </StyledHome>
        </React.Fragment>
    );
};

export default Home;
