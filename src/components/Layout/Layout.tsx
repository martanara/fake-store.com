import React, { ReactNode } from "react";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { StyledLayout } from "./Layout.styles";

interface LayoutProps {
    children: ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <React.Fragment>
            <Navbar />
            <StyledLayout>{props.children}</StyledLayout>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
