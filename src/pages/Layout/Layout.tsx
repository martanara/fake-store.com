import React, { ReactNode } from "react";

import Footer from "pages/Footer";
import Navbar from "pages/Navbar";
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
