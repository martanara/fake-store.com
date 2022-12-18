import React, { ReactNode } from "react";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { StyledLayout } from "./Layout.styles";

interface ILayoutProps {
    children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
    return (
        <React.Fragment>
            <Navbar />
            <StyledLayout>{props.children}</StyledLayout>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
