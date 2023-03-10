import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useAppContext } from "context/context";
import Layout from "components/Layout";
import Home from "pages/Home";
import Products from "pages/Products";
import About from "pages/About";
import Contact from "pages/Contact";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import { getCookie } from "utils/getCookie";
import PrivateRoute from "./privateRoute";

const RoutesConfig = () => {
    const { setUserToken } = useAppContext();

    useEffect(() => {
        setUserToken(getCookie());
    });

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
                        <PrivateRoute>
                            <Layout>
                                <Products />
                            </Layout>
                        </PrivateRoute>
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
                            <Login />
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
