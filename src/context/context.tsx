import React, { createContext, ReactNode, useContext, useState } from "react";

export const AppContext = createContext<any>(null);

interface IContextProps {
  children: ReactNode;
}

export const AppContextProvider = (props: IContextProps) => {
    const { children } = props;
    
    const [userToken, setUserToken] = useState<string | undefined>(undefined);

    return (
        <AppContext.Provider
            value={{
                userToken,
                setUserToken,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): IProps => {
    const { userToken, setUserToken } = useContext(AppContext);

    return {
        userToken,
        setUserToken,
    };
};

interface IProps {
    userToken?: string;
    setUserToken: (arg: string) => void;
}
