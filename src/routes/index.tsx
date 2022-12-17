import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "pages/Layout";
import Home from "pages/Home";
import Products from "pages/Products";
import About from "pages/About";
import Contact from "pages/Contact";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import { getCookie } from "utils/getCookie";

const RoutesConfig = () => {
    const [userToken, setUserToken] = useState<string | undefined>(undefined);

    useEffect(() => {
        setUserToken(getCookie());
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/products"
                    element={
                        <Layout>
                            <Products userToken={userToken} />
                        </Layout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <Contact />
                        </Layout>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Layout>
                            <Login userToken={userToken}/>
                        </Layout>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Layout>
                            <NotFound />
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesConfig;
