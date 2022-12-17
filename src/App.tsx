import React from "react";
import { ThemeProvider } from "styled-components";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// styles
import { GlobalStyle } from "./styles/styles";
import { theme } from "./styles/styles";

import RoutesConfig from "./routes";
import { AppContextProvider } from "context/context";

const App = () => {
    library.add(fas);

    return (
        <ThemeProvider theme={theme}>
            <AppContextProvider>
                <GlobalStyle />
                <RoutesConfig />
            </AppContextProvider>
        </ThemeProvider>
    );
};

export default App;

